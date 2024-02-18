export const openInstagramPage = () => {
    window.open('https://www.instagram.com/blackboxstudios.ind/', '_blank');
};

export const openMailComposeBox = () => {
    window.location.href = 'mailto:blackboxstudios.ind@gmail.com';
};

// const openFacebookPage = () => {
//     window.open('https://www.facebook.com/hashtag/blackboxstudios_ind', '_blank');
// };

export const openGoogleMaps = () => {
    const latitude = '12.9716'; // Replace with your latitude
    const longitude = '77.5946'; // Replace with your longitude
    const url = `https://www.google.com/maps?q=${latitude},${longitude}`;
    window.open(url, '_blank');
};

export const openDialPad = () => {
    window.location.href = 'tel:+918807877807';
};

export const openWhatsApp = () => {
    window.open('https://wa.me/+918807877807', '_blank');
};