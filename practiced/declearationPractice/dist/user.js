export let jon;
jon = {
    email: "jon@example.com",
    roles: ["admin"],
};
export let alice = {
    email: "alice@example.com",
    roles: ["super_admin"],
    source: "facebook",
};
export function printUser(user) {
    console.log(`Email: ${user.email}`);
    console.log(`Roles: ${user.roles.join(", ")}`);
    console.log(`Source: ${user.source === undefined ? "--" : user.source}`);
}
