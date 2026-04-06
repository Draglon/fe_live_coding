import navigation from "./navigation";
import localeSwitcher from "./localeSwitcher";
import shared from "./shared";
import Task_1 from "./Task_1";
import Task_2 from "./Task_2";
import Task_3 from "./Task_3";
import Task_4 from "./Task_4";
import Task_5 from "./Task_5";
import Task_6 from "./Task_6";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  ...navigation,
  ...localeSwitcher,
  ...shared,
  ...Task_1,
  ...Task_2,
  ...Task_3,
  ...Task_4,
  ...Task_5,
  ...Task_6,
};