export enum SelectedPage {
    Home = "home",
    ContactUs = "contactus",
    Gallery = "gallery",
    First = "first"
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