import {Component, ChangeDetectionStrategy, OnInit, ViewChild, TemplateRef, Input} from '@angular/core';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from 'date-fns';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs/Subject';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent
} from 'angular-calendar';
import {CalendarHttpService} from '../server-provider/stubs/calendar-http.service';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};
@Component({
  selector: 'app-calendar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  providers: [CalendarHttpService]
})
export class CalendarComponent implements OnInit{
  @ViewChild('modalContent') modalContent: TemplateRef<any>;
  constructor(private modal: NgbModal, private calendarHttp: CalendarHttpService) {}

  fetchCalendar () {
    return this.calendarHttp.getCurrent().subscribe(
      data =>{
        let obj = JSON.parse(data._body) ;
        obj.map( (item)=> {
          this.events.push({color: {primary:item.color, secondary: item.color}, start: new Date(item.date), title: item.content});

        });
        this.refresh.next();
        this.waiting = false;

        return obj
      },
      error => {

        alert('error while fetching info for calendar');
        return error;
      });
  }
  @Input() view: string = 'month';
  waiting: boolean = true;

  @Input() viewDate: Date = new Date();

  modalData: {
    action: string,
    event: CalendarEvent
  };



  refresh: Subject<any> = new Subject();

  events: CalendarEvent[] = [];


  activeDayIsOpen: boolean = true;



  dayClicked({date, events}: {date: Date, events: CalendarEvent[]}): void {

    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
        this.viewDate = date;
      }
    }
  }

  eventTimesChanged({event, newStart, newEnd}: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
    this.handleEvent('Dropped or resized', event);
    this.refresh.next();
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = {event, action};
    this.modal.open(this.modalContent, {size: 'lg'});
  }

  addEvent(): void {
    this.events.push({
      title: 'New event',
      start: startOfDay(new Date()),
      end: endOfDay(new Date()),
      color: colors.red,
      draggable: true,
      resizable: {
        beforeStart: true,
        afterEnd: true
      }
    });
    this.refresh.next();
  }
  todayDate(): Date {
    return new Date();
  }
  ngOnInit(){
this.fetchCalendar();
  }


}
