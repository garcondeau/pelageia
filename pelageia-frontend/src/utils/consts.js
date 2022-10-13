import { Badge } from "@fluentui/react-components";

const subscriptions = {
  1: <Badge appearance="outline">Basic</Badge>,
  2: <Badge appearance="tint">Standart</Badge>,
  3: <Badge appearance="filles">Professional</Badge>,
};

const roles = {
  admin: "Administrator",
  client: "Client",
};

const user_status = {
  true: {
    badge: "available",
    text: "Active",
  },
  false: {
    badge: "busy",
    text: "Deactivated",
  },
};

export { subscriptions, roles, user_status };
