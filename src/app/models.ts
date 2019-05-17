export class Menu {
  _id: string;
  name: string;
  foods: Food[];
}

export class Food {
  _id: string;
  name: string;
  price: number;
  description: string;
  additions: Addition[];
}

export class Addition {
  _id: string;
  name: string;
  price: number;
}

export class CreateMenuModel {
  name: string;
  foods: CreateFoodModel[] = [];
}

export interface CreateFoodModel {
  _id?: string;
  name: string;
  price: number;
  description: string;
  additions: CreateFoodAdditionModel[];
  image?: File;
}

export interface CreateFoodAdditionModel {
  _id?: string;
  name: string;
  price: number;
}

export interface Order {
  _id: string;
  user: User;
  totalPrice: number;
  items: OrderItem[];
  createdDate: Date;
  finishedDate: Date;
  history: OrderState[];
  currentState: OrderState;
  comment: string;
}

export interface OrderState {
  state: State;
  enteredBy: User;
  enteredDate: Date;
}

export type State = 'SAVED' | 'PAID' | 'SENT_TO_PREPARATION' | 'IN_PREPARATION' | 'READY' | 'SERVED' | 'REJECTED';

export interface User {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
}

export interface OrderItem {
  _id: string;
  food: Food;
  additions: OrderItemAddition[];
}

export interface OrderItemAddition {
  _is: string;
  price: number;
  quantity: number;
  foodAddition: Addition;
}

export interface MonthResponse {
  weeks: Days[];
}

export interface Days {
  [date: string]: Day;
}

export interface Day {
  workersPresent: Worker[];
  requests: DayOffRequest[];
}

export interface DayOffRequest {
  id: string;
  person: User;
  state: DayOffState;
  date: Date;
}

export type DayOffState = 'UNRESOLVED' | 'APPROVED' | 'REJECTED';

export interface Worker {
  id: string;
  person: User;
  workHours: WorkHours;
}

export interface WorkHours {
  day: number;
  startHour: Date;
  endHour: Date;
}

export interface WorkerListItem {
  id: string;
  person: User;
}

export interface WorkerList {
  workers: WorkerListItem[];
}

export interface WorkerCreateRequest {
  firstName: string;
  lastName: string;
  workHours?: WorkHoursCreateRequest[];
}

export interface WorkHoursCreateRequest {
  dayOfTheWeek: number;
  start: SimpleTime;
  end: SimpleTime;
}

export interface WorkerCreateResponse {
  email: string;
  password: string;
}

export interface SimpleTime {
  hour: number;
  minute: number;
}

export interface WorkerDetailsResponse {
  person: User;
  employedDate: Date;
  workDays: WorkHoursDetails[];
  requests: DayOffRequestDetails[];
}

export interface WorkHoursDetails {
  start: Date;
  end: Date;
  hours: string;
  minutes: string;
  isWorking: boolean;
  day: number;
}

export interface DayOffRequestDetails {
  id: string;
  state: DayOffState;
  date: Date;
  resolvedBy: User;
  resolvedDate: Date;
}

export interface WorkerPasswordResetRequest {
  workerId: string;
}

export interface WorkerPasswordResetResponse {
  email: string;
  password: string;
}

export interface PageableListRequest<T> {
  page: number;
  pageSize: number;
  search: string;
  filter: T;
}

export interface PageableListResponse<T> {
  page: number;
  totalCount: number;
  itemsCount: number;
  items: T[];
}

export interface SupplyListRequest extends PageableListRequest<SupplyListFilter> {}

export interface SupplyListResponse extends PageableListResponse<Supply> {}

export interface Supply {
  id: string;
  name: string;
  url?: string;
  price: Price;
  requestedBy: string;
  requestedDate: Date;
  state: SupplyStateEnum;
}

export interface Price {
  amount: number;
  currency: string;
}

export interface SupplyListFilter {
  states: SupplyStateEnum[];
  amountFrom: number;
  amountTo: number;
  currencies: string[];
  dateFrom: Date;
  dateTo: Date;
}

export type SupplyStateEnum = 'NEW' | 'ACCEPTED' | 'REJECTED' | 'CANCELLED' | 'PENDING' | 'READY' | 'DELIVERED';

export interface SupplyState {
  state: SupplyStateEnum;
  enteredBy: User;
  enteredDate: Date;
  rejectionReason: string;
}

export interface SupplyDetailsResponse {
  id: string;
  name: string;
  description: string;
  url: string;
  price: Price;
  requestedBy: User;
  requestedDate: Date;
  history: SupplyState[];
  comments: Comment[];
  currentState: SupplyState;
}


export interface Comment {
  content: string;
  author: User;
  date: Date;
}

export interface CreateCommentRequest {
  content: string;
}

export interface SupplyChangeStateRequest {
  id: string;
  state: SupplyStateEnum;
  rejectionReason?: string;
}
