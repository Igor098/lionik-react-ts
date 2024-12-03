export const data = [
    {
        title: "Home",
        href: "#home",
    },
    {
        title: "Services",
        href: "#services",
    },
    {
        title: "Articles",
        href: "#articles",
    },
    {
        title: "Clients",
        href: "#clients",
    },
    {
        title: "Contacts",
        href: "#contacts",
    },
];

export const servicesData = [
    {
        svgSrc: "src/assets/images/services/what-1.svg",
        title: "Your Legacy",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy",
    },
    {
        svgSrc: "src/assets/images/services/what-2.svg",
        title: "Your Health",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy",
    },
    {
        svgSrc: "src/assets/images/services/what-3.svg",
        title: "Funeral & Memorial",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy",
    },
    {
        svgSrc: "src/assets/images/services/what-4.svg",
        title: "Legal & Financial",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy",
    },
]

export const articlesData = [
    {
        imgSrc: "src/assets/images/Articles/article-img-1.png",
        dateTime: "2021-11-15",
        textDateTime:"15 Nov 2021",
        description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy",
        title:"Jurisdiction"
    },
    {
        imgSrc: "src/assets/images/Articles/article-img-2.png",
        dateTime: "2021-11-28",
        textDateTime:"28 Nov 2021",
        description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy",
        title:"Consulting"
    },
    {
        imgSrc: "src/assets/images/Articles/article-img-3.png",
        dateTime: "2021-11-29",
        textDateTime:"29 Nov 2021",
        description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy",
        title:"Rights and obligations"
    },
    {
        imgSrc: "src/assets/images/Articles/article-img-4.png",
        dateTime: "2021-12-11",
        textDateTime:"11 Dec 2021",
        description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy",
        title:"Contractors"
    },



]
export const contactsData = [
    {
        type:"text",
        svgSrc: "src/assets/images/Contacts/location_on.svg",
        data:[{
            text: "Duis autem vel eum iriure dolor in hendrerit in vulputate velit.",
            href:""
        }],
        title:"Visit Us",
    },
    {
        type:"phone",
        data:
            [
                {
                    text:"+7 (987) 654-32-10",
                    href:"tel:+79876543210"
                },
                {
                    text: "+7 (123) 456-78-90",
                    href: "tel:+71234567890"

                }],

        svgSrc: "src/assets/images/Contacts/phone.svg",
        title:"Call Us",
    },
    {
        type:"email",
        data:[
            {
                text:  "example@example.com",
                href: "mailto:example@example.com",
            },
            {
                text: "support@example.com",
                href: "mailto:support@example.com",
            }
        ],
        svgSrc: "src/assets/images/Contacts/mail.svg",
        title:"Call Us",
    }

]