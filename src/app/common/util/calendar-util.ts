import { Day } from '../../models';

export class CalendarUtil {

  public static getMonth(monthNumber?: number, year?: number) {
    const date: Date = CalendarUtil.createDate(monthNumber, year);
    const month: Month = {
      ofYear: date.getFullYear(),
      monthNumber: date.getMonth(),
      weeks: [],
    };

    const iterableDate: Date = CalendarUtil.getFirstDayOfWeek(CalendarUtil.getFirstDayOfMonth(date));

    for (let weekNumber = 0; weekNumber < 6; ++weekNumber) {
      const week: Week = { days: [] };
      for (let index = 0; index < 7; ++index) {
        week.days.push({
          date: new Date(iterableDate),
          belongsToMonth: iterableDate.getMonth() === CalendarUtil.getCurrentMonth(),
          isSelected: false,
        });
        iterableDate.setDate(iterableDate.getDate() + 1);
      }
      month.weeks.push(week);
    }
    return month;
  }

  public static isToday(date: Date): boolean {
    const today = new Date();
    return date.getFullYear() === today.getFullYear() && date.getMonth() === today.getMonth() && date.getDate() === today.getDate();
  }

  public static getCurrentYear(): number {
    return new Date().getFullYear();
  }

  private static getCurrentMonth(): number {
    return new Date().getMonth();
  }

  private static getFirstDayOfMonth(date: Date): Date {
    return new Date(date.getFullYear(), date.getMonth(), 1);
  }

  private static getFirstDayOfWeek(date: Date): Date {
    const day = date.getDay();
    const diff = date.getDate() - day + (day === 0 ? -6 : 1); // adjust when day is sunday
    return new Date(date.setDate(diff));
  }

  private static createDate(month?: number, year?: number): Date {
    return new Date(year || CalendarUtil.getCurrentYear(), typeof month === 'number' ? month : CalendarUtil.getCurrentMonth());
  }

}

export interface Month {
  ofYear: number;
  monthNumber: number;
  weeks: Week[];
}

export interface Week {
  days: DayOfMonth[];
}

export interface DayOfMonth {
  date: Date;
  belongsToMonth: boolean;
  isSelected: boolean;
  details?: Day;
}

export const MONTH_NAMES: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',
  'November', 'December'];
