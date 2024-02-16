// imageLoader.ts
export const loadImageUrls = async (folderName: String) => {
    const name = folderName.replace(/\s/g, '').toLowerCase();
    const imageUrls = [];
    var count = 0;
    if (name === "gallery" || name === "slides") {
        count = 6;
    }else if(name === "timeline"){
        count = 2;
    }else{
        count = 12;
    }
    try {
        for (let i = 1; i <= count; i++) {
            const module = await import(`../../assets/${name}/img${i}.jpg`);
            imageUrls.push(module.default);
        }
    } catch (error) {
        console.error('Error loading image:', error);
    }
    return imageUrls;
};
