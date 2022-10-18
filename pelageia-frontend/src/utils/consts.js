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

const regex = {
  email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  password: /^[a-zA-Z0-9!@#$%^&*]{6,16}$/
}

export { subscriptions, roles, user_status, regex };
