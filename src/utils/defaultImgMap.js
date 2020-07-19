import bahco20 from '../assets/images/top-20-logos-bahco-1.png';
import bosch20 from '../assets/images/top-20-logos-bosch-1.png';
import dewalt20 from '../assets/images/top-20-logos-dewalt-1.png';
import evolution20 from '../assets/images/top-20-logos-evolution-1.png';
import hikoki20 from '../assets/images/top-20-logos-hikoki-1.png';
import makita20 from '../assets/images/top-20-logos-makita-1.png';
import metabo20 from '../assets/images/top-20-logos-metabo-1.png';
import stanley20 from '../assets/images/top-20-logos-stanley-1.png';
import top40 from '../assets/images/top-40-banner.png';
import signin from '../assets/images/signin.png';
import basket from '../assets/images/basket.png';
import truck from '../assets/images/truck.png';
import calendar from '../assets/images/calendar.png';
import percent from '../assets/images/percent.png';
import parcel from '../assets/images/parcel.png';
import arrow from '../assets/images/arrow.png';
import weekend from '../assets/images/weekend.png';
import github from '../assets/images/github.png';
import top40Link from '../assets/images/top40Link.png';
import newProduct from '../assets/images/newProduct.png';
import top40Title from '../assets/images/top40Title.png';
import makita from '../assets/images/makitaTitle.png';
import dewalt from '../assets/images/dewaltTitle.png';
import hikoki from '../assets/images/hikokiTitle.png';
import bosch from '../assets/images/boschTitle.png';
import bahco from '../assets/images/bahcoTitle.png';
import metabo from '../assets/images/metaboTitle.png';
import stanley from '../assets/images/stanleyTitle.png';
import evolution from '../assets/images/evolutionTitle.png';

let imgs = {
    bahco20,
    bosch20,
    dewalt20,
    evolution20,
    hikoki20,
    makita20,
    metabo20,
    stanley20,
    top40,
    truck,
    calendar,
    percent,
    parcel,
    signin,
    basket,
    arrow,
    weekend,
    github,
    top40Link,
    newProduct,
    top40Title,
    makita,
    dewalt,
    hikoki,
    bosch,
    bahco,
    metabo,
    stanley,
    evolution
};

function getImage(key) {
    return imgs[key];
}

export default getImage;
