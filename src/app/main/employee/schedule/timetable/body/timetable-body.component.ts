import { Component, Input, OnInit } from '@angular/core';
import { DayOfMonth, Month } from '../../../../../common/util/calendar-util';
import { WorkDay, Worker } from '../../../../../models';

@Component({
  selector: 'app-timetable-body',
  templateUrl: './timetable-body.component.html',
  styleUrls: ['./timetable-body.component.less']
})
export class TimetableBodyComponent implements OnInit {

  @Input()
  month: Month;

  @Input()
  selectedDay: DayOfMonth;

  @Input()
  workers: Worker[];

  dayNames: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  daysData: DayData[];

  ngOnInit(): void {
    this.daysData = this.calculateDefaultsForDays();
  }

  changeSelection(day: DayOfMonth): void {
    this.selectedDay.date = day.date;
  }

  isSelected(day: DayOfMonth): boolean {
    return day.date.setHours(0, 0, 0, 0) === this.selectedDay.date.setHours(0, 0, 0, 0);
  }

  private calculateDefaultsForDays(): DayData[] {
    const daysNumbers = [0, 1, 2, 3, 4, 5, 6];
    const daysData: DayData[] = daysNumbers.map(() => ({ people: [] }));

    this.workers.forEach(worker => {
      daysNumbers.forEach(dayNumber => {
        if (this.isWorking(worker.defaultWorkHours[dayNumber])) {
          daysData[dayNumber].people.push(worker);
        }
      });
    });

    return daysData;
  }

  private isWorking(workDay: WorkDay): boolean {
    return workDay.endHour > workDay.startHour;
  }
}

interface DayData {
  people: Worker[];
}
