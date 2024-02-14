import StarIcon from "../images/staricon.png";
import Ashanty from "../images/ashanty.png";
import Lee from "../images/lee.png";
import Paul from "../images/paul.png";
import Bella from "../images/bella.png";
import Greeksalad from "../images/greek-salad.png";
import Bruchetta from "../images/cheese-bruchetta.png";
import Lemondessert from "../images/lemon-dessert.jpg";

export const propavatar = [
    {   id: 1,
        name: "Lee",
        staricon: StarIcon,
        imageSrc: Lee,
    },
    {   id: 2,
        name: "Ashanty",
        staricon: StarIcon,
        imageSrc: Ashanty,
    },
    {   id: 3,
        name: "Paul",
        staricon: StarIcon,
        imageSrc: Paul,
    },
    {   id: 4,
        name: "Bella",
        staricon: StarIcon,
        imageSrc: Bella,
    },
]

export const specials = [
    {
        title: "Greek salad",
        price: "$ 12.99",
        description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.",
        imageSrc: Greeksalad,
    },
    {
        title: "Bruchetta",
        price: "$ 5.99",
        description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.",
        imageSrc: Bruchetta,
    },
    {
        title: "Lemon dessert",
        price: "$ 4.99",
        description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.",
        imageSrc: Lemondessert,
    }
];

export const NavItem = [
    {
      id: 1,
      label: 'Home',
      href: '/'
    },
    {
      id: 2,
      label: 'About',
      href:'#'
    },
    {
      id: 3,
      label: 'Reservation',
      children: [
        { id: 5,
          subLabel: 'Reserve a table',
          href: '/booking',
        },
        { id: 6,
          subLabel: 'Cancel reservation',
          href: '#',
        },
      ],
    },
    {
      id: 4,
      label: 'Order Online',
      children: [
        { id: 7,
          label: 'Online Menu',
          subLabel: 'Online Menu',
          href: '#',
        },
      ],
    },
  ];
