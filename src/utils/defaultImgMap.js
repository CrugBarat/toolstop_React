import bahco20 from '../assets/images/top-20-logos-bahco-1.png';
import bosch20 from '../assets/images/top-20-logos-bosch-1.png';
import dewalt20 from '../assets/images/top-20-logos-dewalt-1.png';
import evolution20 from '../assets/images/top-20-logos-evolution-1.png';
import hikoki20 from '../assets/images/top-20-logos-hikoki-1.png';
import makita20 from '../assets/images/top-20-logos-makita-1.png';
import metabo20 from '../assets/images/top-20-logos-metabo-1.png';
import stanley20 from '../assets/images/top-20-logos-stanley-1.png';
import top40 from '../assets/images/top-40-banner.png';

let imgs = {
    bahco20,
    bosch20,
    dewalt20,
    evolution20,
    hikoki20,
    makita20,
    metabo20,
    stanley20,
    top40
};

function getImage(key) {
    return imgs[key];
}

export default getImage;
