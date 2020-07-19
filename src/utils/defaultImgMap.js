import bahco20 from '../assets/images/defaultImages/top-20-logos-bahco-1.png';
import bosch20 from '../assets/images/defaultImages/top-20-logos-bosch-1.png';
import dewalt20 from '../assets/images/defaultImages/top-20-logos-dewalt-1.png';
import evolution20 from '../assets/images/defaultImages/top-20-logos-evolution-1.png';
import hikoki20 from '../assets/images/defaultImages/top-20-logos-hikoki-1.png';
import makita20 from '../assets/images/defaultImages/top-20-logos-makita-1.png';
import metabo20 from '../assets/images/defaultImages/top-20-logos-metabo-1.png';
import stanley20 from '../assets/images/defaultImages/top-20-logos-stanley-1.png';
import top40 from '../assets/images/defaultImages/top-40-banner.png';
import signin from '../assets/images/misc/signin.png';
import basket from '../assets/images/misc/basket.png';
import truck from '../assets/images/misc/truck.png';
import calendar from '../assets/images/misc/calendar.png';
import percent from '../assets/images/misc/percent.png';
import parcel from '../assets/images/misc/parcel.png';
import arrow from '../assets/images/misc/arrow.png';
import weekend from '../assets/images/misc/weekend.png';
import github from '../assets/images/misc/github.png';
import top40Link from '../assets/images/linkImages/top40Link.png';
import newProduct from '../assets/images/linkImages/newProduct.png';
import top40Title from '../assets/images/titleImages/top40Title.png';
import makita from '../assets/images/titleImages/makitaTitle.png';
import dewalt from '../assets/images/titleImages/dewaltTitle.png';
import hikoki from '../assets/images/titleImages/hikokiTitle.png';
import bosch from '../assets/images/titleImages/boschTitle.png';
import bahco from '../assets/images/titleImages/bahcoTitle.png';
import metabo from '../assets/images/titleImages/metaboTitle.png';
import stanley from '../assets/images/titleImages/stanleyTitle.png';
import evolution from '../assets/images/titleImages/evolutionTitle.png';

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
