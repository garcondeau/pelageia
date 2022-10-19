import { Badge } from "@fluentui/react-components";

const subscriptions = {
  1: <Badge appearance="outline">Basic</Badge>,
  2: <Badge appearance="tint">Standart</Badge>,
  3: <Badge appearance="filles">Professional</Badge>,
};

const responseStatus = {
  HTTP_OK: 200,
  HTTP_CREATED: 201,
  HTTP_NO_CONTENT: 204,
  HTTP_BAD_REQUEST: 400,
  HTTP_ERROR_VALIDATION: 422,
  FORBIDDEN: 403,
  HTTP_INTERNAL_SERVER_ERROR: 500,
  HTTP_UNAUTHORIZED: 401,
  HTTP_CONFLICT: 409
};

const roles = {
  3: "Superadmin",
  2: "Administrator",
  1: "Client",
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

export { subscriptions, roles, user_status, regex, responseStatus };
