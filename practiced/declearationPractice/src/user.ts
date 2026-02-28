/// <reference path = "../types/AuthTypes.d.ts" />
import auth = require("AuthTypes");

export let jon: auth.User;
jon = {
  email: "jon@example.com",
  roles: ["admin"],
};

export let alice: auth.User = {
  email: "alice@example.com",
  roles: ["super_admin"],
  source: "facebook",
};

export function printUser(user: auth.User): void {
  console.log(`Email: ${user.email}`);
  console.log(`Roles: ${user.roles.join(", ")}`);
  console.log(`Source: ${user.source === undefined ? "--" : user.source}`);
}
