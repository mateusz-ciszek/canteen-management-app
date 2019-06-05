import { ALL_PERMISSIONS, Permission } from '../../../permission';


const permissionNameMap: Map<Permission, string> = new Map<Permission, string>([
  ['P_MENU_VIEW_MODULE', 'Menu module'],
  ['P_MENU_LIST_VIEW', 'View menus list'],
  ['P_MENU_CREATE', 'Create menu'],
  ['P_MENU_MODIFY', 'Modify menu'],
  ['P_MENU_DELETE', 'Delete menu'],
  ['P_MENU_DETAILS_VIEW', 'View menu details'],
  ['P_MENU_FOOD_CREATE', 'Create meal'],
  ['P_MENU_FOOD_MODIFY', 'Modify meal'],
  ['P_MENU_FOOD_DELETE', 'Delete meal'],
  ['P_MENU_FOOD_DETAILS_VIEW', 'View meal details'],

  ['P_ORDER_VIEW_MODULE', 'Order module'],
  ['P_ORDER_LIST_VIEW', 'View orders list'],
  ['P_ORDER_DETAILS_VIEW', 'View order details'],
  ['P_ORDER_ADVANCE_ACCEPT', 'Accept order'],
  ['P_ORDER_ADVANCE_PREPARE', 'Prepare order'],
  ['P_ORDER_ADVANCE_SERVE', 'Serve order'],

  ['P_WORKER_VIEW_MODULE', 'Employee module'],
  ['P_WORKER_LIST_VIEW', 'View employees list'],
  ['P_WORKER_CREATE', 'Create employee'],
  ['P_WORKER_DETAILS_VIEW', 'View employee details'],
  ['P_WORKER_PASSWORD_RESET', 'Reset employee\'s password'],
  // ['P_WORKER_PASSWORD_CHANGE', 'Change employee\'s password'],
  ['P_WORKER_RESOLVE_DAY_OFF_REQUEST', 'Resolve day off request'],
  ['P_WORKER_PERMISSIONS_EDIT', 'Edit permissions'],

  ['P_SUPPLY_VIEW_MODULE', 'Supply module'],
  ['P_SUPPLY_LIST_VIEW', 'View supply requests list'],
  ['P_SUPPLY_CREATE', 'Create supply request'],
  ['P_SUPPLY_DETAILS_VIEW', 'View supply request details'],
  ['P_SUPPLY_REQUEST_ACCEPT', 'Accept supply request'],
  ['P_SUPPLY_REQUEST_CANCEL', 'Cancel supply request'],
  ['P_SUPPLY_REQUEST_ADVANCE', 'Advance supply request'],
]);

const permissionDescriptionMap: Map<Permission, string> = new Map<Permission, string>([
  ['P_MENU_VIEW_MODULE', ''],
  ['P_MENU_LIST_VIEW', 'Allows user to display the list of all menus'],
  ['P_MENU_CREATE', 'Allows user to create new menus'],
  ['P_MENU_MODIFY', 'Allows user to modify existing menus'],
  ['P_MENU_DELETE', 'Allows user to delete menus'],
  ['P_MENU_DETAILS_VIEW', 'Allows user to display details of menus'],
  ['P_MENU_FOOD_CREATE', 'Allows user to create new meals'],
  ['P_MENU_FOOD_MODIFY', 'Allows user to modify existing meals'],
  ['P_MENU_FOOD_DELETE', 'Allows user to delete meals'],
  ['P_MENU_FOOD_DETAILS_VIEW', 'Allows user to display details of meals'],

  ['P_ORDER_VIEW_MODULE', ''],
  ['P_ORDER_LIST_VIEW', 'Allows user to display the list of all meal orders'],
  ['P_ORDER_DETAILS_VIEW', 'Allows user to display details of meal orders'],
  ['P_ORDER_ADVANCE_ACCEPT', 'Allows user to accept meal orders'],
  ['P_ORDER_ADVANCE_PREPARE', 'Allows user to advance preparation meal orders'],
  ['P_ORDER_ADVANCE_SERVE', 'Allows user to serve meal orders'],

  ['P_WORKER_VIEW_MODULE', ''],
  ['P_WORKER_LIST_VIEW', 'Allows user to display the list of all employees'],
  ['P_WORKER_CREATE', 'Allows user to add new employee'],
  ['P_WORKER_DETAILS_VIEW', 'Allows user to display details of employee\'s'],
  ['P_WORKER_PASSWORD_RESET', 'Allows user to initiate employee password reset'],
  // ['P_WORKER_PASSWORD_CHANGE', 'Allows user to change employee\'s password'],
  ['P_WORKER_RESOLVE_DAY_OFF_REQUEST', 'Allows user to accept or reject employee\'s day off requests'],
  ['P_WORKER_PERMISSIONS_EDIT', 'Allows user to change other employee\'s permissions'],

  ['P_SUPPLY_VIEW_MODULE', ''],
  ['P_SUPPLY_LIST_VIEW', 'Allows user to display the list of all supply requests'],
  ['P_SUPPLY_CREATE', 'Allows user to create new supply request'],
  ['P_SUPPLY_DETAILS_VIEW', 'Allows user to display details of supply requests'],
  ['P_SUPPLY_REQUEST_ACCEPT', 'Allows user to accept or reject supply requests'],
  ['P_SUPPLY_REQUEST_CANCEL', 'Allows user to cancel supply requests'],
  ['P_SUPPLY_REQUEST_ADVANCE', 'Allows user to advance supply requests'],
]);

const permissionViewMap: Map<Permission, PermissionView>
  = new Map<Permission, PermissionView>([...ALL_PERMISSIONS].map<PermissionView>(permission => ({
    code: permission,
    label: permissionNameMap.get(permission),
    description: permissionDescriptionMap.get(permission),
    selected: false,
  })).map<[Permission, PermissionView]>(view => [view.code, view]));

export const MODULE_PERMISSIONS: ModulePermissions[] = [{
  mainPermission: getView('P_MENU_VIEW_MODULE'),
  subPermissions: ['P_MENU_LIST_VIEW', 'P_MENU_CREATE', 'P_MENU_MODIFY', 'P_MENU_DELETE', 'P_MENU_DETAILS_VIEW', 'P_MENU_FOOD_CREATE',
    'P_MENU_FOOD_MODIFY', 'P_MENU_FOOD_DELETE', 'P_MENU_FOOD_DETAILS_VIEW'].map(getView),
}, {
  mainPermission: getView('P_ORDER_VIEW_MODULE'),
  subPermissions: ['P_ORDER_LIST_VIEW', 'P_ORDER_DETAILS_VIEW', 'P_ORDER_ADVANCE_ACCEPT', 'P_ORDER_ADVANCE_PREPARE',
    'P_ORDER_ADVANCE_SERVE'].map(getView),
}, {
  mainPermission: getView('P_WORKER_VIEW_MODULE'),
  subPermissions: ['P_WORKER_LIST_VIEW', 'P_WORKER_CREATE', 'P_WORKER_DETAILS_VIEW', 'P_WORKER_PASSWORD_RESET',
    'P_WORKER_RESOLVE_DAY_OFF_REQUEST', 'P_WORKER_PERMISSIONS_EDIT'].map(getView),
}, {
  mainPermission: getView('P_SUPPLY_VIEW_MODULE'),
  subPermissions: ['P_SUPPLY_LIST_VIEW', 'P_SUPPLY_CREATE', 'P_SUPPLY_DETAILS_VIEW', 'P_SUPPLY_REQUEST_ACCEPT', 'P_SUPPLY_REQUEST_CANCEL',
    'P_SUPPLY_REQUEST_ADVANCE'].map(getView),
}];

function getView(code: Permission): PermissionView {
  return permissionViewMap.get(code);
}

export interface ModulePermissions {
  mainPermission: PermissionView;
  subPermissions: PermissionView[];
}

export interface PermissionView {
  code: Permission;
  label: string;
  selected: boolean;
  description?: string;
}
