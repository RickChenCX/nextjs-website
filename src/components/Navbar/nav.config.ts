
export interface NavConfigItem {
    name: string,
    desc?: string,
    path?: string,
    group: number,
    groupInnerId?: number,
    children?: NavConfigItem[]
    flag?: string
}
const navConfig: NavConfigItem[] = [
    {
        name: "Home",
        path: "/",
        group: 0,
    },
    {
        name: "Products",
        group: 1,
        children: [
            {
                name: "BOSS Flex",
                path: "/",
                group: 1,
                groupInnerId: 0,
                desc: "this is a test text"
            },
            {
                name: "BOSS Tenant Engage",
                path: "/",
                group: 1,
                groupInnerId: 1,
                desc: "this is a test text, hhhhh "
            },
        ]
    },
    {
        name: "about",
        path: "/",
        group: 2,
    },
    {
        name: "LOG IN",
        path: "/",
        group: 3,
        flag: "login"
    },
]

export default navConfig;