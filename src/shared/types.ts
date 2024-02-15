export enum SelectedPage {
    Home = "home",
    ContactUs = "contactus",
    Gallery = "gallery",
    Timeline= "timeline"
}

export interface BenefitType {
    icon: JSX.Element;
    title: string;
    description: string;
}

export interface ClassType {
    name: string;
    description?: string;
    image: string;
}

export enum SelectedCategory {
    Wedding = "Wedding",
    Bride = "Bride",
    Groom = "Groom",
    BabyPhotoshoot = "Baby Photoshoot",
    Puberty = "Puberty",
    OutdoorPhotoshoot = "Outdoor Photoshoot",
    StreetPhotography = "Street Photography",
    wildlifePhotography = "wildlife Photography"
}