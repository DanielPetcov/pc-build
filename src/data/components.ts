import beQuiet from "../assets/components/be-quiet-pure-power-12-m-psu-product.avif"
import ryzen7 from '../assets/components/procesor.webp'
import ssd from '../assets/components/KINGSTON_ssd.png'
import ram from '../assets/components/Kingston-FURY-RENEGADE-16GB.webp'
import deepcool from '../assets/components/deepcool.webp'
import asrock from '../assets/components/asrock.jpg'
import ssd_storage from '../assets/components/GOODRAM_CX400.webp'
import compute_case from '../assets/components/DEEPCOOL_CH560_Digital.webp'
import gpu from '../assets/components/3070.png'

const components = [
    {
        name: "Ryzen 7 5700X3D",
        price: 3399,
        image: ryzen7,
        link: "https://999.md/ro/88293752",
        bought: true,
    },
    {
        name: "ASROCK B550 PRO4",
        price: 2344,
        image: asrock,
        link: "https://www.fantastic.md/placa-de-baza-asrock-b550-pro4/134-249165",
        bought: false,
    },
    {
        name: "be quiet! PURE POWER 12 M 850W",
        price: 2722,
        image: beQuiet,
        link: "https://electro.md/psu-be-quiet-pure-power-12-m-850w?search=PURE%20POWER%2012%20M",
        bought: false
    },
    {
        name: "DEEPCOOL CH560 Digital",
        price: 2138,
        image: compute_case,
        link: "https://www.fantastic.md/carcasa-fara-psu-deepcool-ch560-digital-w-o-psu-3x140mm-1x120mm-argb-hybrid-tempered-glass-digit-displ/143-334514",
        bought: false
    },
    {
        name: "DEEPCOOL AS500 PLUS",
        price: 1435,
        image: deepcool,
        link: "https://www.fantastic.md/cooler-universal-deepcool-as500-plus/133-229210",
        bought: false
    },
    {
        name: "GOODRAM CX400",
        price: 1275,
        image: ssd_storage,
        link: "https://www.fantastic.md/ssd-goodram-cx400-gen-2/928-227285",
        bought: false
    },
    {
        name: "probabil 3070",
        price: 5000,
        image: gpu,
        link: "#",
        bought: false
    },
    {
        name: "RAM KINGSTON 16GB DDR4-3600MHz FURY Renegade",
        price: 1.107,
        image: ram,
        link: "https://www.fantastic.md/ram-kingston-16gb-ddr4-3600mhz-fury-renegade-kf436c16rb12-16-cl16-20-20-1-35v-intel-xmp-2-0-black/135-348101",
        bought: true,
    },
    {
        name: "SSD KINGSTON KC3000",
        price: 2264,
        image: ssd,
        link: "https://www.fantastic.md/ssd-kingston-kc3000-skc3000s-1024g/765-280264",
        bought: true
    },
]

export default components