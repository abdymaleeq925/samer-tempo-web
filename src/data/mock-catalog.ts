import { SubcategoryId } from '@/constants';

export interface LocalizedText {
  en: string;
  tr: string;
  ru: string;
  de: string;
}

export interface Category {
  id: string;
  slug: string;
  title: LocalizedText;
  description: LocalizedText;
  image: string;
}

export interface Product {
  id: string;
  slug: string;
  smrCode: string;
  oemNumbers?: string[];
  subcategoryId?: SubcategoryId;
  categoryId: string;
  title: LocalizedText;
  description?: LocalizedText;
  images: string[];
  videoUrl?: string;
  specs: {
    label: LocalizedText;
    value: LocalizedText | string;
  }[];
}

export const MOCK_CATEGORIES: Category[] = [
  {
    id: 'cat-cables',
    slug: 'electrical-cables-plugs',
    title: {
      en: 'Electrical Cables & Plugs',
      tr: 'Elektrik Kabloları ve Fişler',
      ru: 'Электрические кабели и вилки',
      de: 'Elektrokabel & Steckdosen',
    },
    description: {
      tr: `SMR TIR elektrik kabloları ailesi PUR (TPU) kılıflı olarak 12V ve 24V olmak üzere iki ana gruba bölünmektedir. 12V ve 24V Elektrik kabloları ISO 1185 ve ISO 3731”e uygun olarak imal edilmektedir. TIR Elektrik kablolarının fişleri metal, plastik ve enjeksiyon baskılı olarak üretilmektedir. ABS/EBS Elektrik kabloları ADR/GGVS ve IP54 sertifikasına uygun olmak üzere 5’li ABS, 7’li EBS, 15’li ABS ve ABS Adaptör kablo olarak satışa sunulmaktadır.

12V ve 24V Aluminyum ve plastik fişlerin yanısıra ABS/EBS fişler ve bu ürünlere ek olarak 12V ve 24V TIR Elektrik kablo soketleri de vidalı ya da sıkmalı bacak çeşitleriyle imalatımız arasındadır.
SMR olarak TIR elektrik kablolarımız müşterilerimizin talepleri doğrultusunda standart çalışma uzunluklarının yanında, özel ihtiyaçlara göre de boyutlandırarak üretilmektedir. SMR TIR elektrik kabloları standart olarak özel dayanıklı ambalajlı kutularında sevk edilmektedir.

ADR/GGVS ve IP54 sertifikasına sahip 7’li, 15’li ve Adaptör sınıfı ABS/EBS fişlerimiz her türlü çalışma şartlarına karşı dünya standartlarında koruma sağlamaktadır.`,
      en: `The SMR truck electrical cable line with PUR (TPU) jacketing is divided into two main categories: 12V and 24V. 12V and 24V electrical cables are manufactured in compliance with ISO 1185 and ISO 3731 standards. Plugs for truck electrical cables are produced in metal, plastic, and molded options. ABS/EBS electrical cables comply with ADR/GGVS and IP54 certification, available as 5-core ABS, 7-core EBS, 15-core ABS, and ABS Adapter cables.

Alongside 12V and 24V aluminum and plastic plugs, ABS/EBS plugs and 12V / 24V truck electrical cable sockets with screw or crimp terminal connections are part of our manufacturing scope.
At SMR, in addition to standard working lengths, our truck electrical cables are customized to meet specific customer requirements. SMR truck electrical cables are shipped in heavy-duty branded packaging as standard.

Our 7-pin, 15-pin, and Adapter class ABS/EBS plugs with ADR/GGVS and IP54 certifications provide world-class protection against all harsh operating conditions.`,
      ru: `Линейка электрических кабелей SMR для грузовых автомобилей с оболочкой из полиуретана (PUR/TPU) подразделяется на две основные группы: 12V и 24V. Кабели 12V и 24V изготавливаются в соответствии со стандартами ISO 1185 и ISO 3731. Вилки кабелей выпускаются в металлическом, пластиковом и литом (инжекционном) исполнениях. Электрические кабели ABS/EBS, соответствующие сертификатам ADR/GGVS и стандарту IP54, поставляются в виде 5-жильных ABS, 7-жильных EBS, 15-жильных ABS и адаптерных кабелей.

Наряду с 12V и 24V алюминиевыми и пластиковыми вилками, а также вилками ABS/EBS, наше производство включает в себя розетки электрических кабелей 12V и 24V под винтовое или обжимное соединение контактов.
Мы производим кабели не только стандартной рабочей длины, но и по индивидуальным размерам клиентов. Кабели SMR поставляются в специальной прочной фирменной упаковке.

Наши вилки ABS/EBS (7-контактные, 15-контактные и адаптерные), имеющие сертификаты ADR/GGVS и защищенные по стандарту IP54, обеспечивают надежную работу по мировым стандартам в любых условиях эксплуатации.`,
      de: `Die SMR LKW-Elektrokabelserie mit PUR (TPU)-Mantel unterteilt sich in zwei Hauptgruppen: 12V und 24V. 12V- und 24V-Elektrokabel werden gemäß ISO 1185 und ISO 3731 hergestellt. Die Stecker der LKW-Elektrokabel werden aus Metall, Kunststoff und als Spritzgussvariante gefertigt. ABS/EBS-Elektrokabel entsprechen den ADR/GGVS- und IP54-Zertifizierungen und werden als 5-poliges ABS, 7-poliges EBS, 15-poliges ABS und ABS-Adapterkabel angeboten.

Neben 12V- und 24V-Aluminium- und Kunststoffsteckern gehören auch ABS/EBS-Stecker sowie 12V- und 24V-LKW-Elektrokabelsteckdosen mit Schraub- oder Crimpanschlüssen zu unserer Fertigung.
Als SMR fertigen wir LKW-Elektrokabel neben den Standard-Arbeitslängen auch nach individuellen Kundenanforderungen. SMR LKW-Elektrokabel werden standardmäßig in speziellen, robusten Kartons geliefert.

Unsere ABS/EBS-Stecker der 7-poligen, 15-poligen und Adapter-Klasse mit ADR/GGVS- und IP54-Zertifizierung bieten weltweiten Schutz gegen alle Betriebsbedingungen.`,
    },
    image: '/products/cables/R030-190PM.jpg',
  },
  {
    id: 'cat-couplings',
    slug: 'air-couplings-valves',
    title: {
      en: 'Air Couplings & Valves',
      tr: 'Hava Kaplinleri ve Ventiller',
      ru: 'Пневмосоединения и клапаны',
      de: 'Druckluftkupplungen & Ventile',
    },
    description: {
      tr: `DIN ISO 1728 normunda üretilen SMR standart ve otomatik hava kaplinleri TUV sertifikasına sahiptir.

SMR hava kaplinlerinin standart, otomatik ve filtreli kaplin olarak yıllık 1 milyon adetlik üretim kapasitesinin büyük bir bölümü Batı Avrupa ülkelerine ihraç edilmektedir. Tamamı istisnasız olarak hava testlerinden geçirilen SMR kaplin ailesi ürünleri “sıfır sızdırmazlık” prensibiyle satışa sunulmaktadır.
SMR hava kaplinleri ürün ailesinde ayrıca ABD pazarına hitap eden “Gladhand” - hava kaplini seçenekleri de mevcuttur. SMR hava kaplinlerinin yanında plastik ve alüminyum olmak üzere iki farklı seçenekte kaplin tutamak takımı da imalatımız arasında yer almaktadır.
SMR hava grubunun ventil ailesi TIR Çabuk Tahliye Valfleri, TIR Hava filtresi, TIR Hava Musluğu, TIR Egsoz Fren Ventili, su alma tapaları ve test valflerinden oluşmaktadır. Bu aileye ek olarak kontrol / çalışma silindirleri de muhtelif ebatlarda üretimini yaptığımız ürünler arasında bulunmaktadır.

Muhtelif ebatlarda üretilen ventil ve silindir ailesi ürünlerinin tamamına yakını Avrupa ülkelerine ihraç edilmektedir.
SMR Hava hortumları, kabin hortumları ve lastik şişirme hortumları, PUR (TPU) malzeme kullanılarak üretilmektedirler. İstenilen boyda ebatlanabilen bu ürünler yüksek dayanıklılık özellikleriyle öne çıkmaktadır.`,
      en: `SMR standard and automatic air couplings, manufactured in accordance with the DIN ISO 1728 norm, are TUV certified.

The majority of SMR air couplings — with an annual production capacity of 1 million units across standard, automatic, and filter couplings — are exported to Western European countries. Without exception, all SMR coupling products are 100% air-leak tested and supplied based on the "zero leakage" principle.
The SMR air coupling product line also offers "Gladhand" air coupling options for the US market. Alongside air couplings, we also manufacture coupling grip handle sets in two options: plastic and aluminum.
The SMR pneumatic group valve family includes Truck Quick Release Valves, Air Filters, Air Taps, Exhaust Brake Valves, Drain Valves, and Test Valves. In addition to this family, control and operating cylinders in various sizes are also among the products we manufacture.

Nearly all valves and cylinders produced in various dimensions are exported to European countries.
SMR air coils, cabin blow guns, and tire inflation hoses are produced using PUR (TPU) material. Cut-to-length based on requirements, these products stand out for their high durability features.`,
      ru: `Стандартные и автоматические воздушные соединительные головки (пальцы) SMR, изготавливаемые в соответствии со стандартом DIN ISO 1728, имеют сертификат TUV.

Большая часть нашей продукции — производственная мощность которой составляет 1 миллион штук в год (включая стандартные, автоматические и фильтрующие головки) — экспортируется в страны Западной Европы. Все без исключения соединительные головки SMR проходят испытания давлением воздуха и поставляются по принципу «нулевой утечки».
В линейке соединительных головок SMR также представлены модели «Gladhand», ориентированные на рынок США. Помимо воздушных головок, наше производство включает комплекты рукояток для головок в двух исполнениях: из пластика и алюминия.
Пневматическая арматура SMR включает в себя клапаны быстрого растормаживания, воздушные фильтры, магистральные краны, клапаны моторного тормоза, спускные клапаны (тапы) и контрольные выводы. Дополнительно к этой категории мы производим управляющие и рабочие цилиндры различных размеров.

Почти вся линейка клапанов и цилиндров различных типоразмеров экспортируется в европейские страны.
Воздушные шланги SMR, шланги обдува кабины и шланги подкачки шин изготавливаются из полиуретана (PUR/TPU). Эти изделия, нарезаемые на любую требуемую длину, отличаются высокой прочностью и износостойкостью.`,
      de: `SMR Standard- und Automatische Luftkupplungen, die nach DIN ISO 1728 hergestellt werden, sind TÜV-zertifiziert.

Der Großteil der SMR-Luftkupplungen — mit einer jährlichen Produktionskapazität von 1 Million Stück im Bereich Standard-, Automatik- und Filterkupplungen — wird in westeuropäische Länder exportiert. Alle SMR-Kupplungsprodukte werden ausnahmslos auf Luftdichtheit geprüft und nach dem Prinzip der „Null-Leckage“ vertrieben.
Die Produktfamilie der SMR-Luftkupplungen bietet auch „Gladhand“-Kupplungsoptionen für den US-Markt. Neben Luftkupplungen gehört auch die Herstellung von Kupplungsgriff-Sätzen aus Kunststoff und Aluminium zu unserem Sortiment.
Die Ventilfamilie der SMR-Pneumatikgruppe besteht aus LKW-Schnellentlüftungsventilen, Luftfiltern, Lufthähnen, Motorbremsventilen, Entwässerungsventilen und Prüfventilen. Zusätzlich zu dieser Familie gehören auch Steuer- und Arbeitszylinder in verschiedenen Größen zu unseren Produkten.

Fast alle in verschiedenen Größen hergestellten Ventile und Zylinder werden in europäische Länder exportiert.
SMR-Luftschläuche, Kabinenschläuche und Reifenfüllschläuche werden aus PUR (TPU)-Material hergestellt. Diese auf Wunschlänge zuschneidbaren Produkte zeichnen sich durch hohe Beständigkeit aus.`,
    },
    image: '/products/couplings/S010-02.jpg',
  },
  {
    id: 'cat-tank-caps',
    slug: 'tank-caps-antitheft',
    title: {
      en: 'Fuel Tank Caps & Anti-Theft Systems',
      tr: 'Yakıt Depo Kapakları ve Güvenlik',
      ru: 'Крышки бака и антисливные системы',
      de: 'Tankdeckel & Diebstahlsicherungen',
    },
    description: {
      tr: `SMR markalı depo kapakları 40 mm – 60 mm – 80 mm çap olmak üzere 3 farklı evrensel depo boğazı ebatında alüminyum, paslanmaz çelik, plastik ve döküm metal çeşitlerinde üretilmektedir. Ayrıca Scania için 60 mm dişli depo kapaklarımız da mevcuttur. Yakıt sızdırmazlığı 7 dakika ile sınırlandırılan tüm mazot depo kapaklarımız, bu özellikleriyle olası bir kaza anında şoför ve yetkililere yangın söndürmek için veya güvenilir mesafeye uzaklaşmak için ekstra zaman kazandırmayı amaçlamaktadır.
AdBlue uyumlu DEF depo kapakları 40 mm ve 60 mm’lik universal ebatlarda anahtarlı ve anahtarsız olarak her markaya uygun tasarımlarda ve özelliklerde sunulmaktadır.
Depo koruma boğazları ve kapakları ürün grubumuz özellikle yakıt hırsızlıklarına karşı son derece etkili ve caydırıcı çözümlerle müşterilerimizin güvenle çalışmalarını sağlamayı amaçlamaktadır. Delikli boğazlar yakıt hırsızlıklarını tamamen ortadan kaldırırken, depo koruma kapaklarımız mazot deposunun kapağını tamamen güvence altına almaktadır.`,
      en: `SMR branded fuel tank caps are produced in 3 universal neck sizes (40 mm, 60 mm, and 80 mm) in aluminum, stainless steel, plastic, and cast metal options. Additionally, 60 mm threaded fuel caps for Scania are available. Designed to restrict fuel leakage to 7 minutes, all our diesel fuel caps aim to provide drivers and emergency personnel extra time during an accident to extinguish fires or reach a safe distance.
AdBlue-compatible DEF tank caps are offered in 40 mm and 60 mm universal sizes, with or without locks, tailored to fit all commercial vehicle makes.
Our tank anti-siphon necks and protective caps aim to ensure our customers operate safely with highly effective deterrent solutions against fuel theft. Perforated necks completely prevent fuel siphoning, while our protective caps securely shield the fuel tank cap.`,
      ru: `Крышки топливных баков марки SMR выпускаются в 3 универсальных диаметрах горловин: 40 мм, 60 мм и 80 мм — из алюминия, нержавеющей стали, пластика и литого металла. Также в ассортименте представлены крышки с резьбой 60 мм для автомобилей Scania. Все наши крышки дизельных баков обеспечивают ограничение утечки топлива при опрокидывании до 7 минут, что призвано дать водителю и спасателям дополнительное время при аварии для тушения пожара или отхода на безопасное расстояние.
Крышки DEF/AdBlue универсальных размеров 40 мм и 60 мм предлагаются с замком и без замка, с конструкцией и характеристиками, подходящими для всех марок коммерческого транспорта.
Наша группа заливочных горловин и защитных крышек предлагает эффективные решения против краж топлива. Перфорированные горловины полностью исключают слив топлива, а защитные крышки бака надежно закрывают штатную пробку.`,
      de: `Kraftstofftankdeckel der Marke SMR werden in 3 universellen Durchmessergrößen (40 mm – 60 mm – 80 mm) aus Aluminium, Edelstahl, Kunststoff und Metallguss hergestellt. Zudem sind 60-mm-Gewinde-Tankdeckel für Scania erhältlich. Alle unsere Diesel-Tankdeckel, deren Kraftstoffdichtigkeit auf 7 Minuten begrenzt ist, sollen Fahrern und Rettungskräften bei einem Unfall zusätzliche Zeit zum Löschen eines Brandes oder zum Entfernen auf eine sichere Distanz verschaffen.
AdBlue-kompatible DEF-Tankdeckel werden in den Universalgrößen 40 mm und 60 mm mit und ohne Schloss für alle Fahrzeugmarken angeboten.
Unsere Tankschutzstutzen und -abdeckungen bieten hochwirksame Lösungen gegen Kraftstoffdiebstahl. Gelochte Einfüllstutzen verhindern das Absaugen von Kraftstoff vollständig, während unsere Tankschutzabdeckungen den Tankdeckel komplett sichern.`,
    },
    image: '/products/tank-caps/S280-10.jpg',
  },
  {
    id: 'cat-hub-caps',
    slug: 'hub-caps',
    title: {
      en: 'Hub Caps',
      tr: 'Porya Kapakları',
      ru: 'Колпаки ступиц',
      de: 'Radnabenkappen',
    },
    description: {
      en: 'Hub caps for truck and trailer axle hubs, available with external or internal thread. The range covers sizes from M115 to M230 and caps for SAF, ROR, SMB, FRUEHAUF and SAE GIGANT axles.',
      tr: 'Çekici ve römork aks porya kapakları; dıştan veya içten dişli seçenekleriyle. Ürün yelpazesi M115 ile M230 arasındaki ölçüleri ve SAF, ROR, SMB, FRUEHAUF ile SAE GIGANT aksları için kapakları kapsar.',
      ru: 'Колпаки ступиц осей грузовиков и прицепов с наружной или внутренней резьбой. В ассортименте размеры от M115 до M230 и колпаки для осей SAF, ROR, SMB, FRUEHAUF и SAE GIGANT.',
      de: 'Radnabenkappen für Achsnaben von Lkw und Anhängern mit Außen- oder Innengewinde. Das Sortiment umfasst Größen von M115 bis M230 sowie Kappen für SAF-, ROR-, SMB-, FRUEHAUF- und SAE-GIGANT-Achsen.',
    },
    image: '/products/hub-caps/TMP5772.jpg',
  },
];

export const MOCK_PRODUCTS: Product[] = [
  // ───────────── Air couplings / cylinders / handle sets / valves  (cat-couplings) ─────────────
  {
    id: 'prod-s010-01',
    slug: 's010-01-standard-coupling-m16x1-5-red',
    smrCode: 'S010-01',
    categoryId: 'cat-couplings',
    subcategoryId: 'subcat-coupling',
    title: {
      en: 'Standard Air Coupling (Without Valve) M16x1.5 (Red)',
      tr: 'Standart Kaplin (Sibopsuz) M16x1.5 (Kırmızı)',
      ru: 'Стандартная пневматическая соединительная головка (без клапана) M16x1.5 (Красный)',
      de: 'Standard-Druckluftkupplung (ohne Ventil) M16x1.5 (Rot)',
    },
    description: {
      en: 'Aluminium air coupling head without valve for truck and trailer pneumatic brake lines. M16x1.5 connection, trivalent chromium (Cr3) coating against rust and corrosion, maximum air pressure 10 bar. Wabco type; model (A) is Haldex type.',
      tr: 'Çekici ve römork pnömatik fren hatları için sibopsuz alüminyum kaplin. M16x1.5 bağlantı, pas ve korozyona karşı üç değerlikli krom (Cr3) kaplama, maksimum hava basıncı 10 bar. Wabco tipi; (A) modeli Haldex tipidir.',
      ru: 'Алюминиевая пневматическая соединительная головка без клапана для тормозных магистралей грузовиков и прицепов. Резьба M16x1.5, покрытие трёхвалентным хромом (Cr3) защищает от ржавчины и коррозии, максимальное давление воздуха 10 бар. Тип Wabco; модель (A) — тип Haldex.',
      de: 'Kupplungskopf aus Aluminium ohne Ventil für Druckluftbremsleitungen an Lkw und Anhängern. Anschluss M16x1.5, Korrosionsschutz durch dreiwertige Chrombeschichtung (Cr3), max. Luftdruck 10 bar. Wabco-Typ; Ausführung (A) im Haldex-Typ.',
    },
    specs: [
      {
        label: { en: 'Type', tr: 'Tip', ru: 'Тип', de: 'Typ' },
        value: {
          en: 'Wabco',
          tr: 'Wabco',
          ru: 'Wabco',
          de: 'Wabco',
        },
      },
      {
        label: { en: 'Thread', tr: 'Diş', ru: 'Резьба', de: 'Gewinde' },
        value: {
          en: 'M16x1.5',
          tr: 'M16x1.5',
          ru: 'M16x1.5',
          de: 'M16x1.5',
        },
      },
      {
        label: {
          en: 'Material',
          tr: 'Malzeme',
          ru: 'Материал',
          de: 'Material',
        },
        value: {
          en: 'Aluminium',
          tr: 'Alüminyum',
          ru: 'Алюминий',
          de: 'Aluminium',
        },
      },
      {
        label: {
          en: 'Coating',
          tr: 'Kaplama',
          ru: 'Покрытие',
          de: 'Beschichtung',
        },
        value: {
          en: 'Trivalent chromium (Cr3) – protection against rust and corrosion',
          tr: 'Üç değerlikli krom (Cr3) – pas ve korozyon koruması',
          ru: 'Трёхвалентный хром (Cr3) — защита от ржавчины и коррозии',
          de: 'Dreiwertiges Chrom (Cr3) – Rost- und Korrosionsschutz',
        },
      },
      {
        label: {
          en: 'Max. air pressure',
          tr: 'Maksimum hava basıncı',
          ru: 'Макс. давление воздуха',
          de: 'Max. Luftdruck',
        },
        value: { en: '10 bar', tr: '10 bar', ru: '10 бар', de: '10 bar' },
      },
      {
        label: { en: 'Color', tr: 'Renk', ru: 'Цвет', de: 'Farbe' },
        value: { en: 'Red', tr: 'Kırmızı', ru: 'Красный', de: 'Rot' },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '10', tr: '10', ru: '10', de: '10' },
      },
      {
        label: {
          en: 'Customization',
          tr: 'Özelleştirme',
          ru: 'Индивидуализация',
          de: 'Individualisierung',
        },
        value: {
          en: 'Laser marking and packaging on request;\ Optional chromium-plated finish',
          tr: 'Lazer ve ambalaj talebe göre;\ Opsiyonel krom kaplama',
          ru: 'Лазерная маркировка и упаковка по запросу;\ Опционально хромированное покрытие',
          de: 'Lasergravur und Verpackung auf Anfrage;\ Optional verchromte Ausführung',
        },
      },
    ],
    images: ['/products/couplings/S010-01.jpg'],
  },
  {
    id: 'prod-s010-01a',
    slug: 's010-01a-standard-coupling-m16x1-5-red',
    smrCode: 'S010-01A',
    categoryId: 'cat-couplings',
    subcategoryId: 'subcat-coupling',
    title: {
      en: 'Standard Air Coupling (Without Valve) M16x1.5 (Red)',
      tr: 'Standart Kaplin (Sibopsuz) M16x1.5 (Kırmızı)',
      ru: 'Стандартная пневматическая соединительная головка (без клапана) M16x1.5 (Красный)',
      de: 'Standard-Druckluftkupplung (ohne Ventil) M16x1.5 (Rot)',
    },
    description: {
      en: 'Aluminium air coupling head without valve for truck and trailer pneumatic brake lines. M16x1.5 connection, trivalent chromium (Cr3) coating against rust and corrosion, maximum air pressure 10 bar. Wabco type; model (A) is Haldex type.',
      tr: 'Çekici ve römork pnömatik fren hatları için sibopsuz alüminyum kaplin. M16x1.5 bağlantı, pas ve korozyona karşı üç değerlikli krom (Cr3) kaplama, maksimum hava basıncı 10 bar. Wabco tipi; (A) modeli Haldex tipidir.',
      ru: 'Алюминиевая пневматическая соединительная головка без клапана для тормозных магистралей грузовиков и прицепов. Резьба M16x1.5, покрытие трёхвалентным хромом (Cr3) защищает от ржавчины и коррозии, максимальное давление воздуха 10 бар. Тип Wabco; модель (A) — тип Haldex.',
      de: 'Kupplungskopf aus Aluminium ohne Ventil für Druckluftbremsleitungen an Lkw und Anhängern. Anschluss M16x1.5, Korrosionsschutz durch dreiwertige Chrombeschichtung (Cr3), max. Luftdruck 10 bar. Wabco-Typ; Ausführung (A) im Haldex-Typ.',
    },
    specs: [
      {
        label: { en: 'Type', tr: 'Tip', ru: 'Тип', de: 'Typ' },
        value: {
          en: 'Haldex',
          tr: 'Haldex',
          ru: 'Haldex',
          de: 'Haldex',
        },
      },
      {
        label: { en: 'Thread', tr: 'Diş', ru: 'Резьба', de: 'Gewinde' },
        value: {
          en: 'M16x1.5',
          tr: 'M16x1.5',
          ru: 'M16x1.5',
          de: 'M16x1.5',
        },
      },
      {
        label: {
          en: 'Material',
          tr: 'Malzeme',
          ru: 'Материал',
          de: 'Material',
        },
        value: {
          en: 'Aluminium',
          tr: 'Alüminyum',
          ru: 'Алюминий',
          de: 'Aluminium',
        },
      },
      {
        label: {
          en: 'Coating',
          tr: 'Kaplama',
          ru: 'Покрытие',
          de: 'Beschichtung',
        },
        value: {
          en: 'Trivalent chromium (Cr3) – protection against rust and corrosion',
          tr: 'Üç değerlikli krom (Cr3) – pas ve korozyon koruması',
          ru: 'Трёхвалентный хром (Cr3) — защита от ржавчины и коррозии',
          de: 'Dreiwertiges Chrom (Cr3) – Rost- und Korrosionsschutz',
        },
      },
      {
        label: {
          en: 'Max. air pressure',
          tr: 'Maksimum hava basıncı',
          ru: 'Макс. давление воздуха',
          de: 'Max. Luftdruck',
        },
        value: { en: '10 bar', tr: '10 bar', ru: '10 бар', de: '10 bar' },
      },
      {
        label: { en: 'Color', tr: 'Renk', ru: 'Цвет', de: 'Farbe' },
        value: { en: 'Red', tr: 'Kırmızı', ru: 'Красный', de: 'Rot' },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '10', tr: '10', ru: '10', de: '10' },
      },
      {
        label: {
          en: 'Customization',
          tr: 'Özelleştirme',
          ru: 'Индивидуализация',
          de: 'Individualisierung',
        },
        value: {
          en: 'Laser marking and packaging on request;\ Optional chromium-plated finish',
          tr: 'Lazer ve ambalaj talebe göre;\ Opsiyonel krom kaplama',
          ru: 'Лазерная маркировка и упаковка по запросу;\ Опционально хромированное покрытие',
          de: 'Lasergravur und Verpackung auf Anfrage;\ Optional verchromte Ausführung',
        },
      },
    ],
    images: ['/products/couplings/S010-01.jpg'],
  },
  {
    id: 'prod-s010-02',
    slug: 's010-02-standard-coupling-m16x1-5-yellow',
    smrCode: 'S010-02',
    categoryId: 'cat-couplings',
    subcategoryId: 'subcat-coupling',
    title: {
      en: 'Standard Air Coupling (Without Valve) M16x1.5 (Yellow)',
      tr: 'Standart Kaplin (Sibopsuz) M16x1.5 (Sarı)',
      ru: 'Стандартная пневматическая соединительная головка (без клапана) M16x1.5 (Жёлтый)',
      de: 'Standard-Druckluftkupplung (ohne Ventil) M16x1.5 (Gelb)',
    },
    description: {
      en: 'Aluminium air coupling head without valve for truck and trailer pneumatic brake lines. M16x1.5 connection, trivalent chromium (Cr3) coating against rust and corrosion, maximum air pressure 10 bar. Wabco type; model (A) is Haldex type.',
      tr: 'Çekici ve römork pnömatik fren hatları için sibopsuz alüminyum kaplin. M16x1.5 bağlantı, pas ve korozyona karşı üç değerlikli krom (Cr3) kaplama, maksimum hava basıncı 10 bar. Wabco tipi; (A) modeli Haldex tipidir.',
      ru: 'Алюминиевая пневматическая соединительная головка без клапана для тормозных магистралей грузовиков и прицепов. Резьба M16x1.5, покрытие трёхвалентным хромом (Cr3) защищает от ржавчины и коррозии, максимальное давление воздуха 10 бар. Тип Wabco; модель (A) — тип Haldex.',
      de: 'Kupplungskopf aus Aluminium ohne Ventil für Druckluftbremsleitungen an Lkw und Anhängern. Anschluss M16x1.5, Korrosionsschutz durch dreiwertige Chrombeschichtung (Cr3), max. Luftdruck 10 bar. Wabco-Typ; Ausführung (A) im Haldex-Typ.',
    },
    specs: [
      {
        label: { en: 'Type', tr: 'Tip', ru: 'Тип', de: 'Typ' },
        value: {
          en: 'Wabco',
          tr: 'Wabco',
          ru: 'Wabco',
          de: 'Wabco',
        },
      },
      {
        label: { en: 'Thread', tr: 'Diş', ru: 'Резьба', de: 'Gewinde' },
        value: {
          en: 'M16x1.5',
          tr: 'M16x1.5',
          ru: 'M16x1.5',
          de: 'M16x1.5',
        },
      },
      {
        label: {
          en: 'Material',
          tr: 'Malzeme',
          ru: 'Материал',
          de: 'Material',
        },
        value: {
          en: 'Aluminium',
          tr: 'Alüminyum',
          ru: 'Алюминий',
          de: 'Aluminium',
        },
      },
      {
        label: {
          en: 'Coating',
          tr: 'Kaplama',
          ru: 'Покрытие',
          de: 'Beschichtung',
        },
        value: {
          en: 'Trivalent chromium (Cr3) – protection against rust and corrosion',
          tr: 'Üç değerlikli krom (Cr3) – pas ve korozyon koruması',
          ru: 'Трёхвалентный хром (Cr3) — защита от ржавчины и коррозии',
          de: 'Dreiwertiges Chrom (Cr3) – Rost- und Korrosionsschutz',
        },
      },
      {
        label: {
          en: 'Max. air pressure',
          tr: 'Maksimum hava basıncı',
          ru: 'Макс. давление воздуха',
          de: 'Max. Luftdruck',
        },
        value: { en: '10 bar', tr: '10 bar', ru: '10 бар', de: '10 bar' },
      },
      {
        label: { en: 'Color', tr: 'Renk', ru: 'Цвет', de: 'Farbe' },
        value: { en: 'Yellow', tr: 'Sarı', ru: 'Жёлтый', de: 'Gelb' },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '10', tr: '10', ru: '10', de: '10' },
      },
      {
        label: {
          en: 'Customization',
          tr: 'Özelleştirme',
          ru: 'Индивидуализация',
          de: 'Individualisierung',
        },
        value: {
          en: 'Laser marking and packaging on request; optional chromium-plated finish',
          tr: 'Lazer ve ambalaj talebe göre; opsiyonel krom kaplama',
          ru: 'Лазерная маркировка и упаковка по запросу; опционально хромированное покрытие',
          de: 'Lasergravur und Verpackung auf Anfrage; optional verchromte Ausführung',
        },
      },
    ],
    images: ['/products/couplings/S010-02.jpg'],
  },
  {
    id: 'prod-s010-02a',
    slug: 's010-02a-standard-coupling-m16x1-5-yellow',
    smrCode: 'S010-02A',
    categoryId: 'cat-couplings',
    subcategoryId: 'subcat-coupling',
    title: {
      en: 'Standard Air Coupling (Without Valve) M16x1.5 (Yellow)',
      tr: 'Standart Kaplin (Sibopsuz) M16x1.5 (Sarı)',
      ru: 'Стандартная пневматическая соединительная головка (без клапана) M16x1.5 (Жёлтый)',
      de: 'Standard-Druckluftkupplung (ohne Ventil) M16x1.5 (Gelb)',
    },
    description: {
      en: 'Aluminium air coupling head without valve for truck and trailer pneumatic brake lines. M16x1.5 connection, trivalent chromium (Cr3) coating against rust and corrosion, maximum air pressure 10 bar. Wabco type; model (A) is Haldex type.',
      tr: 'Çekici ve römork pnömatik fren hatları için sibopsuz alüminyum kaplin. M16x1.5 bağlantı, pas ve korozyona karşı üç değerlikli krom (Cr3) kaplama, maksimum hava basıncı 10 bar. Wabco tipi; (A) modeli Haldex tipidir.',
      ru: 'Алюминиевая пневматическая соединительная головка без клапана для тормозных магистралей грузовиков и прицепов. Резьба M16x1.5, покрытие трёхвалентным хромом (Cr3) защищает от ржавчины и коррозии, максимальное давление воздуха 10 бар. Тип Wabco; модель (A) — тип Haldex.',
      de: 'Kupplungskopf aus Aluminium ohne Ventil für Druckluftbremsleitungen an Lkw und Anhängern. Anschluss M16x1.5, Korrosionsschutz durch dreiwertige Chrombeschichtung (Cr3), max. Luftdruck 10 bar. Wabco-Typ; Ausführung (A) im Haldex-Typ.',
    },
    specs: [
      {
        label: { en: 'Type', tr: 'Tip', ru: 'Тип', de: 'Typ' },
        value: {
          en: 'Haldex',
          tr: 'Haldex',
          ru: 'Haldex',
          de: 'Haldex',
        },
      },
      {
        label: { en: 'Thread', tr: 'Diş', ru: 'Резьба', de: 'Gewinde' },
        value: {
          en: 'M16x1.5',
          tr: 'M16x1.5',
          ru: 'M16x1.5',
          de: 'M16x1.5',
        },
      },
      {
        label: {
          en: 'Material',
          tr: 'Malzeme',
          ru: 'Материал',
          de: 'Material',
        },
        value: {
          en: 'Aluminium',
          tr: 'Alüminyum',
          ru: 'Алюминий',
          de: 'Aluminium',
        },
      },
      {
        label: {
          en: 'Coating',
          tr: 'Kaplama',
          ru: 'Покрытие',
          de: 'Beschichtung',
        },
        value: {
          en: 'Trivalent chromium (Cr3) – protection against rust and corrosion',
          tr: 'Üç değerlikli krom (Cr3) – pas ve korozyon koruması',
          ru: 'Трёхвалентный хром (Cr3) — защита от ржавчины и коррозии',
          de: 'Dreiwertiges Chrom (Cr3) – Rost- und Korrosionsschutz',
        },
      },
      {
        label: {
          en: 'Max. air pressure',
          tr: 'Maksimum hava basıncı',
          ru: 'Макс. давление воздуха',
          de: 'Max. Luftdruck',
        },
        value: { en: '10 bar', tr: '10 bar', ru: '10 бар', de: '10 bar' },
      },
      {
        label: { en: 'Color', tr: 'Renk', ru: 'Цвет', de: 'Farbe' },
        value: { en: 'Yellow', tr: 'Sarı', ru: 'Жёлтый', de: 'Gelb' },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '10', tr: '10', ru: '10', de: '10' },
      },
      {
        label: {
          en: 'Customization',
          tr: 'Özelleştirme',
          ru: 'Индивидуализация',
          de: 'Individualisierung',
        },
        value: {
          en: 'Laser marking and packaging on request; optional chromium-plated finish',
          tr: 'Lazer ve ambalaj talebe göre; opsiyonel krom kaplama',
          ru: 'Лазерная маркировка и упаковка по запросу; опционально хромированное покрытие',
          de: 'Lasergravur und Verpackung auf Anfrage; optional verchromte Ausführung',
        },
      },
    ],
    images: ['/products/couplings/S010-02.jpg'],
  },
  {
    id: 'prod-s010-03',
    slug: 's010-03-standard-coupling-m22x1-5-red',
    smrCode: 'S010-03',
    categoryId: 'cat-couplings',
    subcategoryId: 'subcat-coupling',
    title: {
      en: 'Standard Air Coupling (Without Valve) M22x1.5 (Red)',
      tr: 'Standart Kaplin (Sibopsuz) M22x1.5 (Kırmızı)',
      ru: 'Стандартная пневматическая соединительная головка (без клапана) M22x1.5 (Красный)',
      de: 'Standard-Druckluftkupplung (ohne Ventil) M22x1.5 (Rot)',
    },
    description: {
      en: 'Aluminium air coupling head without valve for truck and trailer pneumatic brake lines. M22x1.5 connection, trivalent chromium (Cr3) coating against rust and corrosion, maximum air pressure 10 bar. Wabco type; version (A) is Haldex type.',
      tr: 'Çekici ve römork pnömatik fren hatları için sibopsuz alüminyum kaplin. M22x1.5 bağlantı, pas ve korozyona karşı üç değerlikli krom (Cr3) kaplama, maksimum hava basıncı 10 bar. Wabco tipi; (A) versiyonu Haldex tipidir.',
      ru: 'Алюминиевая пневматическая соединительная головка без клапана для тормозных магистралей грузовиков и прицепов. Резьба M22x1.5, покрытие трёхвалентным хромом (Cr3) защищает от ржавчины и коррозии, максимальное давление воздуха 10 бар. Тип Wabco; исполнение (A) — тип Haldex.',
      de: 'Kupplungskopf aus Aluminium ohne Ventil für Druckluftbremsleitungen an Lkw und Anhängern. Anschluss M22x1.5, Korrosionsschutz durch dreiwertige Chrombeschichtung (Cr3), max. Luftdruck 10 bar. Wabco-Typ; Ausführung (A) im Haldex-Typ.',
    },
    specs: [
      {
        label: { en: 'Type', tr: 'Tip', ru: 'Тип', de: 'Typ' },
        value: {
          en: 'Wabco',
          tr: 'Wabco',
          ru: 'Wabco',
          de: 'Wabco',
        },
      },
      {
        label: { en: 'Thread', tr: 'Diş', ru: 'Резьба', de: 'Gewinde' },
        value: {
          en: 'M22x1.5',
          tr: 'M22x1.5 (Maça)',
          ru: 'M22x1.5',
          de: 'M22x1.5',
        },
      },
      {
        label: {
          en: 'Material',
          tr: 'Malzeme',
          ru: 'Материал',
          de: 'Material',
        },
        value: {
          en: 'Aluminium',
          tr: 'Alüminyum',
          ru: 'Алюминий',
          de: 'Aluminium',
        },
      },
      {
        label: {
          en: 'Coating',
          tr: 'Kaplama',
          ru: 'Покрытие',
          de: 'Beschichtung',
        },
        value: {
          en: 'Trivalent chromium (Cr3) – protection against rust and corrosion',
          tr: 'Üç değerlikli krom (Cr3) – pas ve korozyon koruması',
          ru: 'Трёхвалентный хром (Cr3) — защита от ржавчины и коррозии',
          de: 'Dreiwertiges Chrom (Cr3) – Rost- und Korrosionsschutz',
        },
      },
      {
        label: {
          en: 'Max. air pressure',
          tr: 'Maksimum hava basıncı',
          ru: 'Макс. давление воздуха',
          de: 'Max. Luftdruck',
        },
        value: { en: '10 bar', tr: '10 bar', ru: '10 бар', de: '10 bar' },
      },
      {
        label: { en: 'Color', tr: 'Renk', ru: 'Цвет', de: 'Farbe' },
        value: { en: 'Red', tr: 'Kırmızı', ru: 'Красный', de: 'Rot' },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '10', tr: '10', ru: '10', de: '10' },
      },
      {
        label: {
          en: 'Customization',
          tr: 'Özelleştirme',
          ru: 'Индивидуализация',
          de: 'Individualisierung',
        },
        value: {
          en: 'Laser marking and packaging on request; optional chromium-plated finish',
          tr: 'Lazer ve ambalaj talebe göre; opsiyonel krom kaplama',
          ru: 'Лазерная маркировка и упаковка по запросу; опционально хромированное покрытие',
          de: 'Lasergravur und Verpackung auf Anfrage; optional verchromte Ausführung',
        },
      },
    ],
    images: ['/products/couplings/S010-01.jpg'],
  },
  {
    id: 'prod-s010-03a',
    slug: 's010-03a-standard-coupling-m22x1-5-red',
    smrCode: 'S010-03A',
    categoryId: 'cat-couplings',
    subcategoryId: 'subcat-coupling',
    title: {
      en: 'Standard Air Coupling (Without Valve) M22x1.5 (Red)',
      tr: 'Standart Kaplin (Sibopsuz) M22x1.5 (Kırmızı)',
      ru: 'Стандартная пневматическая соединительная головка (без клапана) M22x1.5 (Красный)',
      de: 'Standard-Druckluftkupplung (ohne Ventil) M22x1.5 (Rot)',
    },
    description: {
      en: 'Aluminium air coupling head without valve for truck and trailer pneumatic brake lines. M22x1.5 connection, trivalent chromium (Cr3) coating against rust and corrosion, maximum air pressure 10 bar. Wabco type; version (A) is Haldex type.',
      tr: 'Çekici ve römork pnömatik fren hatları için sibopsuz alüminyum kaplin. M22x1.5 bağlantı, pas ve korozyona karşı üç değerlikli krom (Cr3) kaplama, maksimum hava basıncı 10 bar. Wabco tipi; (A) versiyonu Haldex tipidir.',
      ru: 'Алюминиевая пневматическая соединительная головка без клапана для тормозных магистралей грузовиков и прицепов. Резьба M22x1.5, покрытие трёхвалентным хромом (Cr3) защищает от ржавчины и коррозии, максимальное давление воздуха 10 бар. Тип Wabco; исполнение (A) — тип Haldex.',
      de: 'Kupplungskopf aus Aluminium ohne Ventil für Druckluftbremsleitungen an Lkw und Anhängern. Anschluss M22x1.5, Korrosionsschutz durch dreiwertige Chrombeschichtung (Cr3), max. Luftdruck 10 bar. Wabco-Typ; Ausführung (A) im Haldex-Typ.',
    },
    specs: [
      {
        label: { en: 'Type', tr: 'Tip', ru: 'Тип', de: 'Typ' },
        value: {
          en: 'Haldex',
          tr: 'Haldex',
          ru: 'Haldex',
          de: 'Haldex',
        },
      },
      {
        label: { en: 'Thread', tr: 'Diş', ru: 'Резьба', de: 'Gewinde' },
        value: {
          en: 'M22x1.5',
          tr: 'M22x1.5 (Maça)',
          ru: 'M22x1.5',
          de: 'M22x1.5',
        },
      },
      {
        label: {
          en: 'Material',
          tr: 'Malzeme',
          ru: 'Материал',
          de: 'Material',
        },
        value: {
          en: 'Aluminium',
          tr: 'Alüminyum',
          ru: 'Алюминий',
          de: 'Aluminium',
        },
      },
      {
        label: {
          en: 'Coating',
          tr: 'Kaplama',
          ru: 'Покрытие',
          de: 'Beschichtung',
        },
        value: {
          en: 'Trivalent chromium (Cr3) – protection against rust and corrosion',
          tr: 'Üç değerlikli krom (Cr3) – pas ve korozyon koruması',
          ru: 'Трёхвалентный хром (Cr3) — защита от ржавчины и коррозии',
          de: 'Dreiwertiges Chrom (Cr3) – Rost- und Korrosionsschutz',
        },
      },
      {
        label: {
          en: 'Max. air pressure',
          tr: 'Maksimum hava basıncı',
          ru: 'Макс. давление воздуха',
          de: 'Max. Luftdruck',
        },
        value: { en: '10 bar', tr: '10 bar', ru: '10 бар', de: '10 bar' },
      },
      {
        label: { en: 'Color', tr: 'Renk', ru: 'Цвет', de: 'Farbe' },
        value: { en: 'Red', tr: 'Kırmızı', ru: 'Красный', de: 'Rot' },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '10', tr: '10', ru: '10', de: '10' },
      },
      {
        label: {
          en: 'Customization',
          tr: 'Özelleştirme',
          ru: 'Индивидуализация',
          de: 'Individualisierung',
        },
        value: {
          en: 'Laser marking and packaging on request; optional chromium-plated finish',
          tr: 'Lazer ve ambalaj talebe göre; opsiyonel krom kaplama',
          ru: 'Лазерная маркировка и упаковка по запросу; опционально хромированное покрытие',
          de: 'Lasergravur und Verpackung auf Anfrage; optional verchromte Ausführung',
        },
      },
    ],
    images: ['/products/couplings/S010-01.jpg'],
  },
  {
    id: 'prod-s010-04',
    slug: 's010-04-standard-coupling-m22x1-5-yellow',
    smrCode: 'S010-04',
    categoryId: 'cat-couplings',
    subcategoryId: 'subcat-coupling',
    title: {
      en: 'Standard Air Coupling (Without Valve) M22x1.5 (Yellow)',
      tr: 'Standart Kaplin (Sibopsuz) M22x1.5 (Sarı)',
      ru: 'Стандартная пневматическая соединительная головка (без клапана) M22x1.5 (Жёлтый)',
      de: 'Standard-Druckluftkupplung (ohne Ventil) M22x1.5 (Gelb)',
    },
    description: {
      en: 'Aluminium air coupling head without valve for truck and trailer pneumatic brake lines. M22x1.5 connection, trivalent chromium (Cr3) coating against rust and corrosion, maximum air pressure 10 bar. Wabco type; version (A) is Haldex type.',
      tr: 'Çekici ve römork pnömatik fren hatları için sibopsuz alüminyum kaplin. M22x1.5 bağlantı, pas ve korozyona karşı üç değerlikli krom (Cr3) kaplama, maksimum hava basıncı 10 bar. Wabco tipi; (A) versiyonu Haldex tipidir.',
      ru: 'Алюминиевая пневматическая соединительная головка без клапана для тормозных магистралей грузовиков и прицепов. Резьба M22x1.5, покрытие трёхвалентным хромом (Cr3) защищает от ржавчины и коррозии, максимальное давление воздуха 10 бар. Тип Wabco; исполнение (A) — тип Haldex.',
      de: 'Kupplungskopf aus Aluminium ohne Ventil für Druckluftbremsleitungen an Lkw und Anhängern. Anschluss M22x1.5, Korrosionsschutz durch dreiwertige Chrombeschichtung (Cr3), max. Luftdruck 10 bar. Wabco-Typ; Ausführung (A) im Haldex-Typ.',
    },
    specs: [
      {
        label: { en: 'Type', tr: 'Tip', ru: 'Тип', de: 'Typ' },
        value: {
          en: 'Wabco',
          tr: 'Wabco',
          ru: 'Wabco',
          de: 'Wabco',
        },
      },
      {
        label: { en: 'Thread', tr: 'Diş', ru: 'Резьба', de: 'Gewinde' },
        value: {
          en: 'M22x1.5',
          tr: 'M22x1.5 (Maça)',
          ru: 'M22x1.5',
          de: 'M22x1.5',
        },
      },
      {
        label: {
          en: 'Material',
          tr: 'Malzeme',
          ru: 'Материал',
          de: 'Material',
        },
        value: {
          en: 'Aluminium',
          tr: 'Alüminyum',
          ru: 'Алюминий',
          de: 'Aluminium',
        },
      },
      {
        label: {
          en: 'Coating',
          tr: 'Kaplama',
          ru: 'Покрытие',
          de: 'Beschichtung',
        },
        value: {
          en: 'Trivalent chromium (Cr3) – protection against rust and corrosion',
          tr: 'Üç değerlikli krom (Cr3) – pas ve korozyon koruması',
          ru: 'Трёхвалентный хром (Cr3) — защита от ржавчины и коррозии',
          de: 'Dreiwertiges Chrom (Cr3) – Rost- und Korrosionsschutz',
        },
      },
      {
        label: {
          en: 'Max. air pressure',
          tr: 'Maksimum hava basıncı',
          ru: 'Макс. давление воздуха',
          de: 'Max. Luftdruck',
        },
        value: { en: '10 bar', tr: '10 bar', ru: '10 бар', de: '10 bar' },
      },
      {
        label: { en: 'Color', tr: 'Renk', ru: 'Цвет', de: 'Farbe' },
        value: { en: 'Yellow', tr: 'Sarı', ru: 'Жёлтый', de: 'Gelb' },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '10', tr: '10', ru: '10', de: '10' },
      },
      {
        label: {
          en: 'Customization',
          tr: 'Özelleştirme',
          ru: 'Индивидуализация',
          de: 'Individualisierung',
        },
        value: {
          en: 'Laser marking and packaging on request; optional chromium-plated finish',
          tr: 'Lazer ve ambalaj talebe göre; opsiyonel krom kaplama',
          ru: 'Лазерная маркировка и упаковка по запросу; опционально хромированное покрытие',
          de: 'Lasergravur und Verpackung auf Anfrage; optional verchromte Ausführung',
        },
      },
    ],
    images: ['/products/couplings/S010-02.jpg'],
  },
  {
    id: 'prod-s010-04a',
    slug: 's010-04a-standard-coupling-m22x1-5-yellow',
    smrCode: 'S010-04A',
    categoryId: 'cat-couplings',
    subcategoryId: 'subcat-coupling',
    title: {
      en: 'Standard Air Coupling (Without Valve) M22x1.5 (Yellow)',
      tr: 'Standart Kaplin (Sibopsuz) M22x1.5 (Sarı)',
      ru: 'Стандартная пневматическая соединительная головка (без клапана) M22x1.5 (Жёлтый)',
      de: 'Standard-Druckluftkupplung (ohne Ventil) M22x1.5 (Gelb)',
    },
    description: {
      en: 'Aluminium air coupling head without valve for truck and trailer pneumatic brake lines. M22x1.5 connection, trivalent chromium (Cr3) coating against rust and corrosion, maximum air pressure 10 bar. Wabco type; version (A) is Haldex type.',
      tr: 'Çekici ve römork pnömatik fren hatları için sibopsuz alüminyum kaplin. M22x1.5 bağlantı, pas ve korozyona karşı üç değerlikli krom (Cr3) kaplama, maksimum hava basıncı 10 bar. Wabco tipi; (A) versiyonu Haldex tipidir.',
      ru: 'Алюминиевая пневматическая соединительная головка без клапана для тормозных магистралей грузовиков и прицепов. Резьба M22x1.5, покрытие трёхвалентным хромом (Cr3) защищает от ржавчины и коррозии, максимальное давление воздуха 10 бар. Тип Wabco; исполнение (A) — тип Haldex.',
      de: 'Kupplungskopf aus Aluminium ohne Ventil für Druckluftbremsleitungen an Lkw und Anhängern. Anschluss M22x1.5, Korrosionsschutz durch dreiwertige Chrombeschichtung (Cr3), max. Luftdruck 10 bar. Wabco-Typ; Ausführung (A) im Haldex-Typ.',
    },
    specs: [
      {
        label: { en: 'Type', tr: 'Tip', ru: 'Тип', de: 'Typ' },
        value: {
          en: 'Haldex',
          tr: 'Haldex',
          ru: 'Haldex',
          de: 'Haldex',
        },
      },
      {
        label: { en: 'Thread', tr: 'Diş', ru: 'Резьба', de: 'Gewinde' },
        value: {
          en: 'M22x1.5',
          tr: 'M22x1.5 (Maça)',
          ru: 'M22x1.5',
          de: 'M22x1.5',
        },
      },
      {
        label: {
          en: 'Material',
          tr: 'Malzeme',
          ru: 'Материал',
          de: 'Material',
        },
        value: {
          en: 'Aluminium',
          tr: 'Alüminyum',
          ru: 'Алюминий',
          de: 'Aluminium',
        },
      },
      {
        label: {
          en: 'Coating',
          tr: 'Kaplama',
          ru: 'Покрытие',
          de: 'Beschichtung',
        },
        value: {
          en: 'Trivalent chromium (Cr3) – protection against rust and corrosion',
          tr: 'Üç değerlikli krom (Cr3) – pas ve korozyon koruması',
          ru: 'Трёхвалентный хром (Cr3) — защита от ржавчины и коррозии',
          de: 'Dreiwertiges Chrom (Cr3) – Rost- und Korrosionsschutz',
        },
      },
      {
        label: {
          en: 'Max. air pressure',
          tr: 'Maksimum hava basıncı',
          ru: 'Макс. давление воздуха',
          de: 'Max. Luftdruck',
        },
        value: { en: '10 bar', tr: '10 bar', ru: '10 бар', de: '10 bar' },
      },
      {
        label: { en: 'Color', tr: 'Renk', ru: 'Цвет', de: 'Farbe' },
        value: { en: 'Yellow', tr: 'Sarı', ru: 'Жёлтый', de: 'Gelb' },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '10', tr: '10', ru: '10', de: '10' },
      },
      {
        label: {
          en: 'Customization',
          tr: 'Özelleştirme',
          ru: 'Индивидуализация',
          de: 'Individualisierung',
        },
        value: {
          en: 'Laser marking and packaging on request; optional chromium-plated finish',
          tr: 'Lazer ve ambalaj talebe göre; opsiyonel krom kaplama',
          ru: 'Лазерная маркировка и упаковка по запросу; опционально хромированное покрытие',
          de: 'Lasergravur und Verpackung auf Anfrage; optional verchromte Ausführung',
        },
      },
    ],
    images: ['/products/couplings/S010-02.jpg'],
  },
  {
    id: 'prod-s010-05',
    slug: 's010-05-filter-coupling-m16x1-5-red',
    smrCode: 'S010-05',
    categoryId: 'cat-couplings',
    subcategoryId: 'subcat-coupling',
    title: {
      en: 'Air Coupling with Filter M16x1.5, Without Nut (Red)',
      tr: 'Filtreli Kaplin M16x1.5, Düz (Kırmızı)',
      ru: 'Пневматическая соединительная головка с фильтром M16x1.5, без гайки (Красный)',
      de: 'Druckluftkupplung mit Filter M16x1.5, ohne Mutter (Rot)',
    },
    description: {
      en: 'Aluminium air coupling head with filter for truck and trailer pneumatic brake lines. M16x1.5 connection, trivalent chromium (Cr3) coating against rust and corrosion, maximum air pressure 10 bar, maximum torque 50 Nm. Plain version without nut.',
      tr: 'Çekici ve römork pnömatik fren hatları için filtreli alüminyum kaplin. M16x1.5 bağlantı, pas ve korozyona karşı üç değerlikli krom (Cr3) kaplama, maksimum hava basıncı 10 bar, maksimum tork 50 Nm. Düz (somunsuz) versiyon.',
      ru: 'Алюминиевая пневматическая соединительная головка с фильтром для тормозных магистралей грузовиков и прицепов. Резьба M16x1.5, покрытие трёхвалентным хромом (Cr3) от ржавчины и коррозии, максимальное давление воздуха 10 бар, максимальный крутящий момент 50 Нм. Исполнение без гайки (прямое).',
      de: 'Kupplungskopf aus Aluminium mit Filter für Druckluftbremsleitungen an Lkw und Anhängern. Anschluss M16x1.5, Korrosionsschutz durch dreiwertige Chrombeschichtung (Cr3), max. Luftdruck 10 bar, max. Drehmoment 50 Nm. Gerade Ausführung ohne Mutter.',
    },
    specs: [
      {
        label: { en: 'Thread', tr: 'Diş', ru: 'Резьба', de: 'Gewinde' },
        value: {
          en: 'M16x1.5',
          tr: 'M16x1.5 (Maça)',
          ru: 'M16x1.5',
          de: 'M16x1.5',
        },
      },
      {
        label: {
          en: 'Material',
          tr: 'Malzeme',
          ru: 'Материал',
          de: 'Material',
        },
        value: {
          en: 'Aluminium',
          tr: 'Alüminyum',
          ru: 'Алюминий',
          de: 'Aluminium',
        },
      },
      {
        label: {
          en: 'Coating',
          tr: 'Kaplama',
          ru: 'Покрытие',
          de: 'Beschichtung',
        },
        value: {
          en: 'Trivalent chromium (Cr3) – protection against rust and corrosion',
          tr: 'Üç değerlikli krom (Cr3) – pas ve korozyon koruması',
          ru: 'Трёхвалентный хром (Cr3) — защита от ржавчины и коррозии',
          de: 'Dreiwertiges Chrom (Cr3) – Rost- und Korrosionsschutz',
        },
      },
      {
        label: {
          en: 'Max. air pressure',
          tr: 'Maksimum hava basıncı',
          ru: 'Макс. давление воздуха',
          de: 'Max. Luftdruck',
        },
        value: { en: '10 bar', tr: '10 bar', ru: '10 бар', de: '10 bar' },
      },
      {
        label: {
          en: 'Max. torque',
          tr: 'Maksimum tork',
          ru: 'Макс. крутящий момент',
          de: 'Max. Drehmoment',
        },
        value: { en: '50 Nm', tr: '50 Nm', ru: '50 Нм', de: '50 Nm' },
      },
      {
        label: { en: 'Color', tr: 'Renk', ru: 'Цвет', de: 'Farbe' },
        value: { en: 'Red', tr: 'Kırmızı', ru: 'Красный', de: 'Rot' },
      },
      {
        label: {
          en: 'Version',
          tr: 'Versiyon',
          ru: 'Исполнение',
          de: 'Ausführung',
        },
        value: {
          en: 'Without Nut',
          tr: 'Düz',
          ru: 'без гайки',
          de: 'ohne Mutter',
        },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '10', tr: '10', ru: '10', de: '10' },
      },
      {
        label: {
          en: 'Customization',
          tr: 'Özelleştirme',
          ru: 'Индивидуализация',
          de: 'Individualisierung',
        },
        value: {
          en: 'Laser marking and packaging on request; optional chromium-plated finish',
          tr: 'Lazer ve ambalaj talebe göre; opsiyonel krom kaplama',
          ru: 'Лазерная маркировка и упаковка по запросу; опционально хромированное покрытие',
          de: 'Lasergravur und Verpackung auf Anfrage; optional verchromte Ausführung',
        },
      },
    ],
    images: ['/products/couplings/S010-06.jpg'],
  },
  {
    id: 'prod-s010-06',
    slug: 's010-06-filter-coupling-m16x1-5-red',
    smrCode: 'S010-06',
    categoryId: 'cat-couplings',
    subcategoryId: 'subcat-coupling',
    title: {
      en: 'Air Coupling with Filter M16x1.5, With Metal Nut (Red)',
      tr: 'Filtreli Kaplin M16x1.5, Metal Somunlu (Kırmızı)',
      ru: 'Пневматическая соединительная головка с фильтром M16x1.5, с металлической гайкой (Красный)',
      de: 'Druckluftkupplung mit Filter M16x1.5, mit Metallmutter (Rot)',
    },
    description: {
      en: 'Aluminium air coupling head with filter for truck and trailer pneumatic brake lines. M16x1.5 connection, trivalent chromium (Cr3) coating against rust and corrosion, maximum air pressure 10 bar, maximum torque 50 Nm. Version with metal nut.',
      tr: 'Çekici ve römork pnömatik fren hatları için filtreli alüminyum kaplin. M16x1.5 bağlantı, pas ve korozyona karşı üç değerlikli krom (Cr3) kaplama, maksimum hava basıncı 10 bar, maksimum tork 50 Nm. Metal somunlu versiyon.',
      ru: 'Алюминиевая пневматическая соединительная головка с фильтром для тормозных магистралей грузовиков и прицепов. Резьба M16x1.5, покрытие трёхвалентным хромом (Cr3) от ржавчины и коррозии, максимальное давление воздуха 10 бар, максимальный крутящий момент 50 Нм. Исполнение с металлической гайкой.',
      de: 'Kupplungskopf aus Aluminium mit Filter für Druckluftbremsleitungen an Lkw und Anhängern. Anschluss M16x1.5, Korrosionsschutz durch dreiwertige Chrombeschichtung (Cr3), max. Luftdruck 10 bar, max. Drehmoment 50 Nm. Ausführung mit Metallmutter.',
    },
    specs: [
      {
        label: { en: 'Thread', tr: 'Diş', ru: 'Резьба', de: 'Gewinde' },
        value: {
          en: 'M16x1.5',
          tr: 'M16x1.5 (Maça)',
          ru: 'M16x1.5',
          de: 'M16x1.5',
        },
      },
      {
        label: {
          en: 'Material',
          tr: 'Malzeme',
          ru: 'Материал',
          de: 'Material',
        },
        value: {
          en: 'Aluminium',
          tr: 'Alüminyum',
          ru: 'Алюминий',
          de: 'Aluminium',
        },
      },
      {
        label: {
          en: 'Coating',
          tr: 'Kaplama',
          ru: 'Покрытие',
          de: 'Beschichtung',
        },
        value: {
          en: 'Trivalent chromium (Cr3) – protection against rust and corrosion',
          tr: 'Üç değerlikli krom (Cr3) – pas ve korozyon koruması',
          ru: 'Трёхвалентный хром (Cr3) — защита от ржавчины и коррозии',
          de: 'Dreiwertiges Chrom (Cr3) – Rost- und Korrosionsschutz',
        },
      },
      {
        label: {
          en: 'Max. air pressure',
          tr: 'Maksimum hava basıncı',
          ru: 'Макс. давление воздуха',
          de: 'Max. Luftdruck',
        },
        value: { en: '10 bar', tr: '10 bar', ru: '10 бар', de: '10 bar' },
      },
      {
        label: {
          en: 'Max. torque',
          tr: 'Maksimum tork',
          ru: 'Макс. крутящий момент',
          de: 'Max. Drehmoment',
        },
        value: { en: '50 Nm', tr: '50 Nm', ru: '50 Нм', de: '50 Nm' },
      },
      {
        label: { en: 'Color', tr: 'Renk', ru: 'Цвет', de: 'Farbe' },
        value: { en: 'Red', tr: 'Kırmızı', ru: 'Красный', de: 'Rot' },
      },
      {
        label: {
          en: 'Version',
          tr: 'Versiyon',
          ru: 'Исполнение',
          de: 'Ausführung',
        },
        value: {
          en: 'With Metal Nut',
          tr: 'Metal Somunlu',
          ru: 'с металлической гайкой',
          de: 'mit Metallmutter',
        },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '10', tr: '10', ru: '10', de: '10' },
      },
      {
        label: {
          en: 'Customization',
          tr: 'Özelleştirme',
          ru: 'Индивидуализация',
          de: 'Individualisierung',
        },
        value: {
          en: 'Laser marking and packaging on request; optional chromium-plated finish',
          tr: 'Lazer ve ambalaj talebe göre; opsiyonel krom kaplama',
          ru: 'Лазерная маркировка и упаковка по запросу; опционально хромированное покрытие',
          de: 'Lasergravur und Verpackung auf Anfrage; optional verchromte Ausführung',
        },
      },
    ],
    images: ['/products/couplings/S010-06.jpg'],
  },
  {
    id: 'prod-s010-07',
    slug: 's010-07-filter-coupling-m16x1-5-yellow',
    smrCode: 'S010-07',
    categoryId: 'cat-couplings',
    subcategoryId: 'subcat-coupling',
    title: {
      en: 'Air Coupling with Filter M16x1.5, Without Nut (Yellow)',
      tr: 'Filtreli Kaplin M16x1.5, Düz (Sarı)',
      ru: 'Пневматическая соединительная головка с фильтром M16x1.5, без гайки (Жёлтый)',
      de: 'Druckluftkupplung mit Filter M16x1.5, ohne Mutter (Gelb)',
    },
    description: {
      en: 'Aluminium air coupling head with filter for truck and trailer pneumatic brake lines. M16x1.5 connection, trivalent chromium (Cr3) coating against rust and corrosion, maximum air pressure 10 bar, maximum torque 50 Nm. Plain version without nut.',
      tr: 'Çekici ve römork pnömatik fren hatları için filtreli alüminyum kaplin. M16x1.5 bağlantı, pas ve korozyona karşı üç değerlikli krom (Cr3) kaplama, maksimum hava basıncı 10 bar, maksimum tork 50 Nm. Düz (somunsuz) versiyon.',
      ru: 'Алюминиевая пневматическая соединительная головка с фильтром для тормозных магистралей грузовиков и прицепов. Резьба M16x1.5, покрытие трёхвалентным хромом (Cr3) от ржавчины и коррозии, максимальное давление воздуха 10 бар, максимальный крутящий момент 50 Нм. Исполнение без гайки (прямое).',
      de: 'Kupplungskopf aus Aluminium mit Filter für Druckluftbremsleitungen an Lkw und Anhängern. Anschluss M16x1.5, Korrosionsschutz durch dreiwertige Chrombeschichtung (Cr3), max. Luftdruck 10 bar, max. Drehmoment 50 Nm. Gerade Ausführung ohne Mutter.',
    },
    specs: [
      {
        label: { en: 'Thread', tr: 'Diş', ru: 'Резьба', de: 'Gewinde' },
        value: {
          en: 'M16x1.5',
          tr: 'M16x1.5 (Maça)',
          ru: 'M16x1.5',
          de: 'M16x1.5',
        },
      },
      {
        label: {
          en: 'Material',
          tr: 'Malzeme',
          ru: 'Материал',
          de: 'Material',
        },
        value: {
          en: 'Aluminium',
          tr: 'Alüminyum',
          ru: 'Алюминий',
          de: 'Aluminium',
        },
      },
      {
        label: {
          en: 'Coating',
          tr: 'Kaplama',
          ru: 'Покрытие',
          de: 'Beschichtung',
        },
        value: {
          en: 'Trivalent chromium (Cr3) – protection against rust and corrosion',
          tr: 'Üç değerlikli krom (Cr3) – pas ve korozyon koruması',
          ru: 'Трёхвалентный хром (Cr3) — защита от ржавчины и коррозии',
          de: 'Dreiwertiges Chrom (Cr3) – Rost- und Korrosionsschutz',
        },
      },
      {
        label: {
          en: 'Max. air pressure',
          tr: 'Maksimum hava basıncı',
          ru: 'Макс. давление воздуха',
          de: 'Max. Luftdruck',
        },
        value: { en: '10 bar', tr: '10 bar', ru: '10 бар', de: '10 bar' },
      },
      {
        label: {
          en: 'Max. torque',
          tr: 'Maksimum tork',
          ru: 'Макс. крутящий момент',
          de: 'Max. Drehmoment',
        },
        value: { en: '50 Nm', tr: '50 Nm', ru: '50 Нм', de: '50 Nm' },
      },
      {
        label: { en: 'Color', tr: 'Renk', ru: 'Цвет', de: 'Farbe' },
        value: { en: 'Yellow', tr: 'Sarı', ru: 'Жёлтый', de: 'Gelb' },
      },
      {
        label: {
          en: 'Version',
          tr: 'Versiyon',
          ru: 'Исполнение',
          de: 'Ausführung',
        },
        value: {
          en: 'Without Nut',
          tr: 'Düz',
          ru: 'без гайки',
          de: 'ohne Mutter',
        },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '10', tr: '10', ru: '10', de: '10' },
      },
      {
        label: {
          en: 'Customization',
          tr: 'Özelleştirme',
          ru: 'Индивидуализация',
          de: 'Individualisierung',
        },
        value: {
          en: 'Laser marking and packaging on request; optional chromium-plated finish',
          tr: 'Lazer ve ambalaj talebe göre; opsiyonel krom kaplama',
          ru: 'Лазерная маркировка и упаковка по запросу; опционально хромированное покрытие',
          de: 'Lasergravur und Verpackung auf Anfrage; optional verchromte Ausführung',
        },
      },
    ],
    images: ['/products/couplings/S010-06.jpg'],
  },
  {
    id: 'prod-s010-08',
    slug: 's010-08-filter-coupling-m16x1-5-yellow',
    smrCode: 'S010-08',
    categoryId: 'cat-couplings',
    subcategoryId: 'subcat-coupling',
    title: {
      en: 'Air Coupling with Filter M16x1.5, With Metal Nut (Yellow)',
      tr: 'Filtreli Kaplin M16x1.5, Metal Somunlu (Sarı)',
      ru: 'Пневматическая соединительная головка с фильтром M16x1.5, с металлической гайкой (Жёлтый)',
      de: 'Druckluftkupplung mit Filter M16x1.5, mit Metallmutter (Gelb)',
    },
    description: {
      en: 'Aluminium air coupling head with filter for truck and trailer pneumatic brake lines. M16x1.5 connection, trivalent chromium (Cr3) coating against rust and corrosion, maximum air pressure 10 bar, maximum torque 50 Nm. Version with metal nut.',
      tr: 'Çekici ve römork pnömatik fren hatları için filtreli alüminyum kaplin. M16x1.5 bağlantı, pas ve korozyona karşı üç değerlikli krom (Cr3) kaplama, maksimum hava basıncı 10 bar, maksimum tork 50 Nm. Metal somunlu versiyon.',
      ru: 'Алюминиевая пневматическая соединительная головка с фильтром для тормозных магистралей грузовиков и прицепов. Резьба M16x1.5, покрытие трёхвалентным хромом (Cr3) от ржавчины и коррозии, максимальное давление воздуха 10 бар, максимальный крутящий момент 50 Нм. Исполнение с металлической гайкой.',
      de: 'Kupplungskopf aus Aluminium mit Filter für Druckluftbremsleitungen an Lkw und Anhängern. Anschluss M16x1.5, Korrosionsschutz durch dreiwertige Chrombeschichtung (Cr3), max. Luftdruck 10 bar, max. Drehmoment 50 Nm. Ausführung mit Metallmutter.',
    },
    specs: [
      {
        label: { en: 'Thread', tr: 'Diş', ru: 'Резьба', de: 'Gewinde' },
        value: {
          en: 'M16x1.5',
          tr: 'M16x1.5 (Maça)',
          ru: 'M16x1.5',
          de: 'M16x1.5',
        },
      },
      {
        label: {
          en: 'Material',
          tr: 'Malzeme',
          ru: 'Материал',
          de: 'Material',
        },
        value: {
          en: 'Aluminium',
          tr: 'Alüminyum',
          ru: 'Алюминий',
          de: 'Aluminium',
        },
      },
      {
        label: {
          en: 'Coating',
          tr: 'Kaplama',
          ru: 'Покрытие',
          de: 'Beschichtung',
        },
        value: {
          en: 'Trivalent chromium (Cr3) – protection against rust and corrosion',
          tr: 'Üç değerlikli krom (Cr3) – pas ve korozyon koruması',
          ru: 'Трёхвалентный хром (Cr3) — защита от ржавчины и коррозии',
          de: 'Dreiwertiges Chrom (Cr3) – Rost- und Korrosionsschutz',
        },
      },
      {
        label: {
          en: 'Max. air pressure',
          tr: 'Maksimum hava basıncı',
          ru: 'Макс. давление воздуха',
          de: 'Max. Luftdruck',
        },
        value: { en: '10 bar', tr: '10 bar', ru: '10 бар', de: '10 bar' },
      },
      {
        label: {
          en: 'Max. torque',
          tr: 'Maksimum tork',
          ru: 'Макс. крутящий момент',
          de: 'Max. Drehmoment',
        },
        value: { en: '50 Nm', tr: '50 Nm', ru: '50 Нм', de: '50 Nm' },
      },
      {
        label: { en: 'Color', tr: 'Renk', ru: 'Цвет', de: 'Farbe' },
        value: { en: 'Yellow', tr: 'Sarı', ru: 'Жёлтый', de: 'Gelb' },
      },
      {
        label: {
          en: 'Version',
          tr: 'Versiyon',
          ru: 'Исполнение',
          de: 'Ausführung',
        },
        value: {
          en: 'With Metal Nut',
          tr: 'Metal Somunlu',
          ru: 'с металлической гайкой',
          de: 'mit Metallmutter',
        },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '10', tr: '10', ru: '10', de: '10' },
      },
      {
        label: {
          en: 'Customization',
          tr: 'Özelleştirme',
          ru: 'Индивидуализация',
          de: 'Individualisierung',
        },
        value: {
          en: 'Laser marking and packaging on request; optional chromium-plated finish',
          tr: 'Lazer ve ambalaj talebe göre; opsiyonel krom kaplama',
          ru: 'Лазерная маркировка и упаковка по запросу; опционально хромированное покрытие',
          de: 'Lasergravur und Verpackung auf Anfrage; optional verchromte Ausführung',
        },
      },
    ],
    images: ['/products/couplings/S010-06.jpg'],
  },
  {
    id: 'prod-s010-09',
    slug: 's010-09-filter-coupling-m16x1-5-yellow',
    smrCode: 'S010-09',
    categoryId: 'cat-couplings',
    subcategoryId: 'subcat-coupling',
    title: {
      en: 'Air Coupling with Filter M16x1.5, Without Nut, With Connector (Yellow)',
      tr: 'Filtreli Kaplin M16x1.5, Düz, Konektörlü (Sarı)',
      ru: 'Пневматическая соединительная головка с фильтром M16x1.5, без гайки, с коннектором (Жёлтый)',
      de: 'Druckluftkupplung mit Filter M16x1.5, ohne Mutter, mit Konnektor (Gelb)',
    },
    description: {
      en: 'Aluminium air coupling head with filter for truck and trailer pneumatic brake lines. M16x1.5 connection, trivalent chromium (Cr3) coating against rust and corrosion, maximum air pressure 10 bar, maximum torque 50 Nm. Plain version without nut, with connector.',
      tr: 'Çekici ve römork pnömatik fren hatları için filtreli alüminyum kaplin. M16x1.5 bağlantı, pas ve korozyona karşı üç değerlikli krom (Cr3) kaplama, maksimum hava basıncı 10 bar, maksimum tork 50 Nm. Düz (somunsuz), konektörlü versiyon.',
      ru: 'Алюминиевая пневматическая соединительная головка с фильтром для тормозных магистралей грузовиков и прицепов. Резьба M16x1.5, покрытие трёхвалентным хромом (Cr3) от ржавчины и коррозии, максимальное давление воздуха 10 бар, максимальный крутящий момент 50 Нм. Исполнение без гайки, с коннектором.',
      de: 'Kupplungskopf aus Aluminium mit Filter für Druckluftbremsleitungen an Lkw und Anhängern. Anschluss M16x1.5, Korrosionsschutz durch dreiwertige Chrombeschichtung (Cr3), max. Luftdruck 10 bar, max. Drehmoment 50 Nm. Gerade Ausführung ohne Mutter, mit Konnektor.',
    },
    specs: [
      {
        label: { en: 'Thread', tr: 'Diş', ru: 'Резьба', de: 'Gewinde' },
        value: {
          en: 'M16x1.5',
          tr: 'M16x1.5 (Maça)',
          ru: 'M16x1.5',
          de: 'M16x1.5',
        },
      },
      {
        label: {
          en: 'Material',
          tr: 'Malzeme',
          ru: 'Материал',
          de: 'Material',
        },
        value: {
          en: 'Aluminium',
          tr: 'Alüminyum',
          ru: 'Алюминий',
          de: 'Aluminium',
        },
      },
      {
        label: {
          en: 'Coating',
          tr: 'Kaplama',
          ru: 'Покрытие',
          de: 'Beschichtung',
        },
        value: {
          en: 'Trivalent chromium (Cr3) – protection against rust and corrosion',
          tr: 'Üç değerlikli krom (Cr3) – pas ve korozyon koruması',
          ru: 'Трёхвалентный хром (Cr3) — защита от ржавчины и коррозии',
          de: 'Dreiwertiges Chrom (Cr3) – Rost- und Korrosionsschutz',
        },
      },
      {
        label: {
          en: 'Max. air pressure',
          tr: 'Maksimum hava basıncı',
          ru: 'Макс. давление воздуха',
          de: 'Max. Luftdruck',
        },
        value: { en: '10 bar', tr: '10 bar', ru: '10 бар', de: '10 bar' },
      },
      {
        label: {
          en: 'Max. torque',
          tr: 'Maksimum tork',
          ru: 'Макс. крутящий момент',
          de: 'Max. Drehmoment',
        },
        value: { en: '50 Nm', tr: '50 Nm', ru: '50 Нм', de: '50 Nm' },
      },
      {
        label: { en: 'Color', tr: 'Renk', ru: 'Цвет', de: 'Farbe' },
        value: { en: 'Yellow', tr: 'Sarı', ru: 'Жёлтый', de: 'Gelb' },
      },
      {
        label: {
          en: 'Version',
          tr: 'Versiyon',
          ru: 'Исполнение',
          de: 'Ausführung',
        },
        value: {
          en: 'Without Nut, With Connector',
          tr: 'Düz, Konektörlü',
          ru: 'без гайки, с коннектором',
          de: 'ohne Mutter, mit Konnektor',
        },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '10', tr: '10', ru: '10', de: '10' },
      },
      {
        label: {
          en: 'Customization',
          tr: 'Özelleştirme',
          ru: 'Индивидуализация',
          de: 'Individualisierung',
        },
        value: {
          en: 'Laser marking and packaging on request; optional chromium-plated finish',
          tr: 'Lazer ve ambalaj talebe göre; opsiyonel krom kaplama',
          ru: 'Лазерная маркировка и упаковка по запросу; опционально хромированное покрытие',
          de: 'Lasergravur und Verpackung auf Anfrage; optional verchromte Ausführung',
        },
      },
    ],
    images: ['/products/couplings/S010-06.jpg'],
  },
  {
    id: 'prod-s010-10',
    slug: 's010-10-filter-coupling-m16x1-5-yellow',
    smrCode: 'S010-10',
    categoryId: 'cat-couplings',
    subcategoryId: 'subcat-coupling',
    title: {
      en: 'Air Coupling with Filter M16x1.5, With Nut and Connector (Yellow)',
      tr: 'Filtreli Kaplin M16x1.5, Somunlu, Konektörlü (Sarı)',
      ru: 'Пневматическая соединительная головка с фильтром M16x1.5, с гайкой и коннектором (Жёлтый)',
      de: 'Druckluftkupplung mit Filter M16x1.5, mit Mutter und Konnektor (Gelb)',
    },
    description: {
      en: 'Aluminium air coupling head with filter for truck and trailer pneumatic brake lines. M16x1.5 connection, trivalent chromium (Cr3) coating against rust and corrosion, maximum air pressure 10 bar, maximum torque 50 Nm. Version with nut and connector.',
      tr: 'Çekici ve römork pnömatik fren hatları için filtreli alüminyum kaplin. M16x1.5 bağlantı, pas ve korozyona karşı üç değerlikli krom (Cr3) kaplama, maksimum hava basıncı 10 bar, maksimum tork 50 Nm. Somunlu ve konektörlü versiyon.',
      ru: 'Алюминиевая пневматическая соединительная головка с фильтром для тормозных магистралей грузовиков и прицепов. Резьба M16x1.5, покрытие трёхвалентным хромом (Cr3) от ржавчины и коррозии, максимальное давление воздуха 10 бар, максимальный крутящий момент 50 Нм. Исполнение с гайкой и коннектором.',
      de: 'Kupplungskopf aus Aluminium mit Filter für Druckluftbremsleitungen an Lkw und Anhängern. Anschluss M16x1.5, Korrosionsschutz durch dreiwertige Chrombeschichtung (Cr3), max. Luftdruck 10 bar, max. Drehmoment 50 Nm. Ausführung mit Mutter und Konnektor.',
    },
    specs: [
      {
        label: { en: 'Thread', tr: 'Diş', ru: 'Резьба', de: 'Gewinde' },
        value: {
          en: 'M16x1.5',
          tr: 'M16x1.5 (Maça)',
          ru: 'M16x1.5',
          de: 'M16x1.5',
        },
      },
      {
        label: {
          en: 'Material',
          tr: 'Malzeme',
          ru: 'Материал',
          de: 'Material',
        },
        value: {
          en: 'Aluminium',
          tr: 'Alüminyum',
          ru: 'Алюминий',
          de: 'Aluminium',
        },
      },
      {
        label: {
          en: 'Coating',
          tr: 'Kaplama',
          ru: 'Покрытие',
          de: 'Beschichtung',
        },
        value: {
          en: 'Trivalent chromium (Cr3) – protection against rust and corrosion',
          tr: 'Üç değerlikli krom (Cr3) – pas ve korozyon koruması',
          ru: 'Трёхвалентный хром (Cr3) — защита от ржавчины и коррозии',
          de: 'Dreiwertiges Chrom (Cr3) – Rost- und Korrosionsschutz',
        },
      },
      {
        label: {
          en: 'Max. air pressure',
          tr: 'Maksimum hava basıncı',
          ru: 'Макс. давление воздуха',
          de: 'Max. Luftdruck',
        },
        value: { en: '10 bar', tr: '10 bar', ru: '10 бар', de: '10 bar' },
      },
      {
        label: {
          en: 'Max. torque',
          tr: 'Maksimum tork',
          ru: 'Макс. крутящий момент',
          de: 'Max. Drehmoment',
        },
        value: { en: '50 Nm', tr: '50 Nm', ru: '50 Нм', de: '50 Nm' },
      },
      {
        label: { en: 'Color', tr: 'Renk', ru: 'Цвет', de: 'Farbe' },
        value: { en: 'Yellow', tr: 'Sarı', ru: 'Жёлтый', de: 'Gelb' },
      },
      {
        label: {
          en: 'Version',
          tr: 'Versiyon',
          ru: 'Исполнение',
          de: 'Ausführung',
        },
        value: {
          en: 'With Nut and Connector',
          tr: 'Somunlu, Konektörlü',
          ru: 'с гайкой и коннектором',
          de: 'mit Mutter und Konnektor',
        },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '10', tr: '10', ru: '10', de: '10' },
      },
      {
        label: {
          en: 'Customization',
          tr: 'Özelleştirme',
          ru: 'Индивидуализация',
          de: 'Individualisierung',
        },
        value: {
          en: 'Laser marking and packaging on request; optional chromium-plated finish',
          tr: 'Lazer ve ambalaj talebe göre; opsiyonel krom kaplama',
          ru: 'Лазерная маркировка и упаковка по запросу; опционально хромированное покрытие',
          de: 'Lasergravur und Verpackung auf Anfrage; optional verchromte Ausführung',
        },
      },
    ],
    images: ['/products/couplings/S010-06.jpg'],
  },
  {
    id: 'prod-s010-11',
    slug: 's010-11-standard-coupling-gasket',
    smrCode: 'S010-11',
    categoryId: 'cat-couplings',
    subcategoryId: 'subcat-coupling-accessories',
    title: {
      en: 'Standard Coupling Gasket',
      tr: 'Standart Kaplin Contası',
      ru: 'Уплотнение для стандартной соединительной головки',
      de: 'Dichtung für Standard-Kupplungskopf',
    },
    description: {
      en: 'Replacement sealing gasket for standard air coupling heads.',
      tr: 'Standart kaplinler için yedek conta.',
      ru: 'Запасное уплотнение для стандартных пневматических соединительных головок.',
      de: 'Ersatzdichtung für Standard-Kupplungsköpfe.',
    },
    specs: [
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '100', tr: '100', ru: '100', de: '100' },
      },
    ],
    images: ['/products/couplings/S010-01.jpg'],
  },
  {
    id: 'prod-s010-12',
    slug: 's010-12-filter-coupling-gasket',
    smrCode: 'S010-12',
    categoryId: 'cat-couplings',
    subcategoryId: 'subcat-coupling-accessories',
    title: {
      en: 'Filtered Coupling Gasket',
      tr: 'Filtreli Kaplin Contası',
      ru: 'Уплотнение для соединительной головки с фильтром',
      de: 'Dichtung für Kupplungskopf mit Filter',
    },
    description: {
      en: 'Replacement sealing gasket for air coupling heads with filter.',
      tr: 'Filtreli kaplinler için yedek conta.',
      ru: 'Запасное уплотнение для пневматических соединительных головок с фильтром.',
      de: 'Ersatzdichtung für Kupplungsköpfe mit Filter.',
    },
    specs: [
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '100', tr: '100', ru: '100', de: '100' },
      },
    ],
    images: ['/products/couplings/S010-06.jpg'],
  },
  {
    id: 'prod-s010-19',
    slug: 's010-19-handle-set-m16x1-5',
    smrCode: 'S010-19',
    categoryId: 'cat-couplings',
    subcategoryId: 'subcat-coupling-accessories',
    title: {
      en: 'Coupling Handle Set (Yellow-Red)',
      tr: 'Tutamak Takımı (Sarı-Kırmızı)',
      ru: 'Комплект рукояток (жёлто-красный)',
      de: 'Griffsatz (Gelb-Rot)',
    },
    description: {
      en: 'Plastic handle set for air coupling heads, supplied with 12 screws and 2 O-rings. Thread M16x1.5. Colour: yellow-red. Laser marking and packaging on request.',
      tr: 'Hava kaplinleri için plastik tutamak takımı; 12 vida ve 2 o-ring ile birlikte. Diş M16x1.5. Renk: sarı-kırmızı. Lazer ve ambalaj talebe göre.',
      ru: 'Пластиковый комплект рукояток для пневматических соединительных головок: 12 винтов и 2 уплотнительных кольца в комплекте. Резьба M16x1.5. Цвет: жёлто-красный. Лазерная маркировка и упаковка по запросу.',
      de: 'Kunststoff-Griffsatz für Druckluft-Kupplungsköpfe, inklusive 12 Schrauben und 2 O-Ringen. Gewinde M16x1.5. Farbe: Gelb-Rot. Lasergravur und Verpackung auf Anfrage.',
    },
    specs: [
      {
        label: { en: 'Thread', tr: 'Diş', ru: 'Резьба', de: 'Gewinde' },
        value: {
          en: 'M16x1.5',
          tr: 'M16x1.5 (Maça)',
          ru: 'M16x1.5',
          de: 'M16x1.5',
        },
      },
      {
        label: {
          en: 'Material',
          tr: 'Malzeme',
          ru: 'Материал',
          de: 'Material',
        },
        value: {
          en: 'Plastic',
          tr: 'Plastik',
          ru: 'Пластик',
          de: 'Kunststoff',
        },
      },
      {
        label: {
          en: 'Contents',
          tr: 'Set içeriği',
          ru: 'Комплектация',
          de: 'Lieferumfang',
        },
        value: {
          en: '12 screws and 2 O-rings',
          tr: '12 vida ve 2 o-ring',
          ru: '12 винтов и 2 уплотнительных кольца',
          de: '12 Schrauben und 2 O-Ringe',
        },
      },
      {
        label: { en: 'Color', tr: 'Renk', ru: 'Цвет', de: 'Farbe' },
        value: {
          en: 'Yellow-Red',
          tr: 'Sarı-Kırmızı',
          ru: 'Жёлто-красный',
          de: 'Gelb-Rot',
        },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '20', tr: '20', ru: '20', de: '20' },
      },
      {
        label: {
          en: 'Customization',
          tr: 'Özelleştirme',
          ru: 'Индивидуализация',
          de: 'Individualisierung',
        },
        value: {
          en: 'Laser marking and packaging on request',
          tr: 'Lazer ve ambalaj talebe göre',
          ru: 'Лазерная маркировка и упаковка по запросу',
          de: 'Lasergravur und Verpackung auf Anfrage',
        },
      },
    ],
    images: ['/products/couplings/S010-19.jpg'],
  },
  {
    id: 'prod-s020-01',
    slug: 's020-01-automatic-coupling-m16x1-5-red',
    smrCode: 'S020-01',
    categoryId: 'cat-couplings',
    subcategoryId: 'subcat-coupling',
    title: {
      en: 'Automatic Air Coupling (With Valve) M16x1.5 (Red)',
      tr: 'Otomatik Kaplin (Siboplu) M16x1.5 (Kırmızı)',
      ru: 'Автоматическая пневматическая соединительная головка (с клапаном) M16x1.5 (Красный)',
      de: 'Automatik-Druckluftkupplung (mit Ventil) M16x1.5 (Rot)',
    },
    description: {
      en: 'Automatic aluminium air coupling head with valve for truck and trailer pneumatic brake lines. M16x1.5 connection, trivalent chromium (Cr3) coating against rust and corrosion, maximum air pressure 10 bar.',
      tr: 'Çekici ve römork pnömatik fren hatları için siboplu otomatik alüminyum kaplin. M16x1.5 bağlantı, pas ve korozyona karşı üç değerlikli krom (Cr3) kaplama, maksimum hava basıncı 10 bar.',
      ru: 'Автоматическая алюминиевая пневматическая соединительная головка с клапаном для тормозных магистралей грузовиков и прицепов. Резьба M16x1.5, покрытие трёхвалентным хромом (Cr3) от ржавчины и коррозии, максимальное давление воздуха 10 бар.',
      de: 'Automatik-Kupplungskopf aus Aluminium mit Ventil für Druckluftbremsleitungen an Lkw und Anhängern. Anschluss M16x1.5, Korrosionsschutz durch dreiwertige Chrombeschichtung (Cr3), max. Luftdruck 10 bar.',
    },
    specs: [
      {
        label: { en: 'Thread', tr: 'Diş', ru: 'Резьба', de: 'Gewinde' },
        value: {
          en: 'M16x1.5',
          tr: 'M16x1.5 (Maça)',
          ru: 'M16x1.5',
          de: 'M16x1.5',
        },
      },
      {
        label: {
          en: 'Material',
          tr: 'Malzeme',
          ru: 'Материал',
          de: 'Material',
        },
        value: {
          en: 'Aluminium',
          tr: 'Alüminyum',
          ru: 'Алюминий',
          de: 'Aluminium',
        },
      },
      {
        label: {
          en: 'Coating',
          tr: 'Kaplama',
          ru: 'Покрытие',
          de: 'Beschichtung',
        },
        value: {
          en: 'Trivalent chromium (Cr3) – protection against rust and corrosion',
          tr: 'Üç değerlikli krom (Cr3) – pas ve korozyon koruması',
          ru: 'Трёхвалентный хром (Cr3) — защита от ржавчины и коррозии',
          de: 'Dreiwertiges Chrom (Cr3) – Rost- und Korrosionsschutz',
        },
      },
      {
        label: {
          en: 'Max. air pressure',
          tr: 'Maksimum hava basıncı',
          ru: 'Макс. давление воздуха',
          de: 'Max. Luftdruck',
        },
        value: { en: '10 bar', tr: '10 bar', ru: '10 бар', de: '10 bar' },
      },
      {
        label: { en: 'Color', tr: 'Renk', ru: 'Цвет', de: 'Farbe' },
        value: { en: 'Red', tr: 'Kırmızı', ru: 'Красный', de: 'Rot' },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
      {
        label: {
          en: 'Customization',
          tr: 'Özelleştirme',
          ru: 'Индивидуализация',
          de: 'Individualisierung',
        },
        value: {
          en: 'Laser marking and packaging on request',
          tr: 'Lazer ve ambalaj talebe göre',
          ru: 'Лазерная маркировка и упаковка по запросу',
          de: 'Lasergravur und Verpackung auf Anfrage',
        },
      },
    ],
    images: ['/products/couplings/S020-01.jpg'],
  },
  {
    id: 'prod-s020-02',
    slug: 's020-02-automatic-coupling-m16x1-5-yellow',
    smrCode: 'S020-02',
    categoryId: 'cat-couplings',
    subcategoryId: 'subcat-coupling',
    title: {
      en: 'Automatic Air Coupling (With Valve) M16x1.5 (Yellow)',
      tr: 'Otomatik Kaplin (Siboplu) M16x1.5 (Sarı)',
      ru: 'Автоматическая пневматическая соединительная головка (с клапаном) M16x1.5 (Жёлтый)',
      de: 'Automatik-Druckluftkupplung (mit Ventil) M16x1.5 (Gelb)',
    },
    description: {
      en: 'Automatic aluminium air coupling head with valve for truck and trailer pneumatic brake lines. M16x1.5 connection, trivalent chromium (Cr3) coating against rust and corrosion, maximum air pressure 10 bar.',
      tr: 'Çekici ve römork pnömatik fren hatları için siboplu otomatik alüminyum kaplin. M16x1.5 bağlantı, pas ve korozyona karşı üç değerlikli krom (Cr3) kaplama, maksimum hava basıncı 10 bar.',
      ru: 'Автоматическая алюминиевая пневматическая соединительная головка с клапаном для тормозных магистралей грузовиков и прицепов. Резьба M16x1.5, покрытие трёхвалентным хромом (Cr3) от ржавчины и коррозии, максимальное давление воздуха 10 бар.',
      de: 'Automatik-Kupplungskopf aus Aluminium mit Ventil für Druckluftbremsleitungen an Lkw und Anhängern. Anschluss M16x1.5, Korrosionsschutz durch dreiwertige Chrombeschichtung (Cr3), max. Luftdruck 10 bar.',
    },
    specs: [
      {
        label: { en: 'Thread', tr: 'Diş', ru: 'Резьба', de: 'Gewinde' },
        value: {
          en: 'M16x1.5',
          tr: 'M16x1.5 (Maça)',
          ru: 'M16x1.5',
          de: 'M16x1.5',
        },
      },
      {
        label: {
          en: 'Material',
          tr: 'Malzeme',
          ru: 'Материал',
          de: 'Material',
        },
        value: {
          en: 'Aluminium',
          tr: 'Alüminyum',
          ru: 'Алюминий',
          de: 'Aluminium',
        },
      },
      {
        label: {
          en: 'Coating',
          tr: 'Kaplama',
          ru: 'Покрытие',
          de: 'Beschichtung',
        },
        value: {
          en: 'Trivalent chromium (Cr3) – protection against rust and corrosion',
          tr: 'Üç değerlikli krom (Cr3) – pas ve korozyon koruması',
          ru: 'Трёхвалентный хром (Cr3) — защита от ржавчины и коррозии',
          de: 'Dreiwertiges Chrom (Cr3) – Rost- und Korrosionsschutz',
        },
      },
      {
        label: {
          en: 'Max. air pressure',
          tr: 'Maksimum hava basıncı',
          ru: 'Макс. давление воздуха',
          de: 'Max. Luftdruck',
        },
        value: { en: '10 bar', tr: '10 bar', ru: '10 бар', de: '10 bar' },
      },
      {
        label: { en: 'Color', tr: 'Renk', ru: 'Цвет', de: 'Farbe' },
        value: { en: 'Yellow', tr: 'Sarı', ru: 'Жёлтый', de: 'Gelb' },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
      {
        label: {
          en: 'Customization',
          tr: 'Özelleştirme',
          ru: 'Индивидуализация',
          de: 'Individualisierung',
        },
        value: {
          en: 'Laser marking and packaging on request',
          tr: 'Lazer ve ambalaj talebe göre',
          ru: 'Лазерная маркировка и упаковка по запросу',
          de: 'Lasergravur und Verpackung auf Anfrage',
        },
      },
    ],
    images: ['/products/couplings/S020-02.jpg'],
  },
  {
    id: 'prod-s020-03',
    slug: 's020-03-automatic-coupling-m22x1-5-red',
    smrCode: 'S020-03',
    categoryId: 'cat-couplings',
    subcategoryId: 'subcat-coupling',
    title: {
      en: 'Automatic Air Coupling (With Valve) M22x1.5 (Red)',
      tr: 'Otomatik Kaplin (Siboplu) M22x1.5 (Kırmızı)',
      ru: 'Автоматическая пневматическая соединительная головка (с клапаном) M22x1.5 (Красный)',
      de: 'Automatik-Druckluftkupplung (mit Ventil) M22x1.5 (Rot)',
    },
    description: {
      en: 'Automatic aluminium air coupling head with valve for truck and trailer pneumatic brake lines. M22x1.5 connection, trivalent chromium (Cr3) coating against rust and corrosion, maximum air pressure 10 bar.',
      tr: 'Çekici ve römork pnömatik fren hatları için siboplu otomatik alüminyum kaplin. M22x1.5 bağlantı, pas ve korozyona karşı üç değerlikli krom (Cr3) kaplama, maksimum hava basıncı 10 bar.',
      ru: 'Автоматическая алюминиевая пневматическая соединительная головка с клапаном для тормозных магистралей грузовиков и прицепов. Резьба M22x1.5, покрытие трёхвалентным хромом (Cr3) от ржавчины и коррозии, максимальное давление воздуха 10 бар.',
      de: 'Automatik-Kupplungskopf aus Aluminium mit Ventil für Druckluftbremsleitungen an Lkw und Anhängern. Anschluss M22x1.5, Korrosionsschutz durch dreiwertige Chrombeschichtung (Cr3), max. Luftdruck 10 bar.',
    },
    specs: [
      {
        label: { en: 'Thread', tr: 'Diş', ru: 'Резьба', de: 'Gewinde' },
        value: {
          en: 'M22x1.5',
          tr: 'M22x1.5 (Maça)',
          ru: 'M22x1.5',
          de: 'M22x1.5',
        },
      },
      {
        label: {
          en: 'Material',
          tr: 'Malzeme',
          ru: 'Материал',
          de: 'Material',
        },
        value: {
          en: 'Aluminium',
          tr: 'Alüminyum',
          ru: 'Алюминий',
          de: 'Aluminium',
        },
      },
      {
        label: {
          en: 'Coating',
          tr: 'Kaplama',
          ru: 'Покрытие',
          de: 'Beschichtung',
        },
        value: {
          en: 'Trivalent chromium (Cr3) – protection against rust and corrosion',
          tr: 'Üç değerlikli krom (Cr3) – pas ve korozyon koruması',
          ru: 'Трёхвалентный хром (Cr3) — защита от ржавчины и коррозии',
          de: 'Dreiwertiges Chrom (Cr3) – Rost- und Korrosionsschutz',
        },
      },
      {
        label: {
          en: 'Max. air pressure',
          tr: 'Maksimum hava basıncı',
          ru: 'Макс. давление воздуха',
          de: 'Max. Luftdruck',
        },
        value: { en: '10 bar', tr: '10 bar', ru: '10 бар', de: '10 bar' },
      },
      {
        label: { en: 'Color', tr: 'Renk', ru: 'Цвет', de: 'Farbe' },
        value: { en: 'Red', tr: 'Kırmızı', ru: 'Красный', de: 'Rot' },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
      {
        label: {
          en: 'Customization',
          tr: 'Özelleştirme',
          ru: 'Индивидуализация',
          de: 'Individualisierung',
        },
        value: {
          en: 'Laser marking and packaging on request',
          tr: 'Lazer ve ambalaj talebe göre',
          ru: 'Лазерная маркировка и упаковка по запросу',
          de: 'Lasergravur und Verpackung auf Anfrage',
        },
      },
    ],
    images: ['/products/couplings/S020-01.jpg'],
  },
  {
    id: 'prod-s020-04',
    slug: 's020-04-automatic-coupling-m22x1-5-yellow',
    smrCode: 'S020-04',
    categoryId: 'cat-couplings',
    subcategoryId: 'subcat-coupling',
    title: {
      en: 'Automatic Air Coupling (With Valve) M22x1.5 (Yellow)',
      tr: 'Otomatik Kaplin (Siboplu) M22x1.5 (Sarı)',
      ru: 'Автоматическая пневматическая соединительная головка (с клапаном) M22x1.5 (Жёлтый)',
      de: 'Automatik-Druckluftkupplung (mit Ventil) M22x1.5 (Gelb)',
    },
    description: {
      en: 'Automatic aluminium air coupling head with valve for truck and trailer pneumatic brake lines. M22x1.5 connection, trivalent chromium (Cr3) coating against rust and corrosion, maximum air pressure 10 bar.',
      tr: 'Çekici ve römork pnömatik fren hatları için siboplu otomatik alüminyum kaplin. M22x1.5 bağlantı, pas ve korozyona karşı üç değerlikli krom (Cr3) kaplama, maksimum hava basıncı 10 bar.',
      ru: 'Автоматическая алюминиевая пневматическая соединительная головка с клапаном для тормозных магистралей грузовиков и прицепов. Резьба M22x1.5, покрытие трёхвалентным хромом (Cr3) от ржавчины и коррозии, максимальное давление воздуха 10 бар.',
      de: 'Automatik-Kupplungskopf aus Aluminium mit Ventil für Druckluftbremsleitungen an Lkw und Anhängern. Anschluss M22x1.5, Korrosionsschutz durch dreiwertige Chrombeschichtung (Cr3), max. Luftdruck 10 bar.',
    },
    specs: [
      {
        label: { en: 'Thread', tr: 'Diş', ru: 'Резьба', de: 'Gewinde' },
        value: {
          en: 'M22x1.5',
          tr: 'M22x1.5 (Maça)',
          ru: 'M22x1.5',
          de: 'M22x1.5',
        },
      },
      {
        label: {
          en: 'Material',
          tr: 'Malzeme',
          ru: 'Материал',
          de: 'Material',
        },
        value: {
          en: 'Aluminium',
          tr: 'Alüminyum',
          ru: 'Алюминий',
          de: 'Aluminium',
        },
      },
      {
        label: {
          en: 'Coating',
          tr: 'Kaplama',
          ru: 'Покрытие',
          de: 'Beschichtung',
        },
        value: {
          en: 'Trivalent chromium (Cr3) – protection against rust and corrosion',
          tr: 'Üç değerlikli krom (Cr3) – pas ve korozyon koruması',
          ru: 'Трёхвалентный хром (Cr3) — защита от ржавчины и коррозии',
          de: 'Dreiwertiges Chrom (Cr3) – Rost- und Korrosionsschutz',
        },
      },
      {
        label: {
          en: 'Max. air pressure',
          tr: 'Maksimum hava basıncı',
          ru: 'Макс. давление воздуха',
          de: 'Max. Luftdruck',
        },
        value: { en: '10 bar', tr: '10 bar', ru: '10 бар', de: '10 bar' },
      },
      {
        label: { en: 'Color', tr: 'Renk', ru: 'Цвет', de: 'Farbe' },
        value: { en: 'Yellow', tr: 'Sarı', ru: 'Жёлтый', de: 'Gelb' },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
      {
        label: {
          en: 'Customization',
          tr: 'Özelleştirme',
          ru: 'Индивидуализация',
          de: 'Individualisierung',
        },
        value: {
          en: 'Laser marking and packaging on request',
          tr: 'Lazer ve ambalaj talebe göre',
          ru: 'Лазерная маркировка и упаковка по запросу',
          de: 'Lasergravur und Verpackung auf Anfrage',
        },
      },
    ],
    images: ['/products/couplings/S020-02.jpg'],
  },
  {
    id: 'prod-s020-05',
    slug: 's020-05-double-coupling-m16x1-5-red',
    smrCode: 'S020-05',
    categoryId: 'cat-couplings',
    subcategoryId: 'subcat-coupling',
    title: {
      en: 'Automatic Double Air Coupling M16x1.5 (Red)',
      tr: 'Otomatik Çiftli Kaplin M16x1.5 (Kırmızı)',
      ru: 'Автоматическая двойная пневматическая соединительная головка M16x1.5 (Красный)',
      de: 'Automatische Doppel-Druckluftkupplung M16x1.5 (Rot)',
    },
    description: {
      en: 'Automatic double aluminium air coupling head for truck and trailer pneumatic brake lines. M16x1.5 connection, trivalent chromium (Cr3) coating against rust and corrosion, maximum air pressure 10 bar.',
      tr: 'Çekici ve römork pnömatik fren hatları için otomatik çiftli alüminyum kaplin. M16x1.5 bağlantı, pas ve korozyona karşı üç değerlikli krom (Cr3) kaplama, maksimum hava basıncı 10 bar.',
      ru: 'Автоматическая двойная алюминиевая пневматическая соединительная головка для тормозных магистралей грузовиков и прицепов. Резьба M16x1.5, покрытие трёхвалентным хромом (Cr3) от ржавчины и коррозии, максимальное давление воздуха 10 бар.',
      de: 'Automatische Doppel-Kupplung aus Aluminium für Druckluftbremsleitungen an Lkw und Anhängern. Anschluss M16x1.5, Korrosionsschutz durch dreiwertige Chrombeschichtung (Cr3), max. Luftdruck 10 bar.',
    },
    specs: [
      {
        label: { en: 'Thread', tr: 'Diş', ru: 'Резьба', de: 'Gewinde' },
        value: {
          en: 'M16x1.5',
          tr: 'M16x1.5 (Maça)',
          ru: 'M16x1.5',
          de: 'M16x1.5',
        },
      },
      {
        label: {
          en: 'Material',
          tr: 'Malzeme',
          ru: 'Материал',
          de: 'Material',
        },
        value: {
          en: 'Aluminium',
          tr: 'Alüminyum',
          ru: 'Алюминий',
          de: 'Aluminium',
        },
      },
      {
        label: {
          en: 'Coating',
          tr: 'Kaplama',
          ru: 'Покрытие',
          de: 'Beschichtung',
        },
        value: {
          en: 'Trivalent chromium (Cr3) – protection against rust and corrosion',
          tr: 'Üç değerlikli krom (Cr3) – pas ve korozyon koruması',
          ru: 'Трёхвалентный хром (Cr3) — защита от ржавчины и коррозии',
          de: 'Dreiwertiges Chrom (Cr3) – Rost- und Korrosionsschutz',
        },
      },
      {
        label: {
          en: 'Max. air pressure',
          tr: 'Maksimum hava basıncı',
          ru: 'Макс. давление воздуха',
          de: 'Max. Luftdruck',
        },
        value: { en: '10 bar', tr: '10 bar', ru: '10 бар', de: '10 bar' },
      },
      {
        label: { en: 'Color', tr: 'Renk', ru: 'Цвет', de: 'Farbe' },
        value: { en: 'Red', tr: 'Kırmızı', ru: 'Красный', de: 'Rot' },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
      {
        label: {
          en: 'Customization',
          tr: 'Özelleştirme',
          ru: 'Индивидуализация',
          de: 'Individualisierung',
        },
        value: {
          en: 'Laser marking and packaging on request',
          tr: 'Lazer ve ambalaj talebe göre',
          ru: 'Лазерная маркировка и упаковка по запросу',
          de: 'Lasergravur und Verpackung auf Anfrage',
        },
      },
    ],
    images: ['/products/couplings/S020-05.jpg'],
  },
  {
    id: 'prod-s030-10',
    slug: 's030-10-gladhand-coupling-m22x1-5-red',
    smrCode: 'S030-10',
    categoryId: 'cat-couplings',
    subcategoryId: 'subcat-coupling',
    title: {
      en: 'Angled Gladhand Coupling M22x1.5 (Red)',
      tr: 'Gladhand Köşeli Kaplin M22x1.5 (Kırmızı)',
      ru: 'Угловая соединительная головка Gladhand M22x1.5 (Красный)',
      de: 'Gladhand-Winkelkupplung M22x1.5 (Rot)',
    },
    description: {
      en: 'Angled aluminium gladhand air coupling for truck and trailer pneumatic lines. M22x1.5 connection, trivalent chromium (Cr3) coating against rust and corrosion, maximum air pressure 10 bar.',
      tr: 'Çekici ve römork pnömatik hatları için köşeli alüminyum gladhand kaplin. M22x1.5 bağlantı, pas ve korozyona karşı üç değerlikli krom (Cr3) kaplama, maksimum hava basıncı 10 bar.',
      ru: 'Угловая алюминиевая соединительная головка Gladhand для пневматических магистралей грузовиков и прицепов. Резьба M22x1.5, покрытие трёхвалентным хромом (Cr3) от ржавчины и коррозии, максимальное давление воздуха 10 бар.',
      de: 'Gladhand-Winkelkupplung aus Aluminium für Druckluftleitungen an Lkw und Anhängern. Anschluss M22x1.5, Korrosionsschutz durch dreiwertige Chrombeschichtung (Cr3), max. Luftdruck 10 bar.',
    },
    specs: [
      {
        label: { en: 'Thread', tr: 'Diş', ru: 'Резьба', de: 'Gewinde' },
        value: {
          en: 'M22x1.5',
          tr: 'M22x1.5 (Maça)',
          ru: 'M22x1.5',
          de: 'M22x1.5',
        },
      },
      {
        label: {
          en: 'Material',
          tr: 'Malzeme',
          ru: 'Материал',
          de: 'Material',
        },
        value: {
          en: 'Aluminium',
          tr: 'Alüminyum',
          ru: 'Алюминий',
          de: 'Aluminium',
        },
      },
      {
        label: {
          en: 'Coating',
          tr: 'Kaplama',
          ru: 'Покрытие',
          de: 'Beschichtung',
        },
        value: {
          en: 'Trivalent chromium (Cr3) – protection against rust and corrosion',
          tr: 'Üç değerlikli krom (Cr3) – pas ve korozyon koruması',
          ru: 'Трёхвалентный хром (Cr3) — защита от ржавчины и коррозии',
          de: 'Dreiwertiges Chrom (Cr3) – Rost- und Korrosionsschutz',
        },
      },
      {
        label: {
          en: 'Max. air pressure',
          tr: 'Maksimum hava basıncı',
          ru: 'Макс. давление воздуха',
          de: 'Max. Luftdruck',
        },
        value: { en: '10 bar', tr: '10 bar', ru: '10 бар', de: '10 bar' },
      },
      {
        label: { en: 'Color', tr: 'Renk', ru: 'Цвет', de: 'Farbe' },
        value: { en: 'Red', tr: 'Kırmızı', ru: 'Красный', de: 'Rot' },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
      {
        label: {
          en: 'Customization',
          tr: 'Özelleştirme',
          ru: 'Индивидуализация',
          de: 'Individualisierung',
        },
        value: {
          en: 'Laser marking and packaging on request',
          tr: 'Lazer ve ambalaj talebe göre',
          ru: 'Лазерная маркировка и упаковка по запросу',
          de: 'Lasergravur und Verpackung auf Anfrage',
        },
      },
    ],
    images: ['/products/couplings/S030-11.jpg'],
  },
  {
    id: 'prod-s030-11',
    slug: 's030-11-gladhand-coupling-m16x1-5-red',
    smrCode: 'S030-11',
    categoryId: 'cat-couplings',
    subcategoryId: 'subcat-coupling',
    title: {
      en: 'Angled Gladhand Coupling M16x1.5 (Red)',
      tr: 'Gladhand Köşeli Kaplin M16x1.5 (Kırmızı)',
      ru: 'Угловая соединительная головка Gladhand M16x1.5 (Красный)',
      de: 'Gladhand-Winkelkupplung M16x1.5 (Rot)',
    },
    description: {
      en: 'Angled aluminium gladhand air coupling for truck and trailer pneumatic lines. M16x1.5 connection, trivalent chromium (Cr3) coating against rust and corrosion, maximum air pressure 10 bar.',
      tr: 'Çekici ve römork pnömatik hatları için köşeli alüminyum gladhand kaplin. M16x1.5 bağlantı, pas ve korozyona karşı üç değerlikli krom (Cr3) kaplama, maksimum hava basıncı 10 bar.',
      ru: 'Угловая алюминиевая соединительная головка Gladhand для пневматических магистралей грузовиков и прицепов. Резьба M16x1.5, покрытие трёхвалентным хромом (Cr3) от ржавчины и коррозии, максимальное давление воздуха 10 бар.',
      de: 'Gladhand-Winkelkupplung aus Aluminium für Druckluftleitungen an Lkw und Anhängern. Anschluss M16x1.5, Korrosionsschutz durch dreiwertige Chrombeschichtung (Cr3), max. Luftdruck 10 bar.',
    },
    specs: [
      {
        label: { en: 'Thread', tr: 'Diş', ru: 'Резьба', de: 'Gewinde' },
        value: {
          en: 'M16x1.5',
          tr: 'M16x1.5 (Maça)',
          ru: 'M16x1.5',
          de: 'M16x1.5',
        },
      },
      {
        label: {
          en: 'Material',
          tr: 'Malzeme',
          ru: 'Материал',
          de: 'Material',
        },
        value: {
          en: 'Aluminium',
          tr: 'Alüminyum',
          ru: 'Алюминий',
          de: 'Aluminium',
        },
      },
      {
        label: {
          en: 'Coating',
          tr: 'Kaplama',
          ru: 'Покрытие',
          de: 'Beschichtung',
        },
        value: {
          en: 'Trivalent chromium (Cr3) – protection against rust and corrosion',
          tr: 'Üç değerlikli krom (Cr3) – pas ve korozyon koruması',
          ru: 'Трёхвалентный хром (Cr3) — защита от ржавчины и коррозии',
          de: 'Dreiwertiges Chrom (Cr3) – Rost- und Korrosionsschutz',
        },
      },
      {
        label: {
          en: 'Max. air pressure',
          tr: 'Maksimum hava basıncı',
          ru: 'Макс. давление воздуха',
          de: 'Max. Luftdruck',
        },
        value: { en: '10 bar', tr: '10 bar', ru: '10 бар', de: '10 bar' },
      },
      {
        label: { en: 'Color', tr: 'Renk', ru: 'Цвет', de: 'Farbe' },
        value: { en: 'Red', tr: 'Kırmızı', ru: 'Красный', de: 'Rot' },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
      {
        label: {
          en: 'Customization',
          tr: 'Özelleştirme',
          ru: 'Индивидуализация',
          de: 'Individualisierung',
        },
        value: {
          en: 'Laser marking and packaging on request',
          tr: 'Lazer ve ambalaj talebe göre',
          ru: 'Лазерная маркировка и упаковка по запросу',
          de: 'Lasergravur und Verpackung auf Anfrage',
        },
      },
    ],
    images: ['/products/couplings/S030-11.jpg'],
  },
  {
    id: 'prod-s030-12',
    slug: 's030-12-gladhand-coupling-1-2-red',
    smrCode: 'S030-12',
    categoryId: 'cat-couplings',
    subcategoryId: 'subcat-coupling',
    title: {
      en: 'Angled Gladhand Coupling 1/2" (Red)',
      tr: 'Gladhand Köşeli Kaplin 1/2" (Kırmızı)',
      ru: 'Угловая соединительная головка Gladhand 1/2" (Красный)',
      de: 'Gladhand-Winkelkupplung 1/2" (Rot)',
    },
    description: {
      en: 'Angled aluminium gladhand air coupling for truck and trailer pneumatic lines. 1/2" connection, trivalent chromium (Cr3) coating against rust and corrosion, maximum air pressure 10 bar.',
      tr: 'Çekici ve römork pnömatik hatları için köşeli alüminyum gladhand kaplin. 1/2" bağlantı, pas ve korozyona karşı üç değerlikli krom (Cr3) kaplama, maksimum hava basıncı 10 bar.',
      ru: 'Угловая алюминиевая соединительная головка Gladhand для пневматических магистралей грузовиков и прицепов. Резьба 1/2", покрытие трёхвалентным хромом (Cr3) от ржавчины и коррозии, максимальное давление воздуха 10 бар.',
      de: 'Gladhand-Winkelkupplung aus Aluminium für Druckluftleitungen an Lkw und Anhängern. Anschluss 1/2", Korrosionsschutz durch dreiwertige Chrombeschichtung (Cr3), max. Luftdruck 10 bar.',
    },
    specs: [
      {
        label: { en: 'Thread', tr: 'Diş', ru: 'Резьба', de: 'Gewinde' },
        value: { en: '1/2"', tr: '1/2"', ru: '1/2"', de: '1/2"' },
      },
      {
        label: {
          en: 'Material',
          tr: 'Malzeme',
          ru: 'Материал',
          de: 'Material',
        },
        value: {
          en: 'Aluminium',
          tr: 'Alüminyum',
          ru: 'Алюминий',
          de: 'Aluminium',
        },
      },
      {
        label: {
          en: 'Coating',
          tr: 'Kaplama',
          ru: 'Покрытие',
          de: 'Beschichtung',
        },
        value: {
          en: 'Trivalent chromium (Cr3) – protection against rust and corrosion',
          tr: 'Üç değerlikli krom (Cr3) – pas ve korozyon koruması',
          ru: 'Трёхвалентный хром (Cr3) — защита от ржавчины и коррозии',
          de: 'Dreiwertiges Chrom (Cr3) – Rost- und Korrosionsschutz',
        },
      },
      {
        label: {
          en: 'Max. air pressure',
          tr: 'Maksimum hava basıncı',
          ru: 'Макс. давление воздуха',
          de: 'Max. Luftdruck',
        },
        value: { en: '10 bar', tr: '10 bar', ru: '10 бар', de: '10 bar' },
      },
      {
        label: { en: 'Color', tr: 'Renk', ru: 'Цвет', de: 'Farbe' },
        value: { en: 'Red', tr: 'Kırmızı', ru: 'Красный', de: 'Rot' },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
      {
        label: {
          en: 'Customization',
          tr: 'Özelleştirme',
          ru: 'Индивидуализация',
          de: 'Individualisierung',
        },
        value: {
          en: 'Laser marking and packaging on request',
          tr: 'Lazer ve ambalaj talebe göre',
          ru: 'Лазерная маркировка и упаковка по запросу',
          de: 'Lasergravur und Verpackung auf Anfrage',
        },
      },
    ],
    images: ['/products/couplings/S030-11.jpg'],
  },
  {
    id: 'prod-s030-13',
    slug: 's030-13-gladhand-coupling-m22x1-5-blue',
    smrCode: 'S030-13',
    categoryId: 'cat-couplings',
    subcategoryId: 'subcat-coupling',
    title: {
      en: 'Angled Gladhand Coupling M22x1.5 (Blue)',
      tr: 'Gladhand Köşeli Kaplin M22x1.5 (Mavi)',
      ru: 'Угловая соединительная головка Gladhand M22x1.5 (Синий)',
      de: 'Gladhand-Winkelkupplung M22x1.5 (Blau)',
    },
    description: {
      en: 'Angled aluminium gladhand air coupling for truck and trailer pneumatic lines. M22x1.5 connection, trivalent chromium (Cr3) coating against rust and corrosion, maximum air pressure 10 bar.',
      tr: 'Çekici ve römork pnömatik hatları için köşeli alüminyum gladhand kaplin. M22x1.5 bağlantı, pas ve korozyona karşı üç değerlikli krom (Cr3) kaplama, maksimum hava basıncı 10 bar.',
      ru: 'Угловая алюминиевая соединительная головка Gladhand для пневматических магистралей грузовиков и прицепов. Резьба M22x1.5, покрытие трёхвалентным хромом (Cr3) от ржавчины и коррозии, максимальное давление воздуха 10 бар.',
      de: 'Gladhand-Winkelkupplung aus Aluminium für Druckluftleitungen an Lkw und Anhängern. Anschluss M22x1.5, Korrosionsschutz durch dreiwertige Chrombeschichtung (Cr3), max. Luftdruck 10 bar.',
    },
    specs: [
      {
        label: { en: 'Thread', tr: 'Diş', ru: 'Резьба', de: 'Gewinde' },
        value: {
          en: 'M22x1.5',
          tr: 'M22x1.5 (Maça)',
          ru: 'M22x1.5',
          de: 'M22x1.5',
        },
      },
      {
        label: {
          en: 'Material',
          tr: 'Malzeme',
          ru: 'Материал',
          de: 'Material',
        },
        value: {
          en: 'Aluminium',
          tr: 'Alüminyum',
          ru: 'Алюминий',
          de: 'Aluminium',
        },
      },
      {
        label: {
          en: 'Coating',
          tr: 'Kaplama',
          ru: 'Покрытие',
          de: 'Beschichtung',
        },
        value: {
          en: 'Trivalent chromium (Cr3) – protection against rust and corrosion',
          tr: 'Üç değerlikli krom (Cr3) – pas ve korozyon koruması',
          ru: 'Трёхвалентный хром (Cr3) — защита от ржавчины и коррозии',
          de: 'Dreiwertiges Chrom (Cr3) – Rost- und Korrosionsschutz',
        },
      },
      {
        label: {
          en: 'Max. air pressure',
          tr: 'Maksimum hava basıncı',
          ru: 'Макс. давление воздуха',
          de: 'Max. Luftdruck',
        },
        value: { en: '10 bar', tr: '10 bar', ru: '10 бар', de: '10 bar' },
      },
      {
        label: { en: 'Color', tr: 'Renk', ru: 'Цвет', de: 'Farbe' },
        value: { en: 'Blue', tr: 'Mavi', ru: 'Синий', de: 'Blau' },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
      {
        label: {
          en: 'Customization',
          tr: 'Özelleştirme',
          ru: 'Индивидуализация',
          de: 'Individualisierung',
        },
        value: {
          en: 'Laser marking and packaging on request',
          tr: 'Lazer ve ambalaj talebe göre',
          ru: 'Лазерная маркировка и упаковка по запросу',
          de: 'Lasergravur und Verpackung auf Anfrage',
        },
      },
    ],
    images: ['/products/couplings/S030-13.jpg'],
  },
  {
    id: 'prod-s030-14',
    slug: 's030-14-gladhand-coupling-m16x1-5-blue',
    smrCode: 'S030-14',
    categoryId: 'cat-couplings',
    subcategoryId: 'subcat-coupling',
    title: {
      en: 'Angled Gladhand Coupling M16x1.5 (Blue)',
      tr: 'Gladhand Köşeli Kaplin M16x1.5 (Mavi)',
      ru: 'Угловая соединительная головка Gladhand M16x1.5 (Синий)',
      de: 'Gladhand-Winkelkupplung M16x1.5 (Blau)',
    },
    description: {
      en: 'Angled aluminium gladhand air coupling for truck and trailer pneumatic lines. M16x1.5 connection, trivalent chromium (Cr3) coating against rust and corrosion, maximum air pressure 10 bar.',
      tr: 'Çekici ve römork pnömatik hatları için köşeli alüminyum gladhand kaplin. M16x1.5 bağlantı, pas ve korozyona karşı üç değerlikli krom (Cr3) kaplama, maksimum hava basıncı 10 bar.',
      ru: 'Угловая алюминиевая соединительная головка Gladhand для пневматических магистралей грузовиков и прицепов. Резьба M16x1.5, покрытие трёхвалентным хромом (Cr3) от ржавчины и коррозии, максимальное давление воздуха 10 бар.',
      de: 'Gladhand-Winkelkupplung aus Aluminium für Druckluftleitungen an Lkw und Anhängern. Anschluss M16x1.5, Korrosionsschutz durch dreiwertige Chrombeschichtung (Cr3), max. Luftdruck 10 bar.',
    },
    specs: [
      {
        label: { en: 'Thread', tr: 'Diş', ru: 'Резьба', de: 'Gewinde' },
        value: {
          en: 'M16x1.5',
          tr: 'M16x1.5 (Maça)',
          ru: 'M16x1.5',
          de: 'M16x1.5',
        },
      },
      {
        label: {
          en: 'Material',
          tr: 'Malzeme',
          ru: 'Материал',
          de: 'Material',
        },
        value: {
          en: 'Aluminium',
          tr: 'Alüminyum',
          ru: 'Алюминий',
          de: 'Aluminium',
        },
      },
      {
        label: {
          en: 'Coating',
          tr: 'Kaplama',
          ru: 'Покрытие',
          de: 'Beschichtung',
        },
        value: {
          en: 'Trivalent chromium (Cr3) – protection against rust and corrosion',
          tr: 'Üç değerlikli krom (Cr3) – pas ve korozyon koruması',
          ru: 'Трёхвалентный хром (Cr3) — защита от ржавчины и коррозии',
          de: 'Dreiwertiges Chrom (Cr3) – Rost- und Korrosionsschutz',
        },
      },
      {
        label: {
          en: 'Max. air pressure',
          tr: 'Maksimum hava basıncı',
          ru: 'Макс. давление воздуха',
          de: 'Max. Luftdruck',
        },
        value: { en: '10 bar', tr: '10 bar', ru: '10 бар', de: '10 bar' },
      },
      {
        label: { en: 'Color', tr: 'Renk', ru: 'Цвет', de: 'Farbe' },
        value: { en: 'Blue', tr: 'Mavi', ru: 'Синий', de: 'Blau' },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
      {
        label: {
          en: 'Customization',
          tr: 'Özelleştirme',
          ru: 'Индивидуализация',
          de: 'Individualisierung',
        },
        value: {
          en: 'Laser marking and packaging on request',
          tr: 'Lazer ve ambalaj talebe göre',
          ru: 'Лазерная маркировка и упаковка по запросу',
          de: 'Lasergravur und Verpackung auf Anfrage',
        },
      },
    ],
    images: ['/products/couplings/S030-13.jpg'],
  },
  {
    id: 'prod-s030-15',
    slug: 's030-15-gladhand-coupling-1-2-blue',
    smrCode: 'S030-15',
    categoryId: 'cat-couplings',
    subcategoryId: 'subcat-coupling',
    title: {
      en: 'Angled Gladhand Coupling 1/2" (Blue)',
      tr: 'Gladhand Köşeli Kaplin 1/2" (Mavi)',
      ru: 'Угловая соединительная головка Gladhand 1/2" (Синий)',
      de: 'Gladhand-Winkelkupplung 1/2" (Blau)',
    },
    description: {
      en: 'Angled aluminium gladhand air coupling for truck and trailer pneumatic lines. 1/2" connection, trivalent chromium (Cr3) coating against rust and corrosion, maximum air pressure 10 bar.',
      tr: 'Çekici ve römork pnömatik hatları için köşeli alüminyum gladhand kaplin. 1/2" bağlantı, pas ve korozyona karşı üç değerlikli krom (Cr3) kaplama, maksimum hava basıncı 10 bar.',
      ru: 'Угловая алюминиевая соединительная головка Gladhand для пневматических магистралей грузовиков и прицепов. Резьба 1/2", покрытие трёхвалентным хромом (Cr3) от ржавчины и коррозии, максимальное давление воздуха 10 бар.',
      de: 'Gladhand-Winkelkupplung aus Aluminium für Druckluftleitungen an Lkw und Anhängern. Anschluss 1/2", Korrosionsschutz durch dreiwertige Chrombeschichtung (Cr3), max. Luftdruck 10 bar.',
    },
    specs: [
      {
        label: { en: 'Thread', tr: 'Diş', ru: 'Резьба', de: 'Gewinde' },
        value: { en: '1/2"', tr: '1/2"', ru: '1/2"', de: '1/2"' },
      },
      {
        label: {
          en: 'Material',
          tr: 'Malzeme',
          ru: 'Материал',
          de: 'Material',
        },
        value: {
          en: 'Aluminium',
          tr: 'Alüminyum',
          ru: 'Алюминий',
          de: 'Aluminium',
        },
      },
      {
        label: {
          en: 'Coating',
          tr: 'Kaplama',
          ru: 'Покрытие',
          de: 'Beschichtung',
        },
        value: {
          en: 'Trivalent chromium (Cr3) – protection against rust and corrosion',
          tr: 'Üç değerlikli krom (Cr3) – pas ve korozyon koruması',
          ru: 'Трёхвалентный хром (Cr3) — защита от ржавчины и коррозии',
          de: 'Dreiwertiges Chrom (Cr3) – Rost- und Korrosionsschutz',
        },
      },
      {
        label: {
          en: 'Max. air pressure',
          tr: 'Maksimum hava basıncı',
          ru: 'Макс. давление воздуха',
          de: 'Max. Luftdruck',
        },
        value: { en: '10 bar', tr: '10 bar', ru: '10 бар', de: '10 bar' },
      },
      {
        label: { en: 'Color', tr: 'Renk', ru: 'Цвет', de: 'Farbe' },
        value: { en: 'Blue', tr: 'Mavi', ru: 'Синий', de: 'Blau' },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
      {
        label: {
          en: 'Customization',
          tr: 'Özelleştirme',
          ru: 'Индивидуализация',
          de: 'Individualisierung',
        },
        value: {
          en: 'Laser marking and packaging on request',
          tr: 'Lazer ve ambalaj talebe göre',
          ru: 'Лазерная маркировка и упаковка по запросу',
          de: 'Lasergravur und Verpackung auf Anfrage',
        },
      },
    ],
    images: ['/products/couplings/S030-13.jpg'],
  },
  {
    id: 'prod-s050-01',
    slug: 's050-01-quick-release-valve-22x22x22',
    smrCode: 'S050-01',
    categoryId: 'cat-couplings',
    subcategoryId: 'subcat-valve',
    title: {
      en: 'Quick Release Valve 22x22x22',
      tr: 'Çabuk Tahliye 22x22x22',
      ru: 'Клапан быстрого сброса давления 22x22x22',
      de: 'Schnellentlüftungsventil 22x22x22',
    },
    description: {
      en: 'Quick release valve for pneumatic brake systems of trucks and trailers; rapidly vents air from the brake chamber to shorten release time.',
      tr: 'Çekici ve römork pnömatik fren sistemleri için çabuk tahliye valfi; fren haznesindeki havayı hızla boşaltarak fren çözme süresini kısaltır.',
      ru: 'Клапан быстрого сброса давления для пневматических тормозных систем грузовиков и прицепов; быстро выпускает воздух из тормозной камеры и сокращает время растормаживания.',
      de: 'Schnellentlüftungsventil für Druckluftbremsanlagen an Lkw und Anhängern; entlüftet die Bremskammer rasch und verkürzt die Lösezeit.',
    },
    specs: [
      {
        label: { en: 'Size', tr: 'Ölçü', ru: 'Размер', de: 'Größe' },
        value: {
          en: '22x22x22',
          tr: '22x22x22',
          ru: '22x22x22',
          de: '22x22x22',
        },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/couplings/S050-01.jpg'],
  },
  {
    id: 'prod-s050-10',
    slug: 's050-10-quick-release-valve-16x16x16',
    smrCode: 'S050-10',
    categoryId: 'cat-couplings',
    subcategoryId: 'subcat-valve',
    title: {
      en: 'Quick Release Valve 16x16x16',
      tr: 'Çabuk Tahliye 16x16x16',
      ru: 'Клапан быстрого сброса давления 16x16x16',
      de: 'Schnellentlüftungsventil 16x16x16',
    },
    description: {
      en: 'Quick release valve for pneumatic brake systems of trucks and trailers; rapidly vents air from the brake chamber to shorten release time.',
      tr: 'Çekici ve römork pnömatik fren sistemleri için çabuk tahliye valfi; fren haznesindeki havayı hızla boşaltarak fren çözme süresini kısaltır.',
      ru: 'Клапан быстрого сброса давления для пневматических тормозных систем грузовиков и прицепов; быстро выпускает воздух из тормозной камеры и сокращает время растормаживания.',
      de: 'Schnellentlüftungsventil für Druckluftbremsanlagen an Lkw und Anhängern; entlüftet die Bremskammer rasch und verkürzt die Lösezeit.',
    },
    specs: [
      {
        label: { en: 'Size', tr: 'Ölçü', ru: 'Размер', de: 'Größe' },
        value: {
          en: '16x16x16',
          tr: '16x16x16',
          ru: '16x16x16',
          de: '16x16x16',
        },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/couplings/S050-01.jpg'],
  },
  {
    id: 'prod-s090-01',
    slug: 's090-01-air-cock-bronze-handle-m22x1-5',
    smrCode: 'S090-01',
    categoryId: 'cat-couplings',
    subcategoryId: 'subcat-valve',
    title: {
      en: 'Air Cock, Bronze Handle M22x1.5',
      tr: 'Hava Musluğu, Bronz Kollu M22x1.5',
      ru: 'Воздушный кран с бронзовой рукояткой M22x1.5',
      de: 'Druckluft-Absperrhahn mit Bronzehebel M22x1.5',
    },
    description: {
      en: 'Air shut-off cock with bronze handle for pneumatic lines of trucks and trailers. Thread M22x1.5.',
      tr: 'Çekici ve römork pnömatik hatları için bronz kollu hava musluğu. Diş M22x1.5.',
      ru: 'Воздушный запорный кран с бронзовой рукояткой для пневматических магистралей грузовиков и прицепов. Резьба M22x1.5.',
      de: 'Druckluft-Absperrhahn mit Bronzehebel für Druckluftleitungen an Lkw und Anhängern. Gewinde M22x1.5.',
    },
    specs: [
      {
        label: { en: 'Thread', tr: 'Diş', ru: 'Резьба', de: 'Gewinde' },
        value: {
          en: 'M22x1.5',
          tr: 'M22x1.5 (Maça)',
          ru: 'M22x1.5',
          de: 'M22x1.5',
        },
      },
      {
        label: { en: 'Handle', tr: 'Kol', ru: 'Рукоятка', de: 'Hebel' },
        value: { en: 'Bronze', tr: 'Bronz', ru: 'Бронза', de: 'Bronze' },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/couplings/S090-01.jpg'],
  },
  {
    id: 'prod-s090-01-a',
    slug: 's090-01-a-air-cock-plastic-handle-m22x1-5',
    smrCode: 'S090-01/A',
    categoryId: 'cat-couplings',
    subcategoryId: 'subcat-valve',
    title: {
      en: 'Air Cock, Plastic Handle M22x1.5',
      tr: 'Hava Musluğu, Plastik Kollu M22x1.5',
      ru: 'Воздушный кран с пластиковой рукояткой M22x1.5',
      de: 'Druckluft-Absperrhahn mit Kunststoffhebel M22x1.5',
    },
    description: {
      en: 'Air shut-off cock with plastic handle for pneumatic lines of trucks and trailers. Thread M22x1.5.',
      tr: 'Çekici ve römork pnömatik hatları için plastik kollu hava musluğu. Diş M22x1.5.',
      ru: 'Воздушный запорный кран с пластиковой рукояткой для пневматических магистралей грузовиков и прицепов. Резьба M22x1.5.',
      de: 'Druckluft-Absperrhahn mit Kunststoffhebel für Druckluftleitungen an Lkw und Anhängern. Gewinde M22x1.5.',
    },
    specs: [
      {
        label: { en: 'Thread', tr: 'Diş', ru: 'Резьба', de: 'Gewinde' },
        value: {
          en: 'M22x1.5',
          tr: 'M22x1.5 (Maça)',
          ru: 'M22x1.5',
          de: 'M22x1.5',
        },
      },
      {
        label: { en: 'Handle', tr: 'Kol', ru: 'Рукоятка', de: 'Hebel' },
        value: {
          en: 'Plastic',
          tr: 'Plastik',
          ru: 'Пластик',
          de: 'Kunststoff',
        },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/couplings/S090-01.jpg'],
  },
  {
    id: 'prod-s100-01',
    slug: 's100-01-line-filter-m16x1-5',
    smrCode: 'S100-01',
    categoryId: 'cat-couplings',
    subcategoryId: 'subcat-coupling-accessories',
    title: {
      en: 'Line Filter M16x1.5',
      tr: 'Boru Filtresi M16x1.5',
      ru: 'Магистральный фильтр M16x1.5',
      de: 'Leitungsfilter M16x1.5',
    },
    description: {
      en: 'Air line filter for pneumatic brake lines of trucks and trailers. Thread M16x1.5.',
      tr: 'Çekici ve römork pnömatik fren hatları için boru filtresi. Diş M16x1.5.',
      ru: 'Фильтр для воздушных магистралей пневматической тормозной системы грузовиков и прицепов. Резьба M16x1.5.',
      de: 'Leitungsfilter für Druckluftbremsleitungen an Lkw und Anhängern. Gewinde M16x1.5.',
    },
    specs: [
      {
        label: { en: 'Thread', tr: 'Diş', ru: 'Резьба', de: 'Gewinde' },
        value: {
          en: 'M16x1.5',
          tr: 'M16x1.5 (Maça)',
          ru: 'M16x1.5',
          de: 'M16x1.5',
        },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/couplings/S100-01.jpg'],
  },
  {
    id: 'prod-s100-02',
    slug: 's100-02-line-filter-m22x1-5',
    smrCode: 'S100-02',
    categoryId: 'cat-couplings',
    subcategoryId: 'subcat-coupling-accessories',
    title: {
      en: 'Line Filter M22x1.5',
      tr: 'Boru Filtresi M22x1.5',
      ru: 'Магистральный фильтр M22x1.5',
      de: 'Leitungsfilter M22x1.5',
    },
    description: {
      en: 'Air line filter for pneumatic brake lines of trucks and trailers. Thread M22x1.5.',
      tr: 'Çekici ve römork pnömatik fren hatları için boru filtresi. Diş M22x1.5.',
      ru: 'Фильтр для воздушных магистралей пневматической тормозной системы грузовиков и прицепов. Резьба M22x1.5.',
      de: 'Leitungsfilter für Druckluftbremsleitungen an Lkw und Anhängern. Gewinde M22x1.5.',
    },
    specs: [
      {
        label: { en: 'Thread', tr: 'Diş', ru: 'Резьба', de: 'Gewinde' },
        value: {
          en: 'M22x1.5',
          tr: 'M22x1.5 (Maça)',
          ru: 'M22x1.5',
          de: 'M22x1.5',
        },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/couplings/S100-01.jpg'],
  },
  {
    id: 'prod-s130-01',
    slug: 's130-01-gas-piston-24mm-m6',
    smrCode: 'S130-01',
    categoryId: 'cat-couplings',
    subcategoryId: 'subcat-cylinder',
    title: {
      en: '24 mm Gas Piston M6',
      tr: "24'lük Gaz Pistonu M6",
      ru: 'Газовый поршень 24 мм M6',
      de: 'Gaskolben 24 mm M6',
    },
    description: {
      en: '24 mm gas piston with M6 mounting thread, stroke 32/50 mm, port M12x1.5.',
      tr: "M6 bağlantı dişli 24'lük gaz pistonu, strok 32/50 mm, port M12x1.5.",
      ru: 'Газовый поршень диаметром 24 мм, присоединительная резьба M6, ход 32/50 мм, порт M12x1.5.',
      de: 'Gaskolben 24 mm mit Befestigungsgewinde M6, Hub 32/50 mm, Anschluss M12x1.5.',
    },
    specs: [
      {
        label: { en: 'Thread', tr: 'Diş', ru: 'Резьба', de: 'Gewinde' },
        value: { en: 'M6', tr: 'M6', ru: 'M6', de: 'M6' },
      },
      {
        label: { en: 'Diameter', tr: 'Çap', ru: 'Диаметр', de: 'Durchmesser' },
        value: { en: '24 mm', tr: '24 mm', ru: '24 мм', de: '24 mm' },
      },
      {
        label: { en: 'Stroke', tr: 'Strok', ru: 'Ход', de: 'Hub' },
        value: {
          en: '32/50 mm',
          tr: '32/50 mm',
          ru: '32/50 мм',
          de: '32/50 mm',
        },
      },
      {
        label: { en: 'Port', tr: 'Port', ru: 'Порт', de: 'Anschluss' },
        value: { en: 'M12x1.5', tr: 'M12x1.5', ru: 'M12x1.5', de: 'M12x1.5' },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/couplings/S130-01.jpg'],
  },
  {
    id: 'prod-s130-02',
    slug: 's130-02-gas-piston-24mm-m8',
    smrCode: 'S130-02',
    categoryId: 'cat-couplings',
    subcategoryId: 'subcat-cylinder',
    title: {
      en: '24 mm Gas Piston M8',
      tr: "24'lük Gaz Pistonu M8",
      ru: 'Газовый поршень 24 мм M8',
      de: 'Gaskolben 24 mm M8',
    },
    description: {
      en: '24 mm gas piston with M8 mounting thread, stroke 32/50 mm, port M12x1.5.',
      tr: "M8 bağlantı dişli 24'lük gaz pistonu, strok 32/50 mm, port M12x1.5.",
      ru: 'Газовый поршень диаметром 24 мм, присоединительная резьба M8, ход 32/50 мм, порт M12x1.5.',
      de: 'Gaskolben 24 mm mit Befestigungsgewinde M8, Hub 32/50 mm, Anschluss M12x1.5.',
    },
    specs: [
      {
        label: { en: 'Thread', tr: 'Diş', ru: 'Резьба', de: 'Gewinde' },
        value: { en: 'M8', tr: 'M8', ru: 'M8', de: 'M8' },
      },
      {
        label: { en: 'Diameter', tr: 'Çap', ru: 'Диаметр', de: 'Durchmesser' },
        value: { en: '24 mm', tr: '24 mm', ru: '24 мм', de: '24 mm' },
      },
      {
        label: { en: 'Stroke', tr: 'Strok', ru: 'Ход', de: 'Hub' },
        value: {
          en: '32/50 mm',
          tr: '32/50 mm',
          ru: '32/50 мм',
          de: '32/50 mm',
        },
      },
      {
        label: { en: 'Port', tr: 'Port', ru: 'Порт', de: 'Anschluss' },
        value: { en: 'M12x1.5', tr: 'M12x1.5', ru: 'M12x1.5', de: 'M12x1.5' },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/couplings/S130-02.jpg'],
  },
  {
    id: 'prod-s140',
    slug: 's140-exhaust-brake-cylinder-28mm-m8',
    smrCode: 'S140',
    categoryId: 'cat-couplings',
    subcategoryId: 'subcat-cylinder',
    title: {
      en: '28 mm Exhaust Brake Cylinder M8',
      tr: "28'lik Egzoz Fren Silindiri M8",
      ru: 'Цилиндр выпускного (моторного) тормоза 28 мм M8',
      de: 'Auspuffbremszylinder 28 mm M8',
    },
    description: {
      en: '28 mm exhaust brake cylinder with M8 mounting thread, stroke 48 mm, port M12x1.5.',
      tr: "M8 bağlantı dişli 28'lik egzoz fren silindiri, strok 48 mm, port M12x1.5.",
      ru: 'Цилиндр выпускного (моторного) тормоза диаметром 28 мм, присоединительная резьба M8, ход 48 мм, порт M12x1.5.',
      de: 'Auspuffbremszylinder 28 mm mit Befestigungsgewinde M8, Hub 48 mm, Anschluss M12x1.5.',
    },
    specs: [
      {
        label: { en: 'Thread', tr: 'Diş', ru: 'Резьба', de: 'Gewinde' },
        value: { en: 'M8', tr: 'M8', ru: 'M8', de: 'M8' },
      },
      {
        label: { en: 'Diameter', tr: 'Çap', ru: 'Диаметр', de: 'Durchmesser' },
        value: { en: '28 mm', tr: '28 mm', ru: '28 мм', de: '28 mm' },
      },
      {
        label: { en: 'Stroke', tr: 'Strok', ru: 'Ход', de: 'Hub' },
        value: { en: '48 mm', tr: '48 mm', ru: '48 мм', de: '48 mm' },
      },
      {
        label: { en: 'Port', tr: 'Port', ru: 'Порт', de: 'Anschluss' },
        value: { en: 'M12x1.5', tr: 'M12x1.5', ru: 'M12x1.5', de: 'M12x1.5' },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/couplings/S140.jpg'],
  },
  {
    id: 'prod-s160',
    slug: 's160-piston-50mm-no-fitting-m10',
    smrCode: 'S160',
    categoryId: 'cat-couplings',
    subcategoryId: 'subcat-cylinder',
    title: {
      en: '50 mm Piston Without Fitting M10',
      tr: "50'lik Piston Rekorsuz M10",
      ru: 'Поршень 50 мм без штуцера M10',
      de: 'Kolben 50 mm ohne Anschlussverschraubung M10',
    },
    description: {
      en: '50 mm class piston without fitting, M10 mounting thread, stroke 48 mm, port M12x1.5. Specified bore diameter: 48 mm.',
      tr: "M10 bağlantı dişli 50'lik rekorsuz piston, strok 48 mm, port M12x1.5. Belirtilen çap: 48 mm.",
      ru: 'Поршень класса 50 мм без штуцера, присоединительная резьба M10, ход 48 мм, порт M12x1.5. Указанный диаметр: 48 мм.',
      de: 'Kolben der 50-mm-Klasse ohne Anschlussverschraubung, Befestigungsgewinde M10, Hub 48 mm, Anschluss M12x1.5. Angegebener Durchmesser: 48 mm.',
    },
    specs: [
      {
        label: { en: 'Thread', tr: 'Diş', ru: 'Резьба', de: 'Gewinde' },
        value: { en: 'M10', tr: 'M10', ru: 'M10', de: 'M10' },
      },
      {
        label: { en: 'Diameter', tr: 'Çap', ru: 'Диаметр', de: 'Durchmesser' },
        value: { en: '48 mm', tr: '48 mm', ru: '48 мм', de: '48 mm' },
      },
      {
        label: { en: 'Stroke', tr: 'Strok', ru: 'Ход', de: 'Hub' },
        value: { en: '48 mm', tr: '48 mm', ru: '48 мм', de: '48 mm' },
      },
      {
        label: { en: 'Port', tr: 'Port', ru: 'Порт', de: 'Anschluss' },
        value: { en: 'M12x1.5', tr: 'M12x1.5', ru: 'M12x1.5', de: 'M12x1.5' },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/couplings/S140.jpg'],
  },
  {
    id: 'prod-s220-01',
    slug: 's220-01-two-way-valve-m16x1-5',
    smrCode: 'S220-01',
    categoryId: 'cat-couplings',
    subcategoryId: 'subcat-valve',
    title: {
      en: 'Two-Way Valve M16x1.5',
      tr: 'İki Yönlü Valf M16x1.5',
      ru: 'Двухходовой клапан M16x1.5',
      de: 'Zweiwegeventil M16x1.5',
    },
    description: {
      en: 'Two-way valve for pneumatic systems of trucks and trailers. Thread M16x1.5.',
      tr: 'Çekici ve römork pnömatik sistemleri için iki yönlü valf. Diş M16x1.5.',
      ru: 'Двухходовой клапан для пневматических систем грузовиков и прицепов. Резьба M16x1.5.',
      de: 'Zweiwegeventil für Druckluftsysteme an Lkw und Anhängern. Gewinde M16x1.5.',
    },
    specs: [
      {
        label: { en: 'Thread', tr: 'Diş', ru: 'Резьба', de: 'Gewinde' },
        value: {
          en: 'M16x1.5',
          tr: 'M16x1.5 (Maça)',
          ru: 'M16x1.5',
          de: 'M16x1.5',
        },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/couplings/S220-01.jpg'],
  },
  {
    id: 'prod-s220-02',
    slug: 's220-02-two-way-valve-3-8-18-nptf',
    smrCode: 'S220-02',
    categoryId: 'cat-couplings',
    subcategoryId: 'subcat-valve',
    title: {
      en: 'Two-Way Valve 3/8-18 NPTF',
      tr: 'İki Yönlü Valf 3/8-18 NPTF',
      ru: 'Двухходовой клапан 3/8-18 NPTF',
      de: 'Zweiwegeventil 3/8-18 NPTF',
    },
    description: {
      en: 'Two-way valve for pneumatic systems of trucks and trailers. Thread 3/8-18 NPTF.',
      tr: 'Çekici ve römork pnömatik sistemleri için iki yönlü valf. Diş 3/8-18 NPTF.',
      ru: 'Двухходовой клапан для пневматических систем грузовиков и прицепов. Резьба 3/8-18 NPTF.',
      de: 'Zweiwegeventil für Druckluftsysteme an Lkw und Anhängern. Gewinde 3/8-18 NPTF.',
    },
    specs: [
      {
        label: { en: 'Thread', tr: 'Diş', ru: 'Резьба', de: 'Gewinde' },
        value: {
          en: '3/8-18 NPTF',
          tr: '3/8-18 NPTF',
          ru: '3/8-18 NPTF',
          de: '3/8-18 NPTF',
        },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/couplings/S220-01.jpg'],
  },
  // ───────────── Cables / plugs & sockets  (cat-cables) ─────────────
  {
    id: 'prod-r010-01',
    slug: 'r010-01-plug-24v-7p-plastic-black-n-type',
    smrCode: 'R010-01',
    categoryId: 'cat-cables',
    subcategoryId: 'subcat-plugs-sockets',
    title: {
      en: '24V/7P Plastic Plug, Black (N-Type)',
      tr: '24V/7P Plastik Siyah Fiş (N Tipi)',
      ru: 'Вилка 24 В/7 контактов, пластиковая, чёрная (тип N)',
      de: 'Kunststoffstecker 24 V/7-polig, schwarz (N-Typ)',
    },
    description: {
      en: '24 V, 7-pin plastic plug for the electrical connection between tractor unit and trailer (N-type, screw terminals).',
      tr: 'Çekici ile römork arasındaki elektrik bağlantısı için 24 V, 7 pinli plastik fiş (N tipi, vidalı terminal).',
      ru: 'Вилка 24 В, 7 контактов, пластиковая, для электрического соединения тягача и прицепа (тип N, винтовые клеммы).',
      de: 'Kunststoffstecker 24 V, 7-polig, für die elektrische Verbindung zwischen Zugfahrzeug und Anhänger (N-Typ, Schraubklemmen).',
    },
    specs: [
      {
        label: {
          en: 'Voltage',
          tr: 'Voltaj',
          ru: 'Напряжение',
          de: 'Spannung',
        },
        value: { en: '24 V', tr: '24 V', ru: '24 В', de: '24 V' },
      },
      {
        label: {
          en: 'Number of pins',
          tr: 'Pin sayısı',
          ru: 'Количество контактов',
          de: 'Polzahl',
        },
        value: { en: '7', tr: '7', ru: '7', de: '7' },
      },
      {
        label: {
          en: 'Plug type',
          tr: 'Fiş tipi',
          ru: 'Тип вилки',
          de: 'Steckertyp',
        },
        value: { en: 'N-type', tr: 'N tipi', ru: 'Тип N', de: 'N-Typ' },
      },
      {
        label: {
          en: 'Terminals',
          tr: 'Terminal',
          ru: 'Клеммы',
          de: 'Anschlussklemmen',
        },
        value: {
          en: 'Screw terminals',
          tr: 'Vidalı terminal',
          ru: 'Винтовые клеммы',
          de: 'Schraubklemmen',
        },
      },
      {
        label: {
          en: 'Material',
          tr: 'Malzeme',
          ru: 'Материал',
          de: 'Material',
        },
        value: {
          en: 'Plastic',
          tr: 'Plastik',
          ru: 'Пластик',
          de: 'Kunststoff',
        },
      },
      {
        label: { en: 'Color', tr: 'Renk', ru: 'Цвет', de: 'Farbe' },
        value: { en: 'Black', tr: 'Siyah', ru: 'Чёрный', de: 'Schwarz' },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/cables/R010-01.jpg'],
  },
  {
    id: 'prod-r010-02',
    slug: 'r010-02-plug-24v-7p-plastic-s-type',
    smrCode: 'R010-02',
    categoryId: 'cat-cables',
    subcategoryId: 'subcat-plugs-sockets',
    title: {
      en: '24V/7P Plastic Plug (S-Type)',
      tr: '24V/7P Plastik Fiş (S Tipi)',
      ru: 'Вилка 24 В/7 контактов, пластиковая (тип S)',
      de: 'Kunststoffstecker 24 V/7-polig (S-Typ)',
    },
    description: {
      en: '24 V, 7-pin plastic plug for the electrical connection between tractor unit and trailer (S-type, screw terminals).',
      tr: 'Çekici ile römork arasındaki elektrik bağlantısı için 24 V, 7 pinli plastik fiş (S tipi, vidalı terminal).',
      ru: 'Вилка 24 В, 7 контактов, пластиковая, для электрического соединения тягача и прицепа (тип S, винтовые клеммы).',
      de: 'Kunststoffstecker 24 V, 7-polig, für die elektrische Verbindung zwischen Zugfahrzeug und Anhänger (S-Typ, Schraubklemmen).',
    },
    specs: [
      {
        label: {
          en: 'Voltage',
          tr: 'Voltaj',
          ru: 'Напряжение',
          de: 'Spannung',
        },
        value: { en: '24 V', tr: '24 V', ru: '24 В', de: '24 V' },
      },
      {
        label: {
          en: 'Number of pins',
          tr: 'Pin sayısı',
          ru: 'Количество контактов',
          de: 'Polzahl',
        },
        value: { en: '7', tr: '7', ru: '7', de: '7' },
      },
      {
        label: {
          en: 'Plug type',
          tr: 'Fiş tipi',
          ru: 'Тип вилки',
          de: 'Steckertyp',
        },
        value: { en: 'S-type', tr: 'S tipi', ru: 'Тип S', de: 'S-Typ' },
      },
      {
        label: {
          en: 'Terminals',
          tr: 'Terminal',
          ru: 'Клеммы',
          de: 'Anschlussklemmen',
        },
        value: {
          en: 'Screw terminals',
          tr: 'Vidalı terminal',
          ru: 'Винтовые клеммы',
          de: 'Schraubklemmen',
        },
      },
      {
        label: {
          en: 'Material',
          tr: 'Malzeme',
          ru: 'Материал',
          de: 'Material',
        },
        value: {
          en: 'Plastic',
          tr: 'Plastik',
          ru: 'Пластик',
          de: 'Kunststoff',
        },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/placeholder.png'],
  },
  {
    id: 'prod-r010-03',
    slug: 'r010-03-abs-plug-24v-5p',
    smrCode: 'R010-03',
    categoryId: 'cat-cables',
    subcategoryId: 'subcat-plugs-sockets',
    title: {
      en: 'ABS 24V/5P Plug',
      tr: 'ABS 24V/5P Fiş',
      ru: 'Вилка ABS 24 В/5 контактов',
      de: 'ABS-Stecker 24 V/5-polig',
    },
    description: {
      en: '24 V, 5-pin ABS plug with flat terminals for the trailer ABS connection.',
      tr: 'Römork ABS bağlantısı için yassı terminalli 24 V, 5 pinli ABS fişi.',
      ru: 'Вилка ABS 24 В, 5 контактов, с плоскими клеммами, для подключения ABS прицепа.',
      de: 'ABS-Stecker 24 V, 5-polig, mit Flachklemmen für den ABS-Anschluss am Anhänger.',
    },
    specs: [
      {
        label: {
          en: 'Voltage',
          tr: 'Voltaj',
          ru: 'Напряжение',
          de: 'Spannung',
        },
        value: { en: '24 V', tr: '24 V', ru: '24 В', de: '24 V' },
      },
      {
        label: {
          en: 'Number of pins',
          tr: 'Pin sayısı',
          ru: 'Количество контактов',
          de: 'Polzahl',
        },
        value: { en: '5', tr: '5', ru: '5', de: '5' },
      },
      {
        label: { en: 'Type', tr: 'Tip', ru: 'Тип', de: 'Typ' },
        value: { en: 'ABS', tr: 'ABS', ru: 'ABS', de: 'ABS' },
      },
      {
        label: {
          en: 'Terminals',
          tr: 'Terminal',
          ru: 'Клеммы',
          de: 'Anschlussklemmen',
        },
        value: {
          en: 'Flat terminals',
          tr: 'Yassı terminal',
          ru: 'Плоские клеммы',
          de: 'Flachklemmen',
        },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/cables/R010-03.jpg'],
  },
  {
    id: 'prod-r010-04',
    slug: 'r010-04-new-model-ebs-plug-24v-7p-unassembled',
    smrCode: 'R010-04',
    categoryId: 'cat-cables',
    subcategoryId: 'subcat-plugs-sockets',
    title: {
      en: 'New Model EBS 24V/7P Plug (Unassembled)',
      tr: 'Yeni Model EBS 24V/7P Fiş Demonte',
      ru: 'Вилка EBS 24 В/7 контактов, новая модель (в разобранном виде)',
      de: 'EBS-Stecker 24 V/7-polig, Neues Modell (unmontiert)',
    },
    description: {
      en: 'New model 24 V, 7-pin EBS plug with flat terminals, supplied unassembled.',
      tr: 'Yassı terminalli, demonte teslim edilen yeni model 24 V, 7 pinli EBS fişi.',
      ru: 'Вилка EBS 24 В, 7 контактов, новая модель, с плоскими клеммами, поставляется в разобранном виде.',
      de: 'EBS-Stecker 24 V, 7-polig, Neues Modell, mit Flachklemmen, unmontiert geliefert.',
    },
    specs: [
      {
        label: {
          en: 'Voltage',
          tr: 'Voltaj',
          ru: 'Напряжение',
          de: 'Spannung',
        },
        value: { en: '24 V', tr: '24 V', ru: '24 В', de: '24 V' },
      },
      {
        label: {
          en: 'Number of pins',
          tr: 'Pin sayısı',
          ru: 'Количество контактов',
          de: 'Polzahl',
        },
        value: { en: '7', tr: '7', ru: '7', de: '7' },
      },
      {
        label: { en: 'Type', tr: 'Tip', ru: 'Тип', de: 'Typ' },
        value: { en: 'EBS', tr: 'EBS', ru: 'EBS', de: 'EBS' },
      },
      {
        label: {
          en: 'Terminals',
          tr: 'Terminal',
          ru: 'Клеммы',
          de: 'Anschlussklemmen',
        },
        value: {
          en: 'Flat terminals',
          tr: 'Yassı terminal',
          ru: 'Плоские клеммы',
          de: 'Flachklemmen',
        },
      },
      {
        label: {
          en: 'Version',
          tr: 'Versiyon',
          ru: 'Исполнение',
          de: 'Ausführung',
        },
        value: {
          en: 'New model, unassembled',
          tr: 'Yeni model, demonte',
          ru: 'Новая модель, в разобранном виде',
          de: 'Neues Modell, unmontiert',
        },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/placeholder.png'],
  },
  {
    id: 'prod-r010-05',
    slug: 'r010-05-new-model-abs-plug-24v-15p-unassembled',
    smrCode: 'R010-05',
    categoryId: 'cat-cables',
    subcategoryId: 'subcat-plugs-sockets',
    title: {
      en: 'New Model ABS 24V/15P Plug (Unassembled)',
      tr: 'Yeni Model ABS 24V/15P Fiş Demonte',
      ru: 'Вилка ABS 24 В/15 контактов, новая модель (в разобранном виде)',
      de: 'ABS-Stecker 24 V/15-polig, Neues Modell (unmontiert)',
    },
    description: {
      en: 'New model 24 V, 15-pin ABS plug with flat terminals, supplied unassembled.',
      tr: 'Yassı terminalli, demonte teslim edilen yeni model 24 V, 15 pinli ABS fişi.',
      ru: 'Вилка ABS 24 В, 15 контактов, новая модель, с плоскими клеммами, поставляется в разобранном виде.',
      de: 'ABS-Stecker 24 V, 15-polig, Neues Modell, mit Flachklemmen, unmontiert geliefert.',
    },
    specs: [
      {
        label: {
          en: 'Voltage',
          tr: 'Voltaj',
          ru: 'Напряжение',
          de: 'Spannung',
        },
        value: { en: '24 V', tr: '24 V', ru: '24 В', de: '24 V' },
      },
      {
        label: {
          en: 'Number of pins',
          tr: 'Pin sayısı',
          ru: 'Количество контактов',
          de: 'Polzahl',
        },
        value: { en: '15', tr: '15', ru: '15', de: '15' },
      },
      {
        label: { en: 'Type', tr: 'Tip', ru: 'Тип', de: 'Typ' },
        value: { en: 'ABS', tr: 'ABS', ru: 'ABS', de: 'ABS' },
      },
      {
        label: {
          en: 'Terminals',
          tr: 'Terminal',
          ru: 'Клеммы',
          de: 'Anschlussklemmen',
        },
        value: {
          en: 'Flat terminals',
          tr: 'Yassı terminal',
          ru: 'Плоские клеммы',
          de: 'Flachklemmen',
        },
      },
      {
        label: {
          en: 'Version',
          tr: 'Versiyon',
          ru: 'Исполнение',
          de: 'Ausführung',
        },
        value: {
          en: 'New model, unassembled',
          tr: 'Yeni model, demonte',
          ru: 'Новая модель, в разобранном виде',
          de: 'Neues Modell, unmontiert',
        },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/cables/R010-05.jpg'],
  },
  {
    id: 'prod-r010-06',
    slug: 'r010-06-new-model-adapter-plug-binocular',
    smrCode: 'R010-06',
    categoryId: 'cat-cables',
    subcategoryId: 'subcat-plugs-sockets',
    title: {
      en: 'New Model Adapter Plug – Binocular',
      tr: 'Yeni Model Adaptör Fiş - Dürbün',
      ru: 'Переходная вилка, новая модель, тип «бинокль»',
      de: 'Adapterstecker Neues Modell – Binocular-Ausführung',
    },
    description: {
      en: 'New model adapter plug in binocular design for trailer electrical connections.',
      tr: 'Römork elektrik bağlantıları için dürbün yapılı yeni model adaptör fiş.',
      ru: 'Переходная вилка новой модели в исполнении «бинокль» для электрических соединений прицепа.',
      de: 'Adapterstecker Neues Modell in Binocular-Ausführung für elektrische Anhängerverbindungen.',
    },
    specs: [
      {
        label: { en: 'Type', tr: 'Tip', ru: 'Тип', de: 'Typ' },
        value: {
          en: 'Adapter plug',
          tr: 'Adaptör fiş',
          ru: 'Переходная вилка',
          de: 'Adapterstecker',
        },
      },
      {
        label: {
          en: 'Version',
          tr: 'Versiyon',
          ru: 'Исполнение',
          de: 'Ausführung',
        },
        value: {
          en: 'New model, binocular',
          tr: 'Yeni model, dürbün',
          ru: 'Новая модель, «бинокль»',
          de: 'Neues Modell, Binocular',
        },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/cables/R010-06.jpg'],
  },
  {
    id: 'prod-r020-01',
    slug: 'r020-01-plug-24v-7p-plastic-cover-black-n-type',
    smrCode: 'R020-01',
    categoryId: 'cat-cables',
    subcategoryId: 'subcat-plugs-sockets',
    title: {
      en: '24V/7P Plastic Plug with Cover, Black (N-Type)',
      tr: '24V/7P Plastik Kapaklı Siyah Fiş (N Tipi)',
      ru: 'Вилка 24 В/7 контактов, пластиковая, с крышкой, чёрная (тип N)',
      de: 'Kunststoffstecker 24 V/7-polig mit Deckel, schwarz (N-Typ)',
    },
    description: {
      en: '24 V, 7-pin plastic plug with cover for the electrical connection between tractor unit and trailer (N-type, screw terminals).',
      tr: 'Çekici ile römork arasındaki elektrik bağlantısı için 24 V, 7 pinli plastik kapaklı fiş (N tipi, vidalı terminal).',
      ru: 'Вилка 24 В, 7 контактов, пластиковая, с крышкой, для электрического соединения тягача и прицепа (тип N, винтовые клеммы).',
      de: 'Kunststoffstecker 24 V, 7-polig mit Deckel, für die elektrische Verbindung zwischen Zugfahrzeug und Anhänger (N-Typ, Schraubklemmen).',
    },
    specs: [
      {
        label: {
          en: 'Voltage',
          tr: 'Voltaj',
          ru: 'Напряжение',
          de: 'Spannung',
        },
        value: { en: '24 V', tr: '24 V', ru: '24 В', de: '24 V' },
      },
      {
        label: {
          en: 'Number of pins',
          tr: 'Pin sayısı',
          ru: 'Количество контактов',
          de: 'Polzahl',
        },
        value: { en: '7', tr: '7', ru: '7', de: '7' },
      },
      {
        label: {
          en: 'Plug type',
          tr: 'Fiş tipi',
          ru: 'Тип вилки',
          de: 'Steckertyp',
        },
        value: { en: 'N-type', tr: 'N tipi', ru: 'Тип N', de: 'N-Typ' },
      },
      {
        label: {
          en: 'Terminals',
          tr: 'Terminal',
          ru: 'Клеммы',
          de: 'Anschlussklemmen',
        },
        value: {
          en: 'Screw terminals',
          tr: 'Vidalı terminal',
          ru: 'Винтовые клеммы',
          de: 'Schraubklemmen',
        },
      },
      {
        label: {
          en: 'Material',
          tr: 'Malzeme',
          ru: 'Материал',
          de: 'Material',
        },
        value: {
          en: 'Plastic',
          tr: 'Plastik',
          ru: 'Пластик',
          de: 'Kunststoff',
        },
      },
      {
        label: { en: 'Cover', tr: 'Kapak', ru: 'Крышка', de: 'Deckel' },
        value: { en: 'Yes', tr: 'Var', ru: 'Есть', de: 'Ja' },
      },
      {
        label: { en: 'Color', tr: 'Renk', ru: 'Цвет', de: 'Farbe' },
        value: { en: 'Black', tr: 'Siyah', ru: 'Чёрный', de: 'Schwarz' },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/cables/R020-01.jpg'],
  },
  {
    id: 'prod-r020-01a',
    slug: 'r020-01a-plug-24v-7p-plastic-cover-black-foot-n-type',
    smrCode: 'R020-01A',
    categoryId: 'cat-cables',
    subcategoryId: 'subcat-plugs-sockets',
    title: {
      en: '24V/7P Plastic Plug with Cover, Black, Foot – Socket Entry (N-Type)',
      tr: '24V/7P Plastik Kapaklı Siyah Fiş, Ayak - Soket Girişli (N Tipi)',
      ru: 'Вилка 24 В/7 контактов, пластиковая, с крышкой, чёрная, ножка — гнездовой ввод (тип N)',
      de: 'Kunststoffstecker 24 V/7-polig mit Deckel, schwarz, Fuß – Buchseneingang (N-Typ)',
    },
    description: {
      en: '24 V, 7-pin plastic plug with cover for the electrical connection between tractor unit and trailer (N-type, flat terminals).',
      tr: 'Çekici ile römork arasındaki elektrik bağlantısı için 24 V, 7 pinli plastik kapaklı fiş (N tipi, yassı terminal).',
      ru: 'Вилка 24 В, 7 контактов, пластиковая, с крышкой, для электрического соединения тягача и прицепа (тип N, плоские клеммы).',
      de: 'Kunststoffstecker 24 V, 7-polig mit Deckel, für die elektrische Verbindung zwischen Zugfahrzeug und Anhänger (N-Typ, Flachklemmen).',
    },
    specs: [
      {
        label: {
          en: 'Voltage',
          tr: 'Voltaj',
          ru: 'Напряжение',
          de: 'Spannung',
        },
        value: { en: '24 V', tr: '24 V', ru: '24 В', de: '24 V' },
      },
      {
        label: {
          en: 'Number of pins',
          tr: 'Pin sayısı',
          ru: 'Количество контактов',
          de: 'Polzahl',
        },
        value: { en: '7', tr: '7', ru: '7', de: '7' },
      },
      {
        label: {
          en: 'Plug type',
          tr: 'Fiş tipi',
          ru: 'Тип вилки',
          de: 'Steckertyp',
        },
        value: { en: 'N-type', tr: 'N tipi', ru: 'Тип N', de: 'N-Typ' },
      },
      {
        label: {
          en: 'Terminals',
          tr: 'Terminal',
          ru: 'Клеммы',
          de: 'Anschlussklemmen',
        },
        value: {
          en: 'Flat terminals',
          tr: 'Yassı terminal',
          ru: 'Плоские клеммы',
          de: 'Flachklemmen',
        },
      },
      {
        label: {
          en: 'Material',
          tr: 'Malzeme',
          ru: 'Материал',
          de: 'Material',
        },
        value: {
          en: 'Plastic',
          tr: 'Plastik',
          ru: 'Пластик',
          de: 'Kunststoff',
        },
      },
      {
        label: { en: 'Cover', tr: 'Kapak', ru: 'Крышка', de: 'Deckel' },
        value: { en: 'Yes', tr: 'Var', ru: 'Есть', de: 'Ja' },
      },
      {
        label: { en: 'Color', tr: 'Renk', ru: 'Цвет', de: 'Farbe' },
        value: { en: 'Black', tr: 'Siyah', ru: 'Чёрный', de: 'Schwarz' },
      },
      {
        label: { en: 'Design', tr: 'Yapı', ru: 'Конструкция', de: 'Bauart' },
        value: {
          en: 'Foot – Socket Entry',
          tr: 'Ayak - Soket Girişli',
          ru: 'ножка — гнездовой ввод',
          de: 'Fuß – Buchseneingang',
        },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/cables/R020-01A.jpg'],
  },
  {
    id: 'prod-r020-02',
    slug: 'r020-02-plug-24v-7p-plastic-cover-white-s-type',
    smrCode: 'R020-02',
    categoryId: 'cat-cables',
    subcategoryId: 'subcat-plugs-sockets',
    title: {
      en: '24V/7P Plastic Plug with Cover, White (S-Type)',
      tr: '24V/7P Plastik Kapaklı Beyaz Fiş (S Tipi)',
      ru: 'Вилка 24 В/7 контактов, пластиковая, с крышкой, белая (тип S)',
      de: 'Kunststoffstecker 24 V/7-polig mit Deckel, weiß (S-Typ)',
    },
    description: {
      en: '24 V, 7-pin plastic plug with cover for the electrical connection between tractor unit and trailer (S-type, screw terminals).',
      tr: 'Çekici ile römork arasındaki elektrik bağlantısı için 24 V, 7 pinli plastik kapaklı fiş (S tipi, vidalı terminal).',
      ru: 'Вилка 24 В, 7 контактов, пластиковая, с крышкой, для электрического соединения тягача и прицепа (тип S, винтовые клеммы).',
      de: 'Kunststoffstecker 24 V, 7-polig mit Deckel, für die elektrische Verbindung zwischen Zugfahrzeug und Anhänger (S-Typ, Schraubklemmen).',
    },
    specs: [
      {
        label: {
          en: 'Voltage',
          tr: 'Voltaj',
          ru: 'Напряжение',
          de: 'Spannung',
        },
        value: { en: '24 V', tr: '24 V', ru: '24 В', de: '24 V' },
      },
      {
        label: {
          en: 'Number of pins',
          tr: 'Pin sayısı',
          ru: 'Количество контактов',
          de: 'Polzahl',
        },
        value: { en: '7', tr: '7', ru: '7', de: '7' },
      },
      {
        label: {
          en: 'Plug type',
          tr: 'Fiş tipi',
          ru: 'Тип вилки',
          de: 'Steckertyp',
        },
        value: { en: 'S-type', tr: 'S tipi', ru: 'Тип S', de: 'S-Typ' },
      },
      {
        label: {
          en: 'Terminals',
          tr: 'Terminal',
          ru: 'Клеммы',
          de: 'Anschlussklemmen',
        },
        value: {
          en: 'Screw terminals',
          tr: 'Vidalı terminal',
          ru: 'Винтовые клеммы',
          de: 'Schraubklemmen',
        },
      },
      {
        label: {
          en: 'Material',
          tr: 'Malzeme',
          ru: 'Материал',
          de: 'Material',
        },
        value: {
          en: 'Plastic',
          tr: 'Plastik',
          ru: 'Пластик',
          de: 'Kunststoff',
        },
      },
      {
        label: { en: 'Cover', tr: 'Kapak', ru: 'Крышка', de: 'Deckel' },
        value: { en: 'Yes', tr: 'Var', ru: 'Есть', de: 'Ja' },
      },
      {
        label: { en: 'Color', tr: 'Renk', ru: 'Цвет', de: 'Farbe' },
        value: { en: 'White', tr: 'Beyaz', ru: 'Белый', de: 'Weiß' },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/cables/R020-02.jpg'],
  },
  {
    id: 'prod-r020-02a',
    slug: 'r020-02a-plug-24v-7p-plastic-cover-white-foot-s-type',
    smrCode: 'R020-02A',
    categoryId: 'cat-cables',
    subcategoryId: 'subcat-plugs-sockets',
    title: {
      en: '24V/7P Plastic Plug with Cover, White, Foot – Socket Entry (S-Type)',
      tr: '24V/7P Plastik Kapaklı Beyaz Fiş, Ayak - Soket Girişli (S Tipi)',
      ru: 'Вилка 24 В/7 контактов, пластиковая, с крышкой, белая, ножка — гнездовой ввод (тип S)',
      de: 'Kunststoffstecker 24 V/7-polig mit Deckel, weiß, Fuß – Buchseneingang (S-Typ)',
    },
    description: {
      en: '24 V, 7-pin plastic plug with cover for the electrical connection between tractor unit and trailer (S-type, flat terminals).',
      tr: 'Çekici ile römork arasındaki elektrik bağlantısı için 24 V, 7 pinli plastik kapaklı fiş (S tipi, yassı terminal).',
      ru: 'Вилка 24 В, 7 контактов, пластиковая, с крышкой, для электрического соединения тягача и прицепа (тип S, плоские клеммы).',
      de: 'Kunststoffstecker 24 V, 7-polig mit Deckel, für die elektrische Verbindung zwischen Zugfahrzeug und Anhänger (S-Typ, Flachklemmen).',
    },
    specs: [
      {
        label: {
          en: 'Voltage',
          tr: 'Voltaj',
          ru: 'Напряжение',
          de: 'Spannung',
        },
        value: { en: '24 V', tr: '24 V', ru: '24 В', de: '24 V' },
      },
      {
        label: {
          en: 'Number of pins',
          tr: 'Pin sayısı',
          ru: 'Количество контактов',
          de: 'Polzahl',
        },
        value: { en: '7', tr: '7', ru: '7', de: '7' },
      },
      {
        label: {
          en: 'Plug type',
          tr: 'Fiş tipi',
          ru: 'Тип вилки',
          de: 'Steckertyp',
        },
        value: { en: 'S-type', tr: 'S tipi', ru: 'Тип S', de: 'S-Typ' },
      },
      {
        label: {
          en: 'Terminals',
          tr: 'Terminal',
          ru: 'Клеммы',
          de: 'Anschlussklemmen',
        },
        value: {
          en: 'Flat terminals',
          tr: 'Yassı terminal',
          ru: 'Плоские клеммы',
          de: 'Flachklemmen',
        },
      },
      {
        label: {
          en: 'Material',
          tr: 'Malzeme',
          ru: 'Материал',
          de: 'Material',
        },
        value: {
          en: 'Plastic',
          tr: 'Plastik',
          ru: 'Пластик',
          de: 'Kunststoff',
        },
      },
      {
        label: { en: 'Cover', tr: 'Kapak', ru: 'Крышка', de: 'Deckel' },
        value: { en: 'Yes', tr: 'Var', ru: 'Есть', de: 'Ja' },
      },
      {
        label: { en: 'Color', tr: 'Renk', ru: 'Цвет', de: 'Farbe' },
        value: { en: 'White', tr: 'Beyaz', ru: 'Белый', de: 'Weiß' },
      },
      {
        label: { en: 'Design', tr: 'Yapı', ru: 'Конструкция', de: 'Bauart' },
        value: {
          en: 'Foot – Socket Entry',
          tr: 'Ayak - Soket Girişli',
          ru: 'ножка — гнездовой ввод',
          de: 'Fuß – Buchseneingang',
        },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/placeholder.png'],
  },
  {
    id: 'prod-s070-01',
    slug: 's070-01-plug-24v-7p-alu-black-n-type',
    smrCode: 'S070-01',
    categoryId: 'cat-cables',
    subcategoryId: 'subcat-plugs-sockets',
    title: {
      en: '24V/7P Aluminium Plug, Black (N-Type)',
      tr: '24V/7P Alüminyum Siyah Fiş (N Tipi)',
      ru: 'Вилка 24 В/7 контактов, алюминиевая, чёрная (тип N)',
      de: 'Aluminiumstecker 24 V/7-polig, schwarz (N-Typ)',
    },
    description: {
      en: '24 V, 7-pin aluminium plug for the electrical connection between tractor unit and trailer (N-type, screw terminals).',
      tr: 'Çekici ile römork arasındaki elektrik bağlantısı için 24 V, 7 pinli alüminyum fiş (N tipi, vidalı terminal).',
      ru: 'Вилка 24 В, 7 контактов, алюминиевая, для электрического соединения тягача и прицепа (тип N, винтовые клеммы).',
      de: 'Aluminiumstecker 24 V, 7-polig, für die elektrische Verbindung zwischen Zugfahrzeug und Anhänger (N-Typ, Schraubklemmen).',
    },
    specs: [
      {
        label: {
          en: 'Voltage',
          tr: 'Voltaj',
          ru: 'Напряжение',
          de: 'Spannung',
        },
        value: { en: '24 V', tr: '24 V', ru: '24 В', de: '24 V' },
      },
      {
        label: {
          en: 'Number of pins',
          tr: 'Pin sayısı',
          ru: 'Количество контактов',
          de: 'Polzahl',
        },
        value: { en: '7', tr: '7', ru: '7', de: '7' },
      },
      {
        label: {
          en: 'Plug type',
          tr: 'Fiş tipi',
          ru: 'Тип вилки',
          de: 'Steckertyp',
        },
        value: { en: 'N-type', tr: 'N tipi', ru: 'Тип N', de: 'N-Typ' },
      },
      {
        label: {
          en: 'Terminals',
          tr: 'Terminal',
          ru: 'Клеммы',
          de: 'Anschlussklemmen',
        },
        value: {
          en: 'Screw terminals',
          tr: 'Vidalı terminal',
          ru: 'Винтовые клеммы',
          de: 'Schraubklemmen',
        },
      },
      {
        label: {
          en: 'Material',
          tr: 'Malzeme',
          ru: 'Материал',
          de: 'Material',
        },
        value: {
          en: 'Aluminium',
          tr: 'Alüminyum',
          ru: 'Алюминий',
          de: 'Aluminium',
        },
      },
      {
        label: { en: 'Color', tr: 'Renk', ru: 'Цвет', de: 'Farbe' },
        value: { en: 'Black', tr: 'Siyah', ru: 'Чёрный', de: 'Schwarz' },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/cables/S070-01.jpg'],
  },
  {
    id: 'prod-s070-01a',
    slug: 's070-01a-plug-24v-7p-alu-black-socket-n-type',
    smrCode: 'S070-01A',
    categoryId: 'cat-cables',
    subcategoryId: 'subcat-plugs-sockets',
    title: {
      en: '24V/7P Aluminium Plug, Black, Socket Entry (N-Type)',
      tr: '24V/7P Alüminyum Siyah Fiş, Soket Girişli (N Tipi)',
      ru: 'Вилка 24 В/7 контактов, алюминиевая, чёрная, гнездовой ввод (тип N)',
      de: 'Aluminiumstecker 24 V/7-polig, schwarz, Buchseneingang (N-Typ)',
    },
    description: {
      en: '24 V, 7-pin aluminium plug for the electrical connection between tractor unit and trailer (N-type, flat terminals).',
      tr: 'Çekici ile römork arasındaki elektrik bağlantısı için 24 V, 7 pinli alüminyum fiş (N tipi, yassı terminal).',
      ru: 'Вилка 24 В, 7 контактов, алюминиевая, для электрического соединения тягача и прицепа (тип N, плоские клеммы).',
      de: 'Aluminiumstecker 24 V, 7-polig, für die elektrische Verbindung zwischen Zugfahrzeug und Anhänger (N-Typ, Flachklemmen).',
    },
    specs: [
      {
        label: {
          en: 'Voltage',
          tr: 'Voltaj',
          ru: 'Напряжение',
          de: 'Spannung',
        },
        value: { en: '24 V', tr: '24 V', ru: '24 В', de: '24 V' },
      },
      {
        label: {
          en: 'Number of pins',
          tr: 'Pin sayısı',
          ru: 'Количество контактов',
          de: 'Polzahl',
        },
        value: { en: '7', tr: '7', ru: '7', de: '7' },
      },
      {
        label: {
          en: 'Plug type',
          tr: 'Fiş tipi',
          ru: 'Тип вилки',
          de: 'Steckertyp',
        },
        value: { en: 'N-type', tr: 'N tipi', ru: 'Тип N', de: 'N-Typ' },
      },
      {
        label: {
          en: 'Terminals',
          tr: 'Terminal',
          ru: 'Клеммы',
          de: 'Anschlussklemmen',
        },
        value: {
          en: 'Flat terminals',
          tr: 'Yassı terminal',
          ru: 'Плоские клеммы',
          de: 'Flachklemmen',
        },
      },
      {
        label: {
          en: 'Material',
          tr: 'Malzeme',
          ru: 'Материал',
          de: 'Material',
        },
        value: {
          en: 'Aluminium',
          tr: 'Alüminyum',
          ru: 'Алюминий',
          de: 'Aluminium',
        },
      },
      {
        label: { en: 'Color', tr: 'Renk', ru: 'Цвет', de: 'Farbe' },
        value: { en: 'Black', tr: 'Siyah', ru: 'Чёрный', de: 'Schwarz' },
      },
      {
        label: { en: 'Design', tr: 'Yapı', ru: 'Конструкция', de: 'Bauart' },
        value: {
          en: 'Socket Entry',
          tr: 'Soket Girişli',
          ru: 'гнездовой ввод',
          de: 'Buchseneingang',
        },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/cables/S070-01A.jpg'],
  },
  {
    id: 'prod-s070-02',
    slug: 's070-02-plug-24v-7p-alu-white-s-type',
    smrCode: 'S070-02',
    categoryId: 'cat-cables',
    subcategoryId: 'subcat-plugs-sockets',
    title: {
      en: '24V/7P Aluminium Plug, White (S-Type)',
      tr: '24V/7P Alüminyum Beyaz Fiş (S Tipi)',
      ru: 'Вилка 24 В/7 контактов, алюминиевая, белая (тип S)',
      de: 'Aluminiumstecker 24 V/7-polig, weiß (S-Typ)',
    },
    description: {
      en: '24 V, 7-pin aluminium plug for the electrical connection between tractor unit and trailer (S-type, screw terminals).',
      tr: 'Çekici ile römork arasındaki elektrik bağlantısı için 24 V, 7 pinli alüminyum fiş (S tipi, vidalı terminal).',
      ru: 'Вилка 24 В, 7 контактов, алюминиевая, для электрического соединения тягача и прицепа (тип S, винтовые клеммы).',
      de: 'Aluminiumstecker 24 V, 7-polig, für die elektrische Verbindung zwischen Zugfahrzeug und Anhänger (S-Typ, Schraubklemmen).',
    },
    specs: [
      {
        label: {
          en: 'Voltage',
          tr: 'Voltaj',
          ru: 'Напряжение',
          de: 'Spannung',
        },
        value: { en: '24 V', tr: '24 V', ru: '24 В', de: '24 V' },
      },
      {
        label: {
          en: 'Number of pins',
          tr: 'Pin sayısı',
          ru: 'Количество контактов',
          de: 'Polzahl',
        },
        value: { en: '7', tr: '7', ru: '7', de: '7' },
      },
      {
        label: {
          en: 'Plug type',
          tr: 'Fiş tipi',
          ru: 'Тип вилки',
          de: 'Steckertyp',
        },
        value: { en: 'S-type', tr: 'S tipi', ru: 'Тип S', de: 'S-Typ' },
      },
      {
        label: {
          en: 'Terminals',
          tr: 'Terminal',
          ru: 'Клеммы',
          de: 'Anschlussklemmen',
        },
        value: {
          en: 'Screw terminals',
          tr: 'Vidalı terminal',
          ru: 'Винтовые клеммы',
          de: 'Schraubklemmen',
        },
      },
      {
        label: {
          en: 'Material',
          tr: 'Malzeme',
          ru: 'Материал',
          de: 'Material',
        },
        value: {
          en: 'Aluminium',
          tr: 'Alüminyum',
          ru: 'Алюминий',
          de: 'Aluminium',
        },
      },
      {
        label: { en: 'Color', tr: 'Renk', ru: 'Цвет', de: 'Farbe' },
        value: { en: 'White', tr: 'Beyaz', ru: 'Белый', de: 'Weiß' },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/placeholder.png'],
  },
  {
    id: 'prod-s070-02a',
    slug: 's070-02a-plug-24v-7p-alu-white-socket-s-type',
    smrCode: 'S070-02A',
    categoryId: 'cat-cables',
    subcategoryId: 'subcat-plugs-sockets',
    title: {
      en: '24V/7P Aluminium Plug, White, Socket Entry (S-Type)',
      tr: '24V/7P Alüminyum Beyaz Fiş, Soket Girişli (S Tipi)',
      ru: 'Вилка 24 В/7 контактов, алюминиевая, белая, гнездовой ввод (тип S)',
      de: 'Aluminiumstecker 24 V/7-polig, weiß, Buchseneingang (S-Typ)',
    },
    description: {
      en: '24 V, 7-pin aluminium plug for the electrical connection between tractor unit and trailer (S-type, flat terminals).',
      tr: 'Çekici ile römork arasındaki elektrik bağlantısı için 24 V, 7 pinli alüminyum fiş (S tipi, yassı terminal).',
      ru: 'Вилка 24 В, 7 контактов, алюминиевая, для электрического соединения тягача и прицепа (тип S, плоские клеммы).',
      de: 'Aluminiumstecker 24 V, 7-polig, für die elektrische Verbindung zwischen Zugfahrzeug und Anhänger (S-Typ, Flachklemmen).',
    },
    specs: [
      {
        label: {
          en: 'Voltage',
          tr: 'Voltaj',
          ru: 'Напряжение',
          de: 'Spannung',
        },
        value: { en: '24 V', tr: '24 V', ru: '24 В', de: '24 V' },
      },
      {
        label: {
          en: 'Number of pins',
          tr: 'Pin sayısı',
          ru: 'Количество контактов',
          de: 'Polzahl',
        },
        value: { en: '7', tr: '7', ru: '7', de: '7' },
      },
      {
        label: {
          en: 'Plug type',
          tr: 'Fiş tipi',
          ru: 'Тип вилки',
          de: 'Steckertyp',
        },
        value: { en: 'S-type', tr: 'S tipi', ru: 'Тип S', de: 'S-Typ' },
      },
      {
        label: {
          en: 'Terminals',
          tr: 'Terminal',
          ru: 'Клеммы',
          de: 'Anschlussklemmen',
        },
        value: {
          en: 'Flat terminals',
          tr: 'Yassı terminal',
          ru: 'Плоские клеммы',
          de: 'Flachklemmen',
        },
      },
      {
        label: {
          en: 'Material',
          tr: 'Malzeme',
          ru: 'Материал',
          de: 'Material',
        },
        value: {
          en: 'Aluminium',
          tr: 'Alüminyum',
          ru: 'Алюминий',
          de: 'Aluminium',
        },
      },
      {
        label: { en: 'Color', tr: 'Renk', ru: 'Цвет', de: 'Farbe' },
        value: { en: 'White', tr: 'Beyaz', ru: 'Белый', de: 'Weiß' },
      },
      {
        label: { en: 'Design', tr: 'Yapı', ru: 'Конструкция', de: 'Bauart' },
        value: {
          en: 'Socket Entry',
          tr: 'Soket Girişli',
          ru: 'гнездовой ввод',
          de: 'Buchseneingang',
        },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/cables/S070-02A.jpg'],
  },
  {
    id: 'prod-s070-03',
    slug: 's070-03-plug-12v-7p-alu-black-n-type',
    smrCode: 'S070-03',
    categoryId: 'cat-cables',
    subcategoryId: 'subcat-plugs-sockets',
    title: {
      en: '12V/7P Aluminium Plug, Black (N-Type)',
      tr: '12V/7P Alüminyum Siyah Fiş (N Tipi)',
      ru: 'Вилка 12 В/7 контактов, алюминиевая, чёрная (тип N)',
      de: 'Aluminiumstecker 12 V/7-polig, schwarz (N-Typ)',
    },
    description: {
      en: '12 V, 7-pin aluminium plug for the electrical connection between tractor unit and trailer (N-type, screw terminals).',
      tr: 'Çekici ile römork arasındaki elektrik bağlantısı için 12 V, 7 pinli alüminyum fiş (N tipi, vidalı terminal).',
      ru: 'Вилка 12 В, 7 контактов, алюминиевая, для электрического соединения тягача и прицепа (тип N, винтовые клеммы).',
      de: 'Aluminiumstecker 12 V, 7-polig, für die elektrische Verbindung zwischen Zugfahrzeug und Anhänger (N-Typ, Schraubklemmen).',
    },
    specs: [
      {
        label: {
          en: 'Voltage',
          tr: 'Voltaj',
          ru: 'Напряжение',
          de: 'Spannung',
        },
        value: { en: '12 V', tr: '12 V', ru: '12 В', de: '12 V' },
      },
      {
        label: {
          en: 'Number of pins',
          tr: 'Pin sayısı',
          ru: 'Количество контактов',
          de: 'Polzahl',
        },
        value: { en: '7', tr: '7', ru: '7', de: '7' },
      },
      {
        label: {
          en: 'Plug type',
          tr: 'Fiş tipi',
          ru: 'Тип вилки',
          de: 'Steckertyp',
        },
        value: { en: 'N-type', tr: 'N tipi', ru: 'Тип N', de: 'N-Typ' },
      },
      {
        label: {
          en: 'Terminals',
          tr: 'Terminal',
          ru: 'Клеммы',
          de: 'Anschlussklemmen',
        },
        value: {
          en: 'Screw terminals',
          tr: 'Vidalı terminal',
          ru: 'Винтовые клеммы',
          de: 'Schraubklemmen',
        },
      },
      {
        label: {
          en: 'Material',
          tr: 'Malzeme',
          ru: 'Материал',
          de: 'Material',
        },
        value: {
          en: 'Aluminium',
          tr: 'Alüminyum',
          ru: 'Алюминий',
          de: 'Aluminium',
        },
      },
      {
        label: { en: 'Color', tr: 'Renk', ru: 'Цвет', de: 'Farbe' },
        value: { en: 'Black', tr: 'Siyah', ru: 'Чёрный', de: 'Schwarz' },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/cables/S070-03.jpg'],
  },
  {
    id: 'prod-s070-04',
    slug: 's070-04-plug-12v-7p-alu-white-s-type',
    smrCode: 'S070-04',
    categoryId: 'cat-cables',
    subcategoryId: 'subcat-plugs-sockets',
    title: {
      en: '12V/7P Aluminium Plug, White (S-Type)',
      tr: '12V/7P Alüminyum Beyaz Fiş (S Tipi)',
      ru: 'Вилка 12 В/7 контактов, алюминиевая, белая (тип S)',
      de: 'Aluminiumstecker 12 V/7-polig, weiß (S-Typ)',
    },
    description: {
      en: '12 V, 7-pin aluminium plug for the electrical connection between tractor unit and trailer (S-type, screw terminals).',
      tr: 'Çekici ile römork arasındaki elektrik bağlantısı için 12 V, 7 pinli alüminyum fiş (S tipi, vidalı terminal).',
      ru: 'Вилка 12 В, 7 контактов, алюминиевая, для электрического соединения тягача и прицепа (тип S, винтовые клеммы).',
      de: 'Aluminiumstecker 12 V, 7-polig, für die elektrische Verbindung zwischen Zugfahrzeug und Anhänger (S-Typ, Schraubklemmen).',
    },
    specs: [
      {
        label: {
          en: 'Voltage',
          tr: 'Voltaj',
          ru: 'Напряжение',
          de: 'Spannung',
        },
        value: { en: '12 V', tr: '12 V', ru: '12 В', de: '12 V' },
      },
      {
        label: {
          en: 'Number of pins',
          tr: 'Pin sayısı',
          ru: 'Количество контактов',
          de: 'Polzahl',
        },
        value: { en: '7', tr: '7', ru: '7', de: '7' },
      },
      {
        label: {
          en: 'Plug type',
          tr: 'Fiş tipi',
          ru: 'Тип вилки',
          de: 'Steckertyp',
        },
        value: { en: 'S-type', tr: 'S tipi', ru: 'Тип S', de: 'S-Typ' },
      },
      {
        label: {
          en: 'Terminals',
          tr: 'Terminal',
          ru: 'Клеммы',
          de: 'Anschlussklemmen',
        },
        value: {
          en: 'Screw terminals',
          tr: 'Vidalı terminal',
          ru: 'Винтовые клеммы',
          de: 'Schraubklemmen',
        },
      },
      {
        label: {
          en: 'Material',
          tr: 'Malzeme',
          ru: 'Материал',
          de: 'Material',
        },
        value: {
          en: 'Aluminium',
          tr: 'Alüminyum',
          ru: 'Алюминий',
          de: 'Aluminium',
        },
      },
      {
        label: { en: 'Color', tr: 'Renk', ru: 'Цвет', de: 'Farbe' },
        value: { en: 'White', tr: 'Beyaz', ru: 'Белый', de: 'Weiß' },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/cables/S070-02A.jpg'],
  },
  {
    id: 'prod-s080-01',
    slug: 's080-01-plug-24v-7p-alu-cover-black-n-type',
    smrCode: 'S080-01',
    categoryId: 'cat-cables',
    subcategoryId: 'subcat-plugs-sockets',
    title: {
      en: '24V/7P Aluminium Plug with Cover, Black (N-Type)',
      tr: '24V/7P Alüminyum Kapaklı Siyah Fiş (N Tipi)',
      ru: 'Вилка 24 В/7 контактов, алюминиевая, с крышкой, чёрная (тип N)',
      de: 'Aluminiumstecker 24 V/7-polig mit Deckel, schwarz (N-Typ)',
    },
    description: {
      en: '24 V, 7-pin aluminium plug with cover for the electrical connection between tractor unit and trailer (N-type, screw terminals).',
      tr: 'Çekici ile römork arasındaki elektrik bağlantısı için 24 V, 7 pinli alüminyum kapaklı fiş (N tipi, vidalı terminal).',
      ru: 'Вилка 24 В, 7 контактов, алюминиевая, с крышкой, для электрического соединения тягача и прицепа (тип N, винтовые клеммы).',
      de: 'Aluminiumstecker 24 V, 7-polig mit Deckel, für die elektrische Verbindung zwischen Zugfahrzeug und Anhänger (N-Typ, Schraubklemmen).',
    },
    specs: [
      {
        label: {
          en: 'Voltage',
          tr: 'Voltaj',
          ru: 'Напряжение',
          de: 'Spannung',
        },
        value: { en: '24 V', tr: '24 V', ru: '24 В', de: '24 V' },
      },
      {
        label: {
          en: 'Number of pins',
          tr: 'Pin sayısı',
          ru: 'Количество контактов',
          de: 'Polzahl',
        },
        value: { en: '7', tr: '7', ru: '7', de: '7' },
      },
      {
        label: {
          en: 'Plug type',
          tr: 'Fiş tipi',
          ru: 'Тип вилки',
          de: 'Steckertyp',
        },
        value: { en: 'N-type', tr: 'N tipi', ru: 'Тип N', de: 'N-Typ' },
      },
      {
        label: {
          en: 'Terminals',
          tr: 'Terminal',
          ru: 'Клеммы',
          de: 'Anschlussklemmen',
        },
        value: {
          en: 'Screw terminals',
          tr: 'Vidalı terminal',
          ru: 'Винтовые клеммы',
          de: 'Schraubklemmen',
        },
      },
      {
        label: {
          en: 'Material',
          tr: 'Malzeme',
          ru: 'Материал',
          de: 'Material',
        },
        value: {
          en: 'Aluminium',
          tr: 'Alüminyum',
          ru: 'Алюминий',
          de: 'Aluminium',
        },
      },
      {
        label: { en: 'Cover', tr: 'Kapak', ru: 'Крышка', de: 'Deckel' },
        value: { en: 'Yes', tr: 'Var', ru: 'Есть', de: 'Ja' },
      },
      {
        label: { en: 'Color', tr: 'Renk', ru: 'Цвет', de: 'Farbe' },
        value: { en: 'Black', tr: 'Siyah', ru: 'Чёрный', de: 'Schwarz' },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/cables/S080-01.jpg'],
  },
  {
    id: 'prod-s080-01a',
    slug: 's080-01a-plug-24v-7p-alu-cover-black-foot-n-type',
    smrCode: 'S080-01A',
    categoryId: 'cat-cables',
    subcategoryId: 'subcat-plugs-sockets',
    title: {
      en: '24V/7P Aluminium Plug with Cover, Black, Foot – Socket Entry (N-Type)',
      tr: '24V/7P Alüminyum Kapaklı Siyah Fiş, Ayak - Soket Girişli (N Tipi)',
      ru: 'Вилка 24 В/7 контактов, алюминиевая, с крышкой, чёрная, ножка — гнездовой ввод (тип N)',
      de: 'Aluminiumstecker 24 V/7-polig mit Deckel, schwarz, Fuß – Buchseneingang (N-Typ)',
    },
    description: {
      en: '24 V, 7-pin aluminium plug with cover for the electrical connection between tractor unit and trailer (N-type, flat terminals).',
      tr: 'Çekici ile römork arasındaki elektrik bağlantısı için 24 V, 7 pinli alüminyum kapaklı fiş (N tipi, yassı terminal).',
      ru: 'Вилка 24 В, 7 контактов, алюминиевая, с крышкой, для электрического соединения тягача и прицепа (тип N, плоские клеммы).',
      de: 'Aluminiumstecker 24 V, 7-polig mit Deckel, für die elektrische Verbindung zwischen Zugfahrzeug und Anhänger (N-Typ, Flachklemmen).',
    },
    specs: [
      {
        label: {
          en: 'Voltage',
          tr: 'Voltaj',
          ru: 'Напряжение',
          de: 'Spannung',
        },
        value: { en: '24 V', tr: '24 V', ru: '24 В', de: '24 V' },
      },
      {
        label: {
          en: 'Number of pins',
          tr: 'Pin sayısı',
          ru: 'Количество контактов',
          de: 'Polzahl',
        },
        value: { en: '7', tr: '7', ru: '7', de: '7' },
      },
      {
        label: {
          en: 'Plug type',
          tr: 'Fiş tipi',
          ru: 'Тип вилки',
          de: 'Steckertyp',
        },
        value: { en: 'N-type', tr: 'N tipi', ru: 'Тип N', de: 'N-Typ' },
      },
      {
        label: {
          en: 'Terminals',
          tr: 'Terminal',
          ru: 'Клеммы',
          de: 'Anschlussklemmen',
        },
        value: {
          en: 'Flat terminals',
          tr: 'Yassı terminal',
          ru: 'Плоские клеммы',
          de: 'Flachklemmen',
        },
      },
      {
        label: {
          en: 'Material',
          tr: 'Malzeme',
          ru: 'Материал',
          de: 'Material',
        },
        value: {
          en: 'Aluminium',
          tr: 'Alüminyum',
          ru: 'Алюминий',
          de: 'Aluminium',
        },
      },
      {
        label: { en: 'Cover', tr: 'Kapak', ru: 'Крышка', de: 'Deckel' },
        value: { en: 'Yes', tr: 'Var', ru: 'Есть', de: 'Ja' },
      },
      {
        label: { en: 'Color', tr: 'Renk', ru: 'Цвет', de: 'Farbe' },
        value: { en: 'Black', tr: 'Siyah', ru: 'Чёрный', de: 'Schwarz' },
      },
      {
        label: { en: 'Design', tr: 'Yapı', ru: 'Конструкция', de: 'Bauart' },
        value: {
          en: 'Foot – Socket Entry',
          tr: 'Ayak - Soket Girişli',
          ru: 'ножка — гнездовой ввод',
          de: 'Fuß – Buchseneingang',
        },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/cables/S080-01A.jpg'],
  },
  {
    id: 'prod-s080-02',
    slug: 's080-02-plug-24v-7p-alu-cover-white-s-type',
    smrCode: 'S080-02',
    categoryId: 'cat-cables',
    subcategoryId: 'subcat-plugs-sockets',
    title: {
      en: '24V/7P Aluminium Plug with Cover, White (S-Type)',
      tr: '24V/7P Alüminyum Kapaklı Beyaz Fiş (S Tipi)',
      ru: 'Вилка 24 В/7 контактов, алюминиевая, с крышкой, белая (тип S)',
      de: 'Aluminiumstecker 24 V/7-polig mit Deckel, weiß (S-Typ)',
    },
    description: {
      en: '24 V, 7-pin aluminium plug with cover for the electrical connection between tractor unit and trailer (S-type, screw terminals).',
      tr: 'Çekici ile römork arasındaki elektrik bağlantısı için 24 V, 7 pinli alüminyum kapaklı fiş (S tipi, vidalı terminal).',
      ru: 'Вилка 24 В, 7 контактов, алюминиевая, с крышкой, для электрического соединения тягача и прицепа (тип S, винтовые клеммы).',
      de: 'Aluminiumstecker 24 V, 7-polig mit Deckel, für die elektrische Verbindung zwischen Zugfahrzeug und Anhänger (S-Typ, Schraubklemmen).',
    },
    specs: [
      {
        label: {
          en: 'Voltage',
          tr: 'Voltaj',
          ru: 'Напряжение',
          de: 'Spannung',
        },
        value: { en: '24 V', tr: '24 V', ru: '24 В', de: '24 V' },
      },
      {
        label: {
          en: 'Number of pins',
          tr: 'Pin sayısı',
          ru: 'Количество контактов',
          de: 'Polzahl',
        },
        value: { en: '7', tr: '7', ru: '7', de: '7' },
      },
      {
        label: {
          en: 'Plug type',
          tr: 'Fiş tipi',
          ru: 'Тип вилки',
          de: 'Steckertyp',
        },
        value: { en: 'S-type', tr: 'S tipi', ru: 'Тип S', de: 'S-Typ' },
      },
      {
        label: {
          en: 'Terminals',
          tr: 'Terminal',
          ru: 'Клеммы',
          de: 'Anschlussklemmen',
        },
        value: {
          en: 'Screw terminals',
          tr: 'Vidalı terminal',
          ru: 'Винтовые клеммы',
          de: 'Schraubklemmen',
        },
      },
      {
        label: {
          en: 'Material',
          tr: 'Malzeme',
          ru: 'Материал',
          de: 'Material',
        },
        value: {
          en: 'Aluminium',
          tr: 'Alüminyum',
          ru: 'Алюминий',
          de: 'Aluminium',
        },
      },
      {
        label: { en: 'Cover', tr: 'Kapak', ru: 'Крышка', de: 'Deckel' },
        value: { en: 'Yes', tr: 'Var', ru: 'Есть', de: 'Ja' },
      },
      {
        label: { en: 'Color', tr: 'Renk', ru: 'Цвет', de: 'Farbe' },
        value: { en: 'White', tr: 'Beyaz', ru: 'Белый', de: 'Weiß' },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/cables/S080-02.jpg'],
  },
  {
    id: 'prod-s080-02a',
    slug: 's080-02a-plug-24v-7p-alu-cover-white-foot-s-type',
    smrCode: 'S080-02A',
    categoryId: 'cat-cables',
    subcategoryId: 'subcat-plugs-sockets',
    title: {
      en: '24V/7P Aluminium Plug with Cover, White, Foot – Socket Entry (S-Type)',
      tr: '24V/7P Alüminyum Kapaklı Beyaz Fiş, Ayak - Soket Girişli (S Tipi)',
      ru: 'Вилка 24 В/7 контактов, алюминиевая, с крышкой, белая, ножка — гнездовой ввод (тип S)',
      de: 'Aluminiumstecker 24 V/7-polig mit Deckel, weiß, Fuß – Buchseneingang (S-Typ)',
    },
    description: {
      en: '24 V, 7-pin aluminium plug with cover for the electrical connection between tractor unit and trailer (S-type, flat terminals).',
      tr: 'Çekici ile römork arasındaki elektrik bağlantısı için 24 V, 7 pinli alüminyum kapaklı fiş (S tipi, yassı terminal).',
      ru: 'Вилка 24 В, 7 контактов, алюминиевая, с крышкой, для электрического соединения тягача и прицепа (тип S, плоские клеммы).',
      de: 'Aluminiumstecker 24 V, 7-polig mit Deckel, für die elektrische Verbindung zwischen Zugfahrzeug und Anhänger (S-Typ, Flachklemmen).',
    },
    specs: [
      {
        label: {
          en: 'Voltage',
          tr: 'Voltaj',
          ru: 'Напряжение',
          de: 'Spannung',
        },
        value: { en: '24 V', tr: '24 V', ru: '24 В', de: '24 V' },
      },
      {
        label: {
          en: 'Number of pins',
          tr: 'Pin sayısı',
          ru: 'Количество контактов',
          de: 'Polzahl',
        },
        value: { en: '7', tr: '7', ru: '7', de: '7' },
      },
      {
        label: {
          en: 'Plug type',
          tr: 'Fiş tipi',
          ru: 'Тип вилки',
          de: 'Steckertyp',
        },
        value: { en: 'S-type', tr: 'S tipi', ru: 'Тип S', de: 'S-Typ' },
      },
      {
        label: {
          en: 'Terminals',
          tr: 'Terminal',
          ru: 'Клеммы',
          de: 'Anschlussklemmen',
        },
        value: {
          en: 'Flat terminals',
          tr: 'Yassı terminal',
          ru: 'Плоские клеммы',
          de: 'Flachklemmen',
        },
      },
      {
        label: {
          en: 'Material',
          tr: 'Malzeme',
          ru: 'Материал',
          de: 'Material',
        },
        value: {
          en: 'Aluminium',
          tr: 'Alüminyum',
          ru: 'Алюминий',
          de: 'Aluminium',
        },
      },
      {
        label: { en: 'Cover', tr: 'Kapak', ru: 'Крышка', de: 'Deckel' },
        value: { en: 'Yes', tr: 'Var', ru: 'Есть', de: 'Ja' },
      },
      {
        label: { en: 'Color', tr: 'Renk', ru: 'Цвет', de: 'Farbe' },
        value: { en: 'White', tr: 'Beyaz', ru: 'Белый', de: 'Weiß' },
      },
      {
        label: { en: 'Design', tr: 'Yapı', ru: 'Конструкция', de: 'Bauart' },
        value: {
          en: 'Foot – Socket Entry',
          tr: 'Ayak - Soket Girişli',
          ru: 'ножка — гнездовой ввод',
          de: 'Fuß – Buchseneingang',
        },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/cables/S080-02A.jpg'],
  },
  {
    id: 'prod-s080-03',
    slug: 's080-03-plug-12v-7p-alu-cover-black-n-type',
    smrCode: 'S080-03',
    categoryId: 'cat-cables',
    subcategoryId: 'subcat-plugs-sockets',
    title: {
      en: '12V/7P Aluminium Plug with Cover, Black (N-Type)',
      tr: '12V/7P Alüminyum Kapaklı Siyah Fiş (N Tipi)',
      ru: 'Вилка 12 В/7 контактов, алюминиевая, с крышкой, чёрная (тип N)',
      de: 'Aluminiumstecker 12 V/7-polig mit Deckel, schwarz (N-Typ)',
    },
    description: {
      en: '12 V, 7-pin aluminium plug with cover for the electrical connection between tractor unit and trailer (N-type, screw terminals).',
      tr: 'Çekici ile römork arasındaki elektrik bağlantısı için 12 V, 7 pinli alüminyum kapaklı fiş (N tipi, vidalı terminal).',
      ru: 'Вилка 12 В, 7 контактов, алюминиевая, с крышкой, для электрического соединения тягача и прицепа (тип N, винтовые клеммы).',
      de: 'Aluminiumstecker 12 V, 7-polig mit Deckel, für die elektrische Verbindung zwischen Zugfahrzeug und Anhänger (N-Typ, Schraubklemmen).',
    },
    specs: [
      {
        label: {
          en: 'Voltage',
          tr: 'Voltaj',
          ru: 'Напряжение',
          de: 'Spannung',
        },
        value: { en: '12 V', tr: '12 V', ru: '12 В', de: '12 V' },
      },
      {
        label: {
          en: 'Number of pins',
          tr: 'Pin sayısı',
          ru: 'Количество контактов',
          de: 'Polzahl',
        },
        value: { en: '7', tr: '7', ru: '7', de: '7' },
      },
      {
        label: {
          en: 'Plug type',
          tr: 'Fiş tipi',
          ru: 'Тип вилки',
          de: 'Steckertyp',
        },
        value: { en: 'N-type', tr: 'N tipi', ru: 'Тип N', de: 'N-Typ' },
      },
      {
        label: {
          en: 'Terminals',
          tr: 'Terminal',
          ru: 'Клеммы',
          de: 'Anschlussklemmen',
        },
        value: {
          en: 'Screw terminals',
          tr: 'Vidalı terminal',
          ru: 'Винтовые клеммы',
          de: 'Schraubklemmen',
        },
      },
      {
        label: {
          en: 'Material',
          tr: 'Malzeme',
          ru: 'Материал',
          de: 'Material',
        },
        value: {
          en: 'Aluminium',
          tr: 'Alüminyum',
          ru: 'Алюминий',
          de: 'Aluminium',
        },
      },
      {
        label: { en: 'Cover', tr: 'Kapak', ru: 'Крышка', de: 'Deckel' },
        value: { en: 'Yes', tr: 'Var', ru: 'Есть', de: 'Ja' },
      },
      {
        label: { en: 'Color', tr: 'Renk', ru: 'Цвет', de: 'Farbe' },
        value: { en: 'Black', tr: 'Siyah', ru: 'Чёрный', de: 'Schwarz' },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/cables/S080-03.jpg'],
  },
  {
    id: 'prod-s080-04',
    slug: 's080-04-plug-12v-7p-alu-cover-white-s-type',
    smrCode: 'S080-04',
    categoryId: 'cat-cables',
    subcategoryId: 'subcat-plugs-sockets',
    title: {
      en: '12V/7P Aluminium Plug with Cover, White (S-Type)',
      tr: '12V/7P Alüminyum Kapaklı Beyaz Fiş (S Tipi)',
      ru: 'Вилка 12 В/7 контактов, алюминиевая, с крышкой, белая (тип S)',
      de: 'Aluminiumstecker 12 V/7-polig mit Deckel, weiß (S-Typ)',
    },
    description: {
      en: '12 V, 7-pin aluminium plug with cover for the electrical connection between tractor unit and trailer (S-type, screw terminals).',
      tr: 'Çekici ile römork arasındaki elektrik bağlantısı için 12 V, 7 pinli alüminyum kapaklı fiş (S tipi, vidalı terminal).',
      ru: 'Вилка 12 В, 7 контактов, алюминиевая, с крышкой, для электрического соединения тягача и прицепа (тип S, винтовые клеммы).',
      de: 'Aluminiumstecker 12 V, 7-polig mit Deckel, für die elektrische Verbindung zwischen Zugfahrzeug und Anhänger (S-Typ, Schraubklemmen).',
    },
    specs: [
      {
        label: {
          en: 'Voltage',
          tr: 'Voltaj',
          ru: 'Напряжение',
          de: 'Spannung',
        },
        value: { en: '12 V', tr: '12 V', ru: '12 В', de: '12 V' },
      },
      {
        label: {
          en: 'Number of pins',
          tr: 'Pin sayısı',
          ru: 'Количество контактов',
          de: 'Polzahl',
        },
        value: { en: '7', tr: '7', ru: '7', de: '7' },
      },
      {
        label: {
          en: 'Plug type',
          tr: 'Fiş tipi',
          ru: 'Тип вилки',
          de: 'Steckertyp',
        },
        value: { en: 'S-type', tr: 'S tipi', ru: 'Тип S', de: 'S-Typ' },
      },
      {
        label: {
          en: 'Terminals',
          tr: 'Terminal',
          ru: 'Клеммы',
          de: 'Anschlussklemmen',
        },
        value: {
          en: 'Screw terminals',
          tr: 'Vidalı terminal',
          ru: 'Винтовые клеммы',
          de: 'Schraubklemmen',
        },
      },
      {
        label: {
          en: 'Material',
          tr: 'Malzeme',
          ru: 'Материал',
          de: 'Material',
        },
        value: {
          en: 'Aluminium',
          tr: 'Alüminyum',
          ru: 'Алюминий',
          de: 'Aluminium',
        },
      },
      {
        label: { en: 'Cover', tr: 'Kapak', ru: 'Крышка', de: 'Deckel' },
        value: { en: 'Yes', tr: 'Var', ru: 'Есть', de: 'Ja' },
      },
      {
        label: { en: 'Color', tr: 'Renk', ru: 'Цвет', de: 'Farbe' },
        value: { en: 'White', tr: 'Beyaz', ru: 'Белый', de: 'Weiß' },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/cables/S080-04.jpg'],
  },
  {
    id: 'prod-r030-100',
    slug: 'r030-100-spiral-cable-24v-7p-aluminium-black-3m-4m',
    smrCode: 'R030-100',
    categoryId: 'cat-cables',
    subcategoryId: 'subcat-spiral-cable',
    title: {
      en: 'New Model 24V/7P Aluminium / Plastic Spiral Cable, Black N-Type Plug (3 m / 4 m)',
      tr: 'Yeni Model 24V/7P Alüminyum / Plastik Siyah N-Tipli Fişli Kablo (3 m / 4 m)',
      ru: 'Спиральный кабель 24 В/7 контактов, новая модель, вилка алюминий / пластик, чёрная, тип N (3 м / 4 м)',
      de: 'Spiralkabel 24 V/7-polig, Neues Modell, Stecker Aluminium / Kunststoff, schwarz, N-Typ (3 m / 4 m)',
    },
    description: {
      en: 'New model 24 V, 7-pin spiral (coiled) cable with black N-type aluminium / plastic plugs for the tractor–trailer connection. Polyurethane coil Ø40 mm, wire 6x1 mm + 1x1.5 mm. Length: 3 m / 4 m.',
      tr: 'Çekici-römork bağlantısı için siyah N tipi alüminyum / plastik fişli yeni model 24 V, 7 pinli spiral kablo. Poliüretan spiral Ø40 mm, tel 6x1 mm + 1x1,5 mm. Uzunluk: 3 m / 4 m.',
      ru: 'Спиральный кабель 24 В, 7 контактов, новая модель, с вилками типа N (чёрные, алюминий / пластик) для соединения тягача и прицепа. Спираль из полиуретана Ø40 мм, жилы 6x1 мм + 1x1,5 мм. Длина: 3 м / 4 м.',
      de: 'Spiralkabel 24 V, 7-polig, Neues Modell, mit schwarzen N-Typ-Steckern aus Aluminium / Kunststoff für die Verbindung zwischen Zugfahrzeug und Anhänger. Polyurethan-Spirale Ø40 mm, Adern 6x1 mm + 1x1,5 mm. Länge: 3 m / 4 m.',
    },
    specs: [
      {
        label: {
          en: 'Voltage',
          tr: 'Voltaj',
          ru: 'Напряжение',
          de: 'Spannung',
        },
        value: { en: '24 V', tr: '24 V', ru: '24 В', de: '24 V' },
      },
      {
        label: {
          en: 'Number of pins',
          tr: 'Pin sayısı',
          ru: 'Количество контактов',
          de: 'Polzahl',
        },
        value: { en: '7', tr: '7', ru: '7', de: '7' },
      },
      {
        label: {
          en: 'Plug type',
          tr: 'Fiş tipi',
          ru: 'Тип вилки',
          de: 'Steckertyp',
        },
        value: { en: 'N-type', tr: 'N tipi', ru: 'Тип N', de: 'N-Typ' },
      },
      {
        label: { en: 'Color', tr: 'Renk', ru: 'Цвет', de: 'Farbe' },
        value: { en: 'Black', tr: 'Siyah', ru: 'Чёрный', de: 'Schwarz' },
      },
      {
        label: {
          en: 'Cable length',
          tr: 'Kablo uzunluğu',
          ru: 'Длина кабеля',
          de: 'Kabellänge',
        },
        value: {
          en: '3 m / 4 m',
          tr: '3 m / 4 m',
          ru: '3 м / 4 м',
          de: '3 m / 4 m',
        },
      },
      {
        label: {
          en: 'Coil material',
          tr: 'Spiral malzemesi',
          ru: 'Материал спирали',
          de: 'Spiralenmaterial',
        },
        value: {
          en: 'Polyurethane',
          tr: 'Poliüretan',
          ru: 'Полиуретан',
          de: 'Polyurethan',
        },
      },
      {
        label: {
          en: 'Plug material',
          tr: 'Fiş malzemesi',
          ru: 'Материал вилки',
          de: 'Steckermaterial',
        },
        value: {
          en: 'Aluminium',
          tr: 'Alüminyum',
          ru: 'Алюминий',
          de: 'Aluminium',
        },
      },
      {
        label: {
          en: 'Coil diameter',
          tr: 'Spiral çapı',
          ru: 'Диаметр спирали',
          de: 'Spiralendurchmesser',
        },
        value: { en: '40 mm', tr: '40 mm', ru: '40 мм', de: '40 mm' },
      },
      {
        label: {
          en: 'Inner diameter',
          tr: 'İç çap',
          ru: 'Внутренний диаметр',
          de: 'Innendurchmesser',
        },
        value: { en: '20 mm', tr: '20 mm', ru: '20 мм', de: '20 mm' },
      },
      {
        label: {
          en: 'Wire cross-section',
          tr: 'Tel kesiti',
          ru: 'Сечение жил',
          de: 'Aderquerschnitt',
        },
        value: {
          en: '6x1 mm + 1x1.5 mm',
          tr: '6x1 mm + 1x1.5 mm',
          ru: '6x1 мм + 1x1.5 мм',
          de: '6x1 mm + 1x1.5 mm',
        },
      },
      {
        label: {
          en: 'Alternative SMR code',
          tr: 'Alternatif SMR kodu',
          ru: 'Альтернативный код SMR',
          de: 'Alternativer SMR-Code',
        },
        value: {
          en: 'R030-120',
          tr: 'R030-120',
          ru: 'R030-120',
          de: 'R030-120',
        },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/cables/R030-103.jpg'],
  },
  {
    id: 'prod-r030-101',
    slug: 'r030-101-spiral-cable-24v-7p-aluminium-black-3-5m-4-5m',
    smrCode: 'R030-101',
    categoryId: 'cat-cables',
    subcategoryId: 'subcat-spiral-cable',
    title: {
      en: 'New Model 24V/7P Aluminium / Plastic Spiral Cable, Black N-Type Plug (3.5 m / 4.5 m)',
      tr: 'Yeni Model 24V/7P Alüminyum / Plastik Siyah N-Tipli Fişli Kablo (3,5 m / 4,5 m)',
      ru: 'Спиральный кабель 24 В/7 контактов, новая модель, вилка алюминий / пластик, чёрная, тип N (3,5 м / 4,5 м)',
      de: 'Spiralkabel 24 V/7-polig, Neues Modell, Stecker Aluminium / Kunststoff, schwarz, N-Typ (3,5 m / 4,5 m)',
    },
    description: {
      en: 'New model 24 V, 7-pin spiral (coiled) cable with black N-type aluminium / plastic plugs for the tractor–trailer connection. Polyurethane coil Ø40 mm, wire 6x1 mm + 1x1.5 mm. Length: 3.5 m / 4.5 m.',
      tr: 'Çekici-römork bağlantısı için siyah N tipi alüminyum / plastik fişli yeni model 24 V, 7 pinli spiral kablo. Poliüretan spiral Ø40 mm, tel 6x1 mm + 1x1,5 mm. Uzunluk: 3,5 m / 4,5 m.',
      ru: 'Спиральный кабель 24 В, 7 контактов, новая модель, с вилками типа N (чёрные, алюминий / пластик) для соединения тягача и прицепа. Спираль из полиуретана Ø40 мм, жилы 6x1 мм + 1x1,5 мм. Длина: 3,5 м / 4,5 м.',
      de: 'Spiralkabel 24 V, 7-polig, Neues Modell, mit schwarzen N-Typ-Steckern aus Aluminium / Kunststoff für die Verbindung zwischen Zugfahrzeug und Anhänger. Polyurethan-Spirale Ø40 mm, Adern 6x1 mm + 1x1,5 mm. Länge: 3,5 m / 4,5 m.',
    },
    specs: [
      {
        label: {
          en: 'Voltage',
          tr: 'Voltaj',
          ru: 'Напряжение',
          de: 'Spannung',
        },
        value: { en: '24 V', tr: '24 V', ru: '24 В', de: '24 V' },
      },
      {
        label: {
          en: 'Number of pins',
          tr: 'Pin sayısı',
          ru: 'Количество контактов',
          de: 'Polzahl',
        },
        value: { en: '7', tr: '7', ru: '7', de: '7' },
      },
      {
        label: {
          en: 'Plug type',
          tr: 'Fiş tipi',
          ru: 'Тип вилки',
          de: 'Steckertyp',
        },
        value: { en: 'N-type', tr: 'N tipi', ru: 'Тип N', de: 'N-Typ' },
      },
      {
        label: { en: 'Color', tr: 'Renk', ru: 'Цвет', de: 'Farbe' },
        value: { en: 'Black', tr: 'Siyah', ru: 'Чёрный', de: 'Schwarz' },
      },
      {
        label: {
          en: 'Cable length',
          tr: 'Kablo uzunluğu',
          ru: 'Длина кабеля',
          de: 'Kabellänge',
        },
        value: {
          en: '3.5 m / 4.5 m',
          tr: '3,5 m / 4,5 m',
          ru: '3,5 м / 4,5 м',
          de: '3,5 m / 4,5 m',
        },
      },
      {
        label: {
          en: 'Coil material',
          tr: 'Spiral malzemesi',
          ru: 'Материал спирали',
          de: 'Spiralenmaterial',
        },
        value: {
          en: 'Polyurethane',
          tr: 'Poliüretan',
          ru: 'Полиуретан',
          de: 'Polyurethan',
        },
      },
      {
        label: {
          en: 'Plug material',
          tr: 'Fiş malzemesi',
          ru: 'Материал вилки',
          de: 'Steckermaterial',
        },
        value: {
          en: 'Aluminium',
          tr: 'Alüminyum',
          ru: 'Алюминий',
          de: 'Aluminium',
        },
      },
      {
        label: {
          en: 'Coil diameter',
          tr: 'Spiral çapı',
          ru: 'Диаметр спирали',
          de: 'Spiralendurchmesser',
        },
        value: { en: '40 mm', tr: '40 mm', ru: '40 мм', de: '40 mm' },
      },
      {
        label: {
          en: 'Inner diameter',
          tr: 'İç çap',
          ru: 'Внутренний диаметр',
          de: 'Innendurchmesser',
        },
        value: { en: '20 mm', tr: '20 mm', ru: '20 мм', de: '20 mm' },
      },
      {
        label: {
          en: 'Wire cross-section',
          tr: 'Tel kesiti',
          ru: 'Сечение жил',
          de: 'Aderquerschnitt',
        },
        value: {
          en: '6x1 mm + 1x1.5 mm',
          tr: '6x1 mm + 1x1.5 mm',
          ru: '6x1 мм + 1x1.5 мм',
          de: '6x1 mm + 1x1.5 mm',
        },
      },
      {
        label: {
          en: 'Alternative SMR code',
          tr: 'Alternatif SMR kodu',
          ru: 'Альтернативный код SMR',
          de: 'Alternativer SMR-Code',
        },
        value: {
          en: 'R030-121',
          tr: 'R030-121',
          ru: 'R030-121',
          de: 'R030-121',
        },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/cables/R030-103.jpg'],
  },
  {
    id: 'prod-r030-102',
    slug: 'r030-102-spiral-cable-24v-7p-aluminium-black-4m-5m',
    smrCode: 'R030-102',
    categoryId: 'cat-cables',
    subcategoryId: 'subcat-spiral-cable',
    title: {
      en: 'New Model 24V/7P Aluminium / Plastic Spiral Cable, Black N-Type Plug (4 m / 5 m)',
      tr: 'Yeni Model 24V/7P Alüminyum / Plastik Siyah N-Tipli Fişli Kablo (4 m / 5 m)',
      ru: 'Спиральный кабель 24 В/7 контактов, новая модель, вилка алюминий / пластик, чёрная, тип N (4 м / 5 м)',
      de: 'Spiralkabel 24 V/7-polig, Neues Modell, Stecker Aluminium / Kunststoff, schwarz, N-Typ (4 m / 5 m)',
    },
    description: {
      en: 'New model 24 V, 7-pin spiral (coiled) cable with black N-type aluminium / plastic plugs for the tractor–trailer connection. Polyurethane coil Ø40 mm, wire 6x1 mm + 1x1.5 mm. Length: 4 m / 5 m.',
      tr: 'Çekici-römork bağlantısı için siyah N tipi alüminyum / plastik fişli yeni model 24 V, 7 pinli spiral kablo. Poliüretan spiral Ø40 mm, tel 6x1 mm + 1x1,5 mm. Uzunluk: 4 m / 5 m.',
      ru: 'Спиральный кабель 24 В, 7 контактов, новая модель, с вилками типа N (чёрные, алюминий / пластик) для соединения тягача и прицепа. Спираль из полиуретана Ø40 мм, жилы 6x1 мм + 1x1,5 мм. Длина: 4 м / 5 м.',
      de: 'Spiralkabel 24 V, 7-polig, Neues Modell, mit schwarzen N-Typ-Steckern aus Aluminium / Kunststoff für die Verbindung zwischen Zugfahrzeug und Anhänger. Polyurethan-Spirale Ø40 mm, Adern 6x1 mm + 1x1,5 mm. Länge: 4 m / 5 m.',
    },
    specs: [
      {
        label: {
          en: 'Voltage',
          tr: 'Voltaj',
          ru: 'Напряжение',
          de: 'Spannung',
        },
        value: { en: '24 V', tr: '24 V', ru: '24 В', de: '24 V' },
      },
      {
        label: {
          en: 'Number of pins',
          tr: 'Pin sayısı',
          ru: 'Количество контактов',
          de: 'Polzahl',
        },
        value: { en: '7', tr: '7', ru: '7', de: '7' },
      },
      {
        label: {
          en: 'Plug type',
          tr: 'Fiş tipi',
          ru: 'Тип вилки',
          de: 'Steckertyp',
        },
        value: { en: 'N-type', tr: 'N tipi', ru: 'Тип N', de: 'N-Typ' },
      },
      {
        label: { en: 'Color', tr: 'Renk', ru: 'Цвет', de: 'Farbe' },
        value: { en: 'Black', tr: 'Siyah', ru: 'Чёрный', de: 'Schwarz' },
      },
      {
        label: {
          en: 'Cable length',
          tr: 'Kablo uzunluğu',
          ru: 'Длина кабеля',
          de: 'Kabellänge',
        },
        value: {
          en: '4 m / 5 m',
          tr: '4 m / 5 m',
          ru: '4 м / 5 м',
          de: '4 m / 5 m',
        },
      },
      {
        label: {
          en: 'Coil material',
          tr: 'Spiral malzemesi',
          ru: 'Материал спирали',
          de: 'Spiralenmaterial',
        },
        value: {
          en: 'Polyurethane',
          tr: 'Poliüretan',
          ru: 'Полиуретан',
          de: 'Polyurethan',
        },
      },
      {
        label: {
          en: 'Plug material',
          tr: 'Fiş malzemesi',
          ru: 'Материал вилки',
          de: 'Steckermaterial',
        },
        value: {
          en: 'Aluminium',
          tr: 'Alüminyum',
          ru: 'Алюминий',
          de: 'Aluminium',
        },
      },
      {
        label: {
          en: 'Coil diameter',
          tr: 'Spiral çapı',
          ru: 'Диаметр спирали',
          de: 'Spiralendurchmesser',
        },
        value: { en: '40 mm', tr: '40 mm', ru: '40 мм', de: '40 mm' },
      },
      {
        label: {
          en: 'Inner diameter',
          tr: 'İç çap',
          ru: 'Внутренний диаметр',
          de: 'Innendurchmesser',
        },
        value: { en: '20 mm', tr: '20 mm', ru: '20 мм', de: '20 mm' },
      },
      {
        label: {
          en: 'Wire cross-section',
          tr: 'Tel kesiti',
          ru: 'Сечение жил',
          de: 'Aderquerschnitt',
        },
        value: {
          en: '6x1 mm + 1x1.5 mm',
          tr: '6x1 mm + 1x1.5 mm',
          ru: '6x1 мм + 1x1.5 мм',
          de: '6x1 mm + 1x1.5 mm',
        },
      },
      {
        label: {
          en: 'Alternative SMR code',
          tr: 'Alternatif SMR kodu',
          ru: 'Альтернативный код SMR',
          de: 'Alternativer SMR-Code',
        },
        value: {
          en: 'R030-122',
          tr: 'R030-122',
          ru: 'R030-122',
          de: 'R030-122',
        },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/cables/R030-103.jpg'],
  },
  {
    id: 'prod-r030-103',
    slug: 'r030-103-spiral-cable-24v-7p-aluminium-black-4-5m-5-5m',
    smrCode: 'R030-103',
    categoryId: 'cat-cables',
    subcategoryId: 'subcat-spiral-cable',
    title: {
      en: 'New Model 24V/7P Aluminium / Plastic Spiral Cable, Black N-Type Plug (4.5 m / 5.5 m)',
      tr: 'Yeni Model 24V/7P Alüminyum / Plastik Siyah N-Tipli Fişli Kablo (4,5 m / 5,5 m)',
      ru: 'Спиральный кабель 24 В/7 контактов, новая модель, вилка алюминий / пластик, чёрная, тип N (4,5 м / 5,5 м)',
      de: 'Spiralkabel 24 V/7-polig, Neues Modell, Stecker Aluminium / Kunststoff, schwarz, N-Typ (4,5 m / 5,5 m)',
    },
    description: {
      en: 'New model 24 V, 7-pin spiral (coiled) cable with black N-type aluminium / plastic plugs for the tractor–trailer connection. Polyurethane coil Ø40 mm, wire 6x1 mm + 1x1.5 mm. Length: 4.5 m / 5.5 m.',
      tr: 'Çekici-römork bağlantısı için siyah N tipi alüminyum / plastik fişli yeni model 24 V, 7 pinli spiral kablo. Poliüretan spiral Ø40 mm, tel 6x1 mm + 1x1,5 mm. Uzunluk: 4,5 m / 5,5 m.',
      ru: 'Спиральный кабель 24 В, 7 контактов, новая модель, с вилками типа N (чёрные, алюминий / пластик) для соединения тягача и прицепа. Спираль из полиуретана Ø40 мм, жилы 6x1 мм + 1x1,5 мм. Длина: 4,5 м / 5,5 м.',
      de: 'Spiralkabel 24 V, 7-polig, Neues Modell, mit schwarzen N-Typ-Steckern aus Aluminium / Kunststoff für die Verbindung zwischen Zugfahrzeug und Anhänger. Polyurethan-Spirale Ø40 mm, Adern 6x1 mm + 1x1,5 mm. Länge: 4,5 m / 5,5 m.',
    },
    specs: [
      {
        label: {
          en: 'Voltage',
          tr: 'Voltaj',
          ru: 'Напряжение',
          de: 'Spannung',
        },
        value: { en: '24 V', tr: '24 V', ru: '24 В', de: '24 V' },
      },
      {
        label: {
          en: 'Number of pins',
          tr: 'Pin sayısı',
          ru: 'Количество контактов',
          de: 'Polzahl',
        },
        value: { en: '7', tr: '7', ru: '7', de: '7' },
      },
      {
        label: {
          en: 'Plug type',
          tr: 'Fiş tipi',
          ru: 'Тип вилки',
          de: 'Steckertyp',
        },
        value: { en: 'N-type', tr: 'N tipi', ru: 'Тип N', de: 'N-Typ' },
      },
      {
        label: { en: 'Color', tr: 'Renk', ru: 'Цвет', de: 'Farbe' },
        value: { en: 'Black', tr: 'Siyah', ru: 'Чёрный', de: 'Schwarz' },
      },
      {
        label: {
          en: 'Cable length',
          tr: 'Kablo uzunluğu',
          ru: 'Длина кабеля',
          de: 'Kabellänge',
        },
        value: {
          en: '4.5 m / 5.5 m',
          tr: '4,5 m / 5,5 m',
          ru: '4,5 м / 5,5 м',
          de: '4,5 m / 5,5 m',
        },
      },
      {
        label: {
          en: 'Coil material',
          tr: 'Spiral malzemesi',
          ru: 'Материал спирали',
          de: 'Spiralenmaterial',
        },
        value: {
          en: 'Polyurethane',
          tr: 'Poliüretan',
          ru: 'Полиуретан',
          de: 'Polyurethan',
        },
      },
      {
        label: {
          en: 'Plug material',
          tr: 'Fiş malzemesi',
          ru: 'Материал вилки',
          de: 'Steckermaterial',
        },
        value: {
          en: 'Aluminium',
          tr: 'Alüminyum',
          ru: 'Алюминий',
          de: 'Aluminium',
        },
      },
      {
        label: {
          en: 'Coil diameter',
          tr: 'Spiral çapı',
          ru: 'Диаметр спирали',
          de: 'Spiralendurchmesser',
        },
        value: { en: '40 mm', tr: '40 mm', ru: '40 мм', de: '40 mm' },
      },
      {
        label: {
          en: 'Inner diameter',
          tr: 'İç çap',
          ru: 'Внутренний диаметр',
          de: 'Innendurchmesser',
        },
        value: { en: '20 mm', tr: '20 mm', ru: '20 мм', de: '20 mm' },
      },
      {
        label: {
          en: 'Wire cross-section',
          tr: 'Tel kesiti',
          ru: 'Сечение жил',
          de: 'Aderquerschnitt',
        },
        value: {
          en: '6x1 mm + 1x1.5 mm',
          tr: '6x1 mm + 1x1.5 mm',
          ru: '6x1 мм + 1x1.5 мм',
          de: '6x1 mm + 1x1.5 mm',
        },
      },
      {
        label: {
          en: 'Alternative SMR code',
          tr: 'Alternatif SMR kodu',
          ru: 'Альтернативный код SMR',
          de: 'Alternativer SMR-Code',
        },
        value: {
          en: 'R030-123',
          tr: 'R030-123',
          ru: 'R030-123',
          de: 'R030-123',
        },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/cables/R030-103.jpg'],
  },
  {
    id: 'prod-r030-110',
    slug: 'r030-110-spiral-cable-24v-7p-aluminium-white-3m-4m',
    smrCode: 'R030-110',
    categoryId: 'cat-cables',
    subcategoryId: 'subcat-spiral-cable',
    title: {
      en: 'New Model 24V/7P Aluminium / Plastic Spiral Cable, White S-Type Plug (3 m / 4 m)',
      tr: 'Yeni Model 24V/7P Alüminyum / Plastik Beyaz S-Tipli Fişli Kablo (3 m / 4 m)',
      ru: 'Спиральный кабель 24 В/7 контактов, новая модель, вилка алюминий / пластик, белая, тип S (3 м / 4 м)',
      de: 'Spiralkabel 24 V/7-polig, Neues Modell, Stecker Aluminium / Kunststoff, weiß, S-Typ (3 m / 4 m)',
    },
    description: {
      en: 'New model 24 V, 7-pin spiral (coiled) cable with white S-type aluminium / plastic plugs for the tractor–trailer connection. Polyurethane coil Ø40 mm, wire 6x1 mm + 1x1.5 mm. Length: 3 m / 4 m.',
      tr: 'Çekici-römork bağlantısı için beyaz S tipi alüminyum / plastik fişli yeni model 24 V, 7 pinli spiral kablo. Poliüretan spiral Ø40 mm, tel 6x1 mm + 1x1,5 mm. Uzunluk: 3 m / 4 m.',
      ru: 'Спиральный кабель 24 В, 7 контактов, новая модель, с вилками типа S (белые, алюминий / пластик) для соединения тягача и прицепа. Спираль из полиуретана Ø40 мм, жилы 6x1 мм + 1x1,5 мм. Длина: 3 м / 4 м.',
      de: 'Spiralkabel 24 V, 7-polig, Neues Modell, mit weißen S-Typ-Steckern aus Aluminium / Kunststoff für die Verbindung zwischen Zugfahrzeug und Anhänger. Polyurethan-Spirale Ø40 mm, Adern 6x1 mm + 1x1,5 mm. Länge: 3 m / 4 m.',
    },
    specs: [
      {
        label: {
          en: 'Voltage',
          tr: 'Voltaj',
          ru: 'Напряжение',
          de: 'Spannung',
        },
        value: { en: '24 V', tr: '24 V', ru: '24 В', de: '24 V' },
      },
      {
        label: {
          en: 'Number of pins',
          tr: 'Pin sayısı',
          ru: 'Количество контактов',
          de: 'Polzahl',
        },
        value: { en: '7', tr: '7', ru: '7', de: '7' },
      },
      {
        label: {
          en: 'Plug type',
          tr: 'Fiş tipi',
          ru: 'Тип вилки',
          de: 'Steckertyp',
        },
        value: { en: 'S-type', tr: 'S tipi', ru: 'Тип S', de: 'S-Typ' },
      },
      {
        label: { en: 'Color', tr: 'Renk', ru: 'Цвет', de: 'Farbe' },
        value: { en: 'White', tr: 'Beyaz', ru: 'Белый', de: 'Weiß' },
      },
      {
        label: {
          en: 'Cable length',
          tr: 'Kablo uzunluğu',
          ru: 'Длина кабеля',
          de: 'Kabellänge',
        },
        value: {
          en: '3 m / 4 m',
          tr: '3 m / 4 m',
          ru: '3 м / 4 м',
          de: '3 m / 4 m',
        },
      },
      {
        label: {
          en: 'Coil material',
          tr: 'Spiral malzemesi',
          ru: 'Материал спирали',
          de: 'Spiralenmaterial',
        },
        value: {
          en: 'Polyurethane',
          tr: 'Poliüretan',
          ru: 'Полиуретан',
          de: 'Polyurethan',
        },
      },
      {
        label: {
          en: 'Plug material',
          tr: 'Fiş malzemesi',
          ru: 'Материал вилки',
          de: 'Steckermaterial',
        },
        value: {
          en: 'Aluminium',
          tr: 'Alüminyum',
          ru: 'Алюминий',
          de: 'Aluminium',
        },
      },
      {
        label: {
          en: 'Coil diameter',
          tr: 'Spiral çapı',
          ru: 'Диаметр спирали',
          de: 'Spiralendurchmesser',
        },
        value: { en: '40 mm', tr: '40 mm', ru: '40 мм', de: '40 mm' },
      },
      {
        label: {
          en: 'Inner diameter',
          tr: 'İç çap',
          ru: 'Внутренний диаметр',
          de: 'Innendurchmesser',
        },
        value: { en: '20 mm', tr: '20 mm', ru: '20 мм', de: '20 mm' },
      },
      {
        label: {
          en: 'Wire cross-section',
          tr: 'Tel kesiti',
          ru: 'Сечение жил',
          de: 'Aderquerschnitt',
        },
        value: {
          en: '6x1 mm + 1x1.5 mm',
          tr: '6x1 mm + 1x1.5 mm',
          ru: '6x1 мм + 1x1.5 мм',
          de: '6x1 mm + 1x1.5 mm',
        },
      },
      {
        label: {
          en: 'Alternative SMR code',
          tr: 'Alternatif SMR kodu',
          ru: 'Альтернативный код SMR',
          de: 'Alternativer SMR-Code',
        },
        value: {
          en: 'R030-130',
          tr: 'R030-130',
          ru: 'R030-130',
          de: 'R030-130',
        },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/cables/R030-113.jpg'],
  },
  {
    id: 'prod-r030-111',
    slug: 'r030-111-spiral-cable-24v-7p-aluminium-white-3-5m-4-5m',
    smrCode: 'R030-111',
    categoryId: 'cat-cables',
    subcategoryId: 'subcat-spiral-cable',
    title: {
      en: 'New Model 24V/7P Aluminium / Plastic Spiral Cable, White S-Type Plug (3.5 m / 4.5 m)',
      tr: 'Yeni Model 24V/7P Alüminyum / Plastik Beyaz S-Tipli Fişli Kablo (3,5 m / 4,5 m)',
      ru: 'Спиральный кабель 24 В/7 контактов, новая модель, вилка алюминий / пластик, белая, тип S (3,5 м / 4,5 м)',
      de: 'Spiralkabel 24 V/7-polig, Neues Modell, Stecker Aluminium / Kunststoff, weiß, S-Typ (3,5 m / 4,5 m)',
    },
    description: {
      en: 'New model 24 V, 7-pin spiral (coiled) cable with white S-type aluminium / plastic plugs for the tractor–trailer connection. Polyurethane coil Ø40 mm, wire 6x1 mm + 1x1.5 mm. Length: 3.5 m / 4.5 m.',
      tr: 'Çekici-römork bağlantısı için beyaz S tipi alüminyum / plastik fişli yeni model 24 V, 7 pinli spiral kablo. Poliüretan spiral Ø40 mm, tel 6x1 mm + 1x1,5 mm. Uzunluk: 3,5 m / 4,5 m.',
      ru: 'Спиральный кабель 24 В, 7 контактов, новая модель, с вилками типа S (белые, алюминий / пластик) для соединения тягача и прицепа. Спираль из полиуретана Ø40 мм, жилы 6x1 мм + 1x1,5 мм. Длина: 3,5 м / 4,5 м.',
      de: 'Spiralkabel 24 V, 7-polig, Neues Modell, mit weißen S-Typ-Steckern aus Aluminium / Kunststoff für die Verbindung zwischen Zugfahrzeug und Anhänger. Polyurethan-Spirale Ø40 mm, Adern 6x1 mm + 1x1,5 mm. Länge: 3,5 m / 4,5 m.',
    },
    specs: [
      {
        label: {
          en: 'Voltage',
          tr: 'Voltaj',
          ru: 'Напряжение',
          de: 'Spannung',
        },
        value: { en: '24 V', tr: '24 V', ru: '24 В', de: '24 V' },
      },
      {
        label: {
          en: 'Number of pins',
          tr: 'Pin sayısı',
          ru: 'Количество контактов',
          de: 'Polzahl',
        },
        value: { en: '7', tr: '7', ru: '7', de: '7' },
      },
      {
        label: {
          en: 'Plug type',
          tr: 'Fiş tipi',
          ru: 'Тип вилки',
          de: 'Steckertyp',
        },
        value: { en: 'S-type', tr: 'S tipi', ru: 'Тип S', de: 'S-Typ' },
      },
      {
        label: { en: 'Color', tr: 'Renk', ru: 'Цвет', de: 'Farbe' },
        value: { en: 'White', tr: 'Beyaz', ru: 'Белый', de: 'Weiß' },
      },
      {
        label: {
          en: 'Cable length',
          tr: 'Kablo uzunluğu',
          ru: 'Длина кабеля',
          de: 'Kabellänge',
        },
        value: {
          en: '3.5 m / 4.5 m',
          tr: '3,5 m / 4,5 m',
          ru: '3,5 м / 4,5 м',
          de: '3,5 m / 4,5 m',
        },
      },
      {
        label: {
          en: 'Coil material',
          tr: 'Spiral malzemesi',
          ru: 'Материал спирали',
          de: 'Spiralenmaterial',
        },
        value: {
          en: 'Polyurethane',
          tr: 'Poliüretan',
          ru: 'Полиуретан',
          de: 'Polyurethan',
        },
      },
      {
        label: {
          en: 'Plug material',
          tr: 'Fiş malzemesi',
          ru: 'Материал вилки',
          de: 'Steckermaterial',
        },
        value: {
          en: 'Aluminium',
          tr: 'Alüminyum',
          ru: 'Алюминий',
          de: 'Aluminium',
        },
      },
      {
        label: {
          en: 'Coil diameter',
          tr: 'Spiral çapı',
          ru: 'Диаметр спирали',
          de: 'Spiralendurchmesser',
        },
        value: { en: '40 mm', tr: '40 mm', ru: '40 мм', de: '40 mm' },
      },
      {
        label: {
          en: 'Inner diameter',
          tr: 'İç çap',
          ru: 'Внутренний диаметр',
          de: 'Innendurchmesser',
        },
        value: { en: '20 mm', tr: '20 mm', ru: '20 мм', de: '20 mm' },
      },
      {
        label: {
          en: 'Wire cross-section',
          tr: 'Tel kesiti',
          ru: 'Сечение жил',
          de: 'Aderquerschnitt',
        },
        value: {
          en: '6x1 mm + 1x1.5 mm',
          tr: '6x1 mm + 1x1.5 mm',
          ru: '6x1 мм + 1x1.5 мм',
          de: '6x1 mm + 1x1.5 mm',
        },
      },
      {
        label: {
          en: 'Alternative SMR code',
          tr: 'Alternatif SMR kodu',
          ru: 'Альтернативный код SMR',
          de: 'Alternativer SMR-Code',
        },
        value: {
          en: 'R030-131',
          tr: 'R030-131',
          ru: 'R030-131',
          de: 'R030-131',
        },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/cables/R030-113.jpg'],
  },
  {
    id: 'prod-r030-112',
    slug: 'r030-112-spiral-cable-24v-7p-aluminium-white-4m-5m',
    smrCode: 'R030-112',
    categoryId: 'cat-cables',
    subcategoryId: 'subcat-spiral-cable',
    title: {
      en: 'New Model 24V/7P Aluminium / Plastic Spiral Cable, White S-Type Plug (4 m / 5 m)',
      tr: 'Yeni Model 24V/7P Alüminyum / Plastik Beyaz S-Tipli Fişli Kablo (4 m / 5 m)',
      ru: 'Спиральный кабель 24 В/7 контактов, новая модель, вилка алюминий / пластик, белая, тип S (4 м / 5 м)',
      de: 'Spiralkabel 24 V/7-polig, Neues Modell, Stecker Aluminium / Kunststoff, weiß, S-Typ (4 m / 5 m)',
    },
    description: {
      en: 'New model 24 V, 7-pin spiral (coiled) cable with white S-type aluminium / plastic plugs for the tractor–trailer connection. Polyurethane coil Ø40 mm, wire 6x1 mm + 1x1.5 mm. Length: 4 m / 5 m.',
      tr: 'Çekici-römork bağlantısı için beyaz S tipi alüminyum / plastik fişli yeni model 24 V, 7 pinli spiral kablo. Poliüretan spiral Ø40 mm, tel 6x1 mm + 1x1,5 mm. Uzunluk: 4 m / 5 m.',
      ru: 'Спиральный кабель 24 В, 7 контактов, новая модель, с вилками типа S (белые, алюминий / пластик) для соединения тягача и прицепа. Спираль из полиуретана Ø40 мм, жилы 6x1 мм + 1x1,5 мм. Длина: 4 м / 5 м.',
      de: 'Spiralkabel 24 V, 7-polig, Neues Modell, mit weißen S-Typ-Steckern aus Aluminium / Kunststoff für die Verbindung zwischen Zugfahrzeug und Anhänger. Polyurethan-Spirale Ø40 mm, Adern 6x1 mm + 1x1,5 mm. Länge: 4 m / 5 m.',
    },
    specs: [
      {
        label: {
          en: 'Voltage',
          tr: 'Voltaj',
          ru: 'Напряжение',
          de: 'Spannung',
        },
        value: { en: '24 V', tr: '24 V', ru: '24 В', de: '24 V' },
      },
      {
        label: {
          en: 'Number of pins',
          tr: 'Pin sayısı',
          ru: 'Количество контактов',
          de: 'Polzahl',
        },
        value: { en: '7', tr: '7', ru: '7', de: '7' },
      },
      {
        label: {
          en: 'Plug type',
          tr: 'Fiş tipi',
          ru: 'Тип вилки',
          de: 'Steckertyp',
        },
        value: { en: 'S-type', tr: 'S tipi', ru: 'Тип S', de: 'S-Typ' },
      },
      {
        label: { en: 'Color', tr: 'Renk', ru: 'Цвет', de: 'Farbe' },
        value: { en: 'White', tr: 'Beyaz', ru: 'Белый', de: 'Weiß' },
      },
      {
        label: {
          en: 'Cable length',
          tr: 'Kablo uzunluğu',
          ru: 'Длина кабеля',
          de: 'Kabellänge',
        },
        value: {
          en: '4 m / 5 m',
          tr: '4 m / 5 m',
          ru: '4 м / 5 м',
          de: '4 m / 5 m',
        },
      },
      {
        label: {
          en: 'Coil material',
          tr: 'Spiral malzemesi',
          ru: 'Материал спирали',
          de: 'Spiralenmaterial',
        },
        value: {
          en: 'Polyurethane',
          tr: 'Poliüretan',
          ru: 'Полиуретан',
          de: 'Polyurethan',
        },
      },
      {
        label: {
          en: 'Plug material',
          tr: 'Fiş malzemesi',
          ru: 'Материал вилки',
          de: 'Steckermaterial',
        },
        value: {
          en: 'Aluminium',
          tr: 'Alüminyum',
          ru: 'Алюминий',
          de: 'Aluminium',
        },
      },
      {
        label: {
          en: 'Coil diameter',
          tr: 'Spiral çapı',
          ru: 'Диаметр спирали',
          de: 'Spiralendurchmesser',
        },
        value: { en: '40 mm', tr: '40 mm', ru: '40 мм', de: '40 mm' },
      },
      {
        label: {
          en: 'Inner diameter',
          tr: 'İç çap',
          ru: 'Внутренний диаметр',
          de: 'Innendurchmesser',
        },
        value: { en: '20 mm', tr: '20 mm', ru: '20 мм', de: '20 mm' },
      },
      {
        label: {
          en: 'Wire cross-section',
          tr: 'Tel kesiti',
          ru: 'Сечение жил',
          de: 'Aderquerschnitt',
        },
        value: {
          en: '6x1 mm + 1x1.5 mm',
          tr: '6x1 mm + 1x1.5 mm',
          ru: '6x1 мм + 1x1.5 мм',
          de: '6x1 mm + 1x1.5 mm',
        },
      },
      {
        label: {
          en: 'Alternative SMR code',
          tr: 'Alternatif SMR kodu',
          ru: 'Альтернативный код SMR',
          de: 'Alternativer SMR-Code',
        },
        value: {
          en: 'R030-132',
          tr: 'R030-132',
          ru: 'R030-132',
          de: 'R030-132',
        },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/cables/R030-113.jpg'],
  },
  {
    id: 'prod-r030-113',
    slug: 'r030-113-spiral-cable-24v-7p-aluminium-white-4-5m-5-5m',
    smrCode: 'R030-113',
    categoryId: 'cat-cables',
    subcategoryId: 'subcat-spiral-cable',
    title: {
      en: 'New Model 24V/7P Aluminium / Plastic Spiral Cable, White S-Type Plug (4.5 m / 5.5 m)',
      tr: 'Yeni Model 24V/7P Alüminyum / Plastik Beyaz S-Tipli Fişli Kablo (4,5 m / 5,5 m)',
      ru: 'Спиральный кабель 24 В/7 контактов, новая модель, вилка алюминий / пластик, белая, тип S (4,5 м / 5,5 м)',
      de: 'Spiralkabel 24 V/7-polig, Neues Modell, Stecker Aluminium / Kunststoff, weiß, S-Typ (4,5 m / 5,5 m)',
    },
    description: {
      en: 'New model 24 V, 7-pin spiral (coiled) cable with white S-type aluminium / plastic plugs for the tractor–trailer connection. Polyurethane coil Ø40 mm, wire 6x1 mm + 1x1.5 mm. Length: 4.5 m / 5.5 m.',
      tr: 'Çekici-römork bağlantısı için beyaz S tipi alüminyum / plastik fişli yeni model 24 V, 7 pinli spiral kablo. Poliüretan spiral Ø40 mm, tel 6x1 mm + 1x1,5 mm. Uzunluk: 4,5 m / 5,5 m.',
      ru: 'Спиральный кабель 24 В, 7 контактов, новая модель, с вилками типа S (белые, алюминий / пластик) для соединения тягача и прицепа. Спираль из полиуретана Ø40 мм, жилы 6x1 мм + 1x1,5 мм. Длина: 4,5 м / 5,5 м.',
      de: 'Spiralkabel 24 V, 7-polig, Neues Modell, mit weißen S-Typ-Steckern aus Aluminium / Kunststoff für die Verbindung zwischen Zugfahrzeug und Anhänger. Polyurethan-Spirale Ø40 mm, Adern 6x1 mm + 1x1,5 mm. Länge: 4,5 m / 5,5 m.',
    },
    specs: [
      {
        label: {
          en: 'Voltage',
          tr: 'Voltaj',
          ru: 'Напряжение',
          de: 'Spannung',
        },
        value: { en: '24 V', tr: '24 V', ru: '24 В', de: '24 V' },
      },
      {
        label: {
          en: 'Number of pins',
          tr: 'Pin sayısı',
          ru: 'Количество контактов',
          de: 'Polzahl',
        },
        value: { en: '7', tr: '7', ru: '7', de: '7' },
      },
      {
        label: {
          en: 'Plug type',
          tr: 'Fiş tipi',
          ru: 'Тип вилки',
          de: 'Steckertyp',
        },
        value: { en: 'S-type', tr: 'S tipi', ru: 'Тип S', de: 'S-Typ' },
      },
      {
        label: { en: 'Color', tr: 'Renk', ru: 'Цвет', de: 'Farbe' },
        value: { en: 'White', tr: 'Beyaz', ru: 'Белый', de: 'Weiß' },
      },
      {
        label: {
          en: 'Cable length',
          tr: 'Kablo uzunluğu',
          ru: 'Длина кабеля',
          de: 'Kabellänge',
        },
        value: {
          en: '4.5 m / 5.5 m',
          tr: '4,5 m / 5,5 m',
          ru: '4,5 м / 5,5 м',
          de: '4,5 m / 5,5 m',
        },
      },
      {
        label: {
          en: 'Coil material',
          tr: 'Spiral malzemesi',
          ru: 'Материал спирали',
          de: 'Spiralenmaterial',
        },
        value: {
          en: 'Polyurethane',
          tr: 'Poliüretan',
          ru: 'Полиуретан',
          de: 'Polyurethan',
        },
      },
      {
        label: {
          en: 'Plug material',
          tr: 'Fiş malzemesi',
          ru: 'Материал вилки',
          de: 'Steckermaterial',
        },
        value: {
          en: 'Aluminium',
          tr: 'Alüminyum',
          ru: 'Алюминий',
          de: 'Aluminium',
        },
      },
      {
        label: {
          en: 'Coil diameter',
          tr: 'Spiral çapı',
          ru: 'Диаметр спирали',
          de: 'Spiralendurchmesser',
        },
        value: { en: '40 mm', tr: '40 mm', ru: '40 мм', de: '40 mm' },
      },
      {
        label: {
          en: 'Inner diameter',
          tr: 'İç çap',
          ru: 'Внутренний диаметр',
          de: 'Innendurchmesser',
        },
        value: { en: '20 mm', tr: '20 mm', ru: '20 мм', de: '20 mm' },
      },
      {
        label: {
          en: 'Wire cross-section',
          tr: 'Tel kesiti',
          ru: 'Сечение жил',
          de: 'Aderquerschnitt',
        },
        value: {
          en: '6x1 mm + 1x1.5 mm',
          tr: '6x1 mm + 1x1.5 mm',
          ru: '6x1 мм + 1x1.5 мм',
          de: '6x1 mm + 1x1.5 mm',
        },
      },
      {
        label: {
          en: 'Alternative SMR code',
          tr: 'Alternatif SMR kodu',
          ru: 'Альтернативный код SMR',
          de: 'Alternativer SMR-Code',
        },
        value: {
          en: 'R030-133',
          tr: 'R030-133',
          ru: 'R030-133',
          de: 'R030-133',
        },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/cables/R030-113.jpg'],
  },
  {
    id: 'prod-r030-142',
    slug: 'r030-142-electric-cable-12v-n-type-mn-5m',
    smrCode: 'R030-142',
    categoryId: 'cat-cables',
    subcategoryId: 'subcat-spiral-cable',
    title: {
      en: '12V Electric Cable – N-Type (MN System) (5 m)',
      tr: '12V Elektrik Kablosu - N Tipi (MN System) (5 m)',
      ru: 'Электрический кабель 12 В — тип N (система MN) (5 м)',
      de: '12-V-Elektrokabel – N-Typ (MN-System) (5 m)',
    },
    description: {
      en: '12 V electric cable with N-type plug (MN system) for trailer connections. Length: 5 m.',
      tr: 'Römork bağlantıları için N tipi fişli 12 V elektrik kablosu (MN System). Uzunluk: 5 m.',
      ru: 'Электрический кабель 12 В с вилкой типа N (система MN) для подключения прицепа. Длина: 5 м.',
      de: '12-V-Elektrokabel mit N-Typ-Stecker (MN-System) für Anhängerverbindungen. Länge: 5 m.',
    },
    specs: [
      {
        label: {
          en: 'Voltage',
          tr: 'Voltaj',
          ru: 'Напряжение',
          de: 'Spannung',
        },
        value: { en: '12 V', tr: '12 V', ru: '12 В', de: '12 V' },
      },
      {
        label: {
          en: 'Plug type',
          tr: 'Fiş tipi',
          ru: 'Тип вилки',
          de: 'Steckertyp',
        },
        value: { en: 'N-type', tr: 'N tipi', ru: 'Тип N', de: 'N-Typ' },
      },
      {
        label: { en: 'Type', tr: 'Tip', ru: 'Тип', de: 'Typ' },
        value: {
          en: 'MN System',
          tr: 'MN System',
          ru: 'Система MN',
          de: 'MN-System',
        },
      },
      {
        label: {
          en: 'Cable length',
          tr: 'Kablo uzunluğu',
          ru: 'Длина кабеля',
          de: 'Kabellänge',
        },
        value: { en: '5 m', tr: '5 m', ru: '5 м', de: '5 m' },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/placeholder.png'],
  },
  {
    id: 'prod-r030-143',
    slug: 'r030-143-electric-cable-12v-n-type-mn-5-5m',
    smrCode: 'R030-143',
    categoryId: 'cat-cables',
    subcategoryId: 'subcat-spiral-cable',
    title: {
      en: '12V Electric Cable – N-Type (MN System) (5.5 m)',
      tr: '12V Elektrik Kablosu - N Tipi (MN System) (5,5 m)',
      ru: 'Электрический кабель 12 В — тип N (система MN) (5,5 м)',
      de: '12-V-Elektrokabel – N-Typ (MN-System) (5,5 m)',
    },
    description: {
      en: '12 V electric cable with N-type plug (MN system) for trailer connections. Length: 5.5 m.',
      tr: 'Römork bağlantıları için N tipi fişli 12 V elektrik kablosu (MN System). Uzunluk: 5,5 m.',
      ru: 'Электрический кабель 12 В с вилкой типа N (система MN) для подключения прицепа. Длина: 5,5 м.',
      de: '12-V-Elektrokabel mit N-Typ-Stecker (MN-System) für Anhängerverbindungen. Länge: 5,5 m.',
    },
    specs: [
      {
        label: {
          en: 'Voltage',
          tr: 'Voltaj',
          ru: 'Напряжение',
          de: 'Spannung',
        },
        value: { en: '12 V', tr: '12 V', ru: '12 В', de: '12 V' },
      },
      {
        label: {
          en: 'Plug type',
          tr: 'Fiş tipi',
          ru: 'Тип вилки',
          de: 'Steckertyp',
        },
        value: { en: 'N-type', tr: 'N tipi', ru: 'Тип N', de: 'N-Typ' },
      },
      {
        label: { en: 'Type', tr: 'Tip', ru: 'Тип', de: 'Typ' },
        value: {
          en: 'MN System',
          tr: 'MN System',
          ru: 'Система MN',
          de: 'MN-System',
        },
      },
      {
        label: {
          en: 'Cable length',
          tr: 'Kablo uzunluğu',
          ru: 'Длина кабеля',
          de: 'Kabellänge',
        },
        value: { en: '5.5 m', tr: '5,5 m', ru: '5,5 м', de: '5,5 m' },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/placeholder.png'],
  },
  {
    id: 'prod-r030-170',
    slug: 'r030-170-spiral-cable-ebs-24v-7p-3m-4m',
    smrCode: 'R030-170',
    categoryId: 'cat-cables',
    subcategoryId: 'subcat-abs-ebs-cable',
    title: {
      en: 'New Model 24V/7P EBS Spiral Cable (3 m / 4 m)',
      tr: 'Yeni Model 24V/7P EBS Kablo (3 m / 4 m)',
      ru: 'Спиральный кабель EBS 24 В/7 контактов, новая модель (3 м / 4 м)',
      de: 'EBS-Spiralkabel 24 V/7-polig, Neues Modell (3 m / 4 m)',
    },
    description: {
      en: 'New model 24 V, 7-pin EBS spiral (coiled) cable for the tractor–trailer connection. Polyurethane coil Ø45 mm, wire 5x1.5 mm + 2x2.5 mm. Length: 3 m / 4 m.',
      tr: 'Çekici-römork bağlantısı için yeni model 24 V, 7 pinli EBS spiral kablo. Poliüretan spiral Ø45 mm, tel 5x1,5 mm + 2x2,5 mm. Uzunluk: 3 m / 4 m.',
      ru: 'Спиральный кабель EBS 24 В, 7 контактов, новая модель, для соединения тягача и прицепа. Спираль из полиуретана Ø45 мм, жилы 5x1,5 мм + 2x2,5 мм. Длина: 3 м / 4 м.',
      de: 'EBS-Spiralkabel 24 V, 7-polig, Neues Modell, für die Verbindung zwischen Zugfahrzeug und Anhänger. Polyurethan-Spirale Ø45 mm, Adern 5x1,5 mm + 2x2,5 mm. Länge: 3 m / 4 m.',
    },
    specs: [
      {
        label: {
          en: 'Voltage',
          tr: 'Voltaj',
          ru: 'Напряжение',
          de: 'Spannung',
        },
        value: { en: '24 V', tr: '24 V', ru: '24 В', de: '24 V' },
      },
      {
        label: {
          en: 'Number of pins',
          tr: 'Pin sayısı',
          ru: 'Количество контактов',
          de: 'Polzahl',
        },
        value: { en: '7', tr: '7', ru: '7', de: '7' },
      },
      {
        label: { en: 'Type', tr: 'Tip', ru: 'Тип', de: 'Typ' },
        value: { en: 'EBS', tr: 'EBS', ru: 'EBS', de: 'EBS' },
      },
      {
        label: {
          en: 'Cable length',
          tr: 'Kablo uzunluğu',
          ru: 'Длина кабеля',
          de: 'Kabellänge',
        },
        value: {
          en: '3 m / 4 m',
          tr: '3 m / 4 m',
          ru: '3 м / 4 м',
          de: '3 m / 4 m',
        },
      },
      {
        label: {
          en: 'Coil material',
          tr: 'Spiral malzemesi',
          ru: 'Материал спирали',
          de: 'Spiralenmaterial',
        },
        value: {
          en: 'Polyurethane',
          tr: 'Poliüretan',
          ru: 'Полиуретан',
          de: 'Polyurethan',
        },
      },
      {
        label: {
          en: 'Coil diameter',
          tr: 'Spiral çapı',
          ru: 'Диаметр спирали',
          de: 'Spiralendurchmesser',
        },
        value: { en: '45 mm', tr: '45 mm', ru: '45 мм', de: '45 mm' },
      },
      {
        label: {
          en: 'Inner diameter',
          tr: 'İç çap',
          ru: 'Внутренний диаметр',
          de: 'Innendurchmesser',
        },
        value: { en: '20 mm', tr: '20 mm', ru: '20 мм', de: '20 mm' },
      },
      {
        label: {
          en: 'Wire cross-section',
          tr: 'Tel kesiti',
          ru: 'Сечение жил',
          de: 'Aderquerschnitt',
        },
        value: {
          en: '5x1.5 mm + 2x2.5 mm',
          tr: '5x1.5 mm + 2x2.5 mm',
          ru: '5x1.5 мм + 2x2.5 мм',
          de: '5x1.5 mm + 2x2.5 mm',
        },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/cables/R030-170.jpg'],
  },
  {
    id: 'prod-r030-171',
    slug: 'r030-171-spiral-cable-ebs-24v-7p-3-5m-4-5m',
    smrCode: 'R030-171',
    categoryId: 'cat-cables',
    subcategoryId: 'subcat-abs-ebs-cable',
    title: {
      en: 'New Model 24V/7P EBS Spiral Cable (3.5 m / 4.5 m)',
      tr: 'Yeni Model 24V/7P EBS Kablo (3,5 m / 4,5 m)',
      ru: 'Спиральный кабель EBS 24 В/7 контактов, новая модель (3,5 м / 4,5 м)',
      de: 'EBS-Spiralkabel 24 V/7-polig, Neues Modell (3,5 m / 4,5 m)',
    },
    description: {
      en: 'New model 24 V, 7-pin EBS spiral (coiled) cable for the tractor–trailer connection. Polyurethane coil Ø45 mm, wire 5x1.5 mm + 2x2.5 mm. Length: 3.5 m / 4.5 m.',
      tr: 'Çekici-römork bağlantısı için yeni model 24 V, 7 pinli EBS spiral kablo. Poliüretan spiral Ø45 mm, tel 5x1,5 mm + 2x2,5 mm. Uzunluk: 3,5 m / 4,5 m.',
      ru: 'Спиральный кабель EBS 24 В, 7 контактов, новая модель, для соединения тягача и прицепа. Спираль из полиуретана Ø45 мм, жилы 5x1,5 мм + 2x2,5 мм. Длина: 3,5 м / 4,5 м.',
      de: 'EBS-Spiralkabel 24 V, 7-polig, Neues Modell, für die Verbindung zwischen Zugfahrzeug und Anhänger. Polyurethan-Spirale Ø45 mm, Adern 5x1,5 mm + 2x2,5 mm. Länge: 3,5 m / 4,5 m.',
    },
    specs: [
      {
        label: {
          en: 'Voltage',
          tr: 'Voltaj',
          ru: 'Напряжение',
          de: 'Spannung',
        },
        value: { en: '24 V', tr: '24 V', ru: '24 В', de: '24 V' },
      },
      {
        label: {
          en: 'Number of pins',
          tr: 'Pin sayısı',
          ru: 'Количество контактов',
          de: 'Polzahl',
        },
        value: { en: '7', tr: '7', ru: '7', de: '7' },
      },
      {
        label: { en: 'Type', tr: 'Tip', ru: 'Тип', de: 'Typ' },
        value: { en: 'EBS', tr: 'EBS', ru: 'EBS', de: 'EBS' },
      },
      {
        label: {
          en: 'Cable length',
          tr: 'Kablo uzunluğu',
          ru: 'Длина кабеля',
          de: 'Kabellänge',
        },
        value: {
          en: '3.5 m / 4.5 m',
          tr: '3,5 m / 4,5 m',
          ru: '3,5 м / 4,5 м',
          de: '3,5 m / 4,5 m',
        },
      },
      {
        label: {
          en: 'Coil material',
          tr: 'Spiral malzemesi',
          ru: 'Материал спирали',
          de: 'Spiralenmaterial',
        },
        value: {
          en: 'Polyurethane',
          tr: 'Poliüretan',
          ru: 'Полиуретан',
          de: 'Polyurethan',
        },
      },
      {
        label: {
          en: 'Coil diameter',
          tr: 'Spiral çapı',
          ru: 'Диаметр спирали',
          de: 'Spiralendurchmesser',
        },
        value: { en: '45 mm', tr: '45 mm', ru: '45 мм', de: '45 mm' },
      },
      {
        label: {
          en: 'Inner diameter',
          tr: 'İç çap',
          ru: 'Внутренний диаметр',
          de: 'Innendurchmesser',
        },
        value: { en: '20 mm', tr: '20 mm', ru: '20 мм', de: '20 mm' },
      },
      {
        label: {
          en: 'Wire cross-section',
          tr: 'Tel kesiti',
          ru: 'Сечение жил',
          de: 'Aderquerschnitt',
        },
        value: {
          en: '5x1.5 mm + 2x2.5 mm',
          tr: '5x1.5 mm + 2x2.5 mm',
          ru: '5x1.5 мм + 2x2.5 мм',
          de: '5x1.5 mm + 2x2.5 mm',
        },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/cables/R030-170.jpg'],
  },
  {
    id: 'prod-r030-172',
    slug: 'r030-172-spiral-cable-ebs-24v-7p-4m-5m',
    smrCode: 'R030-172',
    categoryId: 'cat-cables',
    subcategoryId: 'subcat-abs-ebs-cable',
    title: {
      en: 'New Model 24V/7P EBS Spiral Cable (4 m / 5 m)',
      tr: 'Yeni Model 24V/7P EBS Kablo (4 m / 5 m)',
      ru: 'Спиральный кабель EBS 24 В/7 контактов, новая модель (4 м / 5 м)',
      de: 'EBS-Spiralkabel 24 V/7-polig, Neues Modell (4 m / 5 m)',
    },
    description: {
      en: 'New model 24 V, 7-pin EBS spiral (coiled) cable for the tractor–trailer connection. Polyurethane coil Ø45 mm, wire 5x1.5 mm + 2x2.5 mm. Length: 4 m / 5 m.',
      tr: 'Çekici-römork bağlantısı için yeni model 24 V, 7 pinli EBS spiral kablo. Poliüretan spiral Ø45 mm, tel 5x1,5 mm + 2x2,5 mm. Uzunluk: 4 m / 5 m.',
      ru: 'Спиральный кабель EBS 24 В, 7 контактов, новая модель, для соединения тягача и прицепа. Спираль из полиуретана Ø45 мм, жилы 5x1,5 мм + 2x2,5 мм. Длина: 4 м / 5 м.',
      de: 'EBS-Spiralkabel 24 V, 7-polig, Neues Modell, für die Verbindung zwischen Zugfahrzeug und Anhänger. Polyurethan-Spirale Ø45 mm, Adern 5x1,5 mm + 2x2,5 mm. Länge: 4 m / 5 m.',
    },
    specs: [
      {
        label: {
          en: 'Voltage',
          tr: 'Voltaj',
          ru: 'Напряжение',
          de: 'Spannung',
        },
        value: { en: '24 V', tr: '24 V', ru: '24 В', de: '24 V' },
      },
      {
        label: {
          en: 'Number of pins',
          tr: 'Pin sayısı',
          ru: 'Количество контактов',
          de: 'Polzahl',
        },
        value: { en: '7', tr: '7', ru: '7', de: '7' },
      },
      {
        label: { en: 'Type', tr: 'Tip', ru: 'Тип', de: 'Typ' },
        value: { en: 'EBS', tr: 'EBS', ru: 'EBS', de: 'EBS' },
      },
      {
        label: {
          en: 'Cable length',
          tr: 'Kablo uzunluğu',
          ru: 'Длина кабеля',
          de: 'Kabellänge',
        },
        value: {
          en: '4 m / 5 m',
          tr: '4 m / 5 m',
          ru: '4 м / 5 м',
          de: '4 m / 5 m',
        },
      },
      {
        label: {
          en: 'Coil material',
          tr: 'Spiral malzemesi',
          ru: 'Материал спирали',
          de: 'Spiralenmaterial',
        },
        value: {
          en: 'Polyurethane',
          tr: 'Poliüretan',
          ru: 'Полиуретан',
          de: 'Polyurethan',
        },
      },
      {
        label: {
          en: 'Coil diameter',
          tr: 'Spiral çapı',
          ru: 'Диаметр спирали',
          de: 'Spiralendurchmesser',
        },
        value: { en: '45 mm', tr: '45 mm', ru: '45 мм', de: '45 mm' },
      },
      {
        label: {
          en: 'Inner diameter',
          tr: 'İç çap',
          ru: 'Внутренний диаметр',
          de: 'Innendurchmesser',
        },
        value: { en: '20 mm', tr: '20 mm', ru: '20 мм', de: '20 mm' },
      },
      {
        label: {
          en: 'Wire cross-section',
          tr: 'Tel kesiti',
          ru: 'Сечение жил',
          de: 'Aderquerschnitt',
        },
        value: {
          en: '5x1.5 mm + 2x2.5 mm',
          tr: '5x1.5 mm + 2x2.5 mm',
          ru: '5x1.5 мм + 2x2.5 мм',
          de: '5x1.5 mm + 2x2.5 mm',
        },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/cables/R030-170.jpg'],
  },
  {
    id: 'prod-r030-173',
    slug: 'r030-173-spiral-cable-ebs-24v-7p-4-5m-5-5m',
    smrCode: 'R030-173',
    categoryId: 'cat-cables',
    subcategoryId: 'subcat-abs-ebs-cable',
    title: {
      en: 'New Model 24V/7P EBS Spiral Cable (4.5 m / 5.5 m)',
      tr: 'Yeni Model 24V/7P EBS Kablo (4,5 m / 5,5 m)',
      ru: 'Спиральный кабель EBS 24 В/7 контактов, новая модель (4,5 м / 5,5 м)',
      de: 'EBS-Spiralkabel 24 V/7-polig, Neues Modell (4,5 m / 5,5 m)',
    },
    description: {
      en: 'New model 24 V, 7-pin EBS spiral (coiled) cable for the tractor–trailer connection. Polyurethane coil Ø45 mm, wire 5x1.5 mm + 2x2.5 mm. Length: 4.5 m / 5.5 m.',
      tr: 'Çekici-römork bağlantısı için yeni model 24 V, 7 pinli EBS spiral kablo. Poliüretan spiral Ø45 mm, tel 5x1,5 mm + 2x2,5 mm. Uzunluk: 4,5 m / 5,5 m.',
      ru: 'Спиральный кабель EBS 24 В, 7 контактов, новая модель, для соединения тягача и прицепа. Спираль из полиуретана Ø45 мм, жилы 5x1,5 мм + 2x2,5 мм. Длина: 4,5 м / 5,5 м.',
      de: 'EBS-Spiralkabel 24 V, 7-polig, Neues Modell, für die Verbindung zwischen Zugfahrzeug und Anhänger. Polyurethan-Spirale Ø45 mm, Adern 5x1,5 mm + 2x2,5 mm. Länge: 4,5 m / 5,5 m.',
    },
    specs: [
      {
        label: {
          en: 'Voltage',
          tr: 'Voltaj',
          ru: 'Напряжение',
          de: 'Spannung',
        },
        value: { en: '24 V', tr: '24 V', ru: '24 В', de: '24 V' },
      },
      {
        label: {
          en: 'Number of pins',
          tr: 'Pin sayısı',
          ru: 'Количество контактов',
          de: 'Polzahl',
        },
        value: { en: '7', tr: '7', ru: '7', de: '7' },
      },
      {
        label: { en: 'Type', tr: 'Tip', ru: 'Тип', de: 'Typ' },
        value: { en: 'EBS', tr: 'EBS', ru: 'EBS', de: 'EBS' },
      },
      {
        label: {
          en: 'Cable length',
          tr: 'Kablo uzunluğu',
          ru: 'Длина кабеля',
          de: 'Kabellänge',
        },
        value: {
          en: '4.5 m / 5.5 m',
          tr: '4,5 m / 5,5 m',
          ru: '4,5 м / 5,5 м',
          de: '4,5 m / 5,5 m',
        },
      },
      {
        label: {
          en: 'Coil material',
          tr: 'Spiral malzemesi',
          ru: 'Материал спирали',
          de: 'Spiralenmaterial',
        },
        value: {
          en: 'Polyurethane',
          tr: 'Poliüretan',
          ru: 'Полиуретан',
          de: 'Polyurethan',
        },
      },
      {
        label: {
          en: 'Coil diameter',
          tr: 'Spiral çapı',
          ru: 'Диаметр спирали',
          de: 'Spiralendurchmesser',
        },
        value: { en: '45 mm', tr: '45 mm', ru: '45 мм', de: '45 mm' },
      },
      {
        label: {
          en: 'Inner diameter',
          tr: 'İç çap',
          ru: 'Внутренний диаметр',
          de: 'Innendurchmesser',
        },
        value: { en: '20 mm', tr: '20 mm', ru: '20 мм', de: '20 mm' },
      },
      {
        label: {
          en: 'Wire cross-section',
          tr: 'Tel kesiti',
          ru: 'Сечение жил',
          de: 'Aderquerschnitt',
        },
        value: {
          en: '5x1.5 mm + 2x2.5 mm',
          tr: '5x1.5 mm + 2x2.5 mm',
          ru: '5x1.5 мм + 2x2.5 мм',
          de: '5x1.5 mm + 2x2.5 mm',
        },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/cables/R030-170.jpg'],
  },
  {
    id: 'prod-r030-180',
    slug: 'r030-180-spiral-cable-abs-24v-15p-3m-4m',
    smrCode: 'R030-180',
    categoryId: 'cat-cables',
    subcategoryId: 'subcat-abs-ebs-cable',
    title: {
      en: 'New Model 24V/15P ABS Spiral Cable (3 m / 4 m)',
      tr: 'Yeni Model 24V/15P ABS Kablo (3 m / 4 m)',
      ru: 'Спиральный кабель ABS 24 В/15 контактов, новая модель (3 м / 4 м)',
      de: 'ABS-Spiralkabel 24 V/15-polig, Neues Modell (3 m / 4 m)',
    },
    description: {
      en: 'New model 24 V, 15-pin ABS spiral (coiled) cable for the tractor–trailer connection. Polyurethane coil Ø65 mm, wire 12x1.5 mm + 3x2.5 mm. Length: 3 m / 4 m.',
      tr: 'Çekici-römork bağlantısı için yeni model 24 V, 15 pinli ABS spiral kablo. Poliüretan spiral Ø65 mm, tel 12x1,5 mm + 3x2,5 mm. Uzunluk: 3 m / 4 m.',
      ru: 'Спиральный кабель ABS 24 В, 15 контактов, новая модель, для соединения тягача и прицепа. Спираль из полиуретана Ø65 мм, жилы 12x1,5 мм + 3x2,5 мм. Длина: 3 м / 4 м.',
      de: 'ABS-Spiralkabel 24 V, 15-polig, Neues Modell, für die Verbindung zwischen Zugfahrzeug und Anhänger. Polyurethan-Spirale Ø65 mm, Adern 12x1,5 mm + 3x2,5 mm. Länge: 3 m / 4 m.',
    },
    specs: [
      {
        label: {
          en: 'Voltage',
          tr: 'Voltaj',
          ru: 'Напряжение',
          de: 'Spannung',
        },
        value: { en: '24 V', tr: '24 V', ru: '24 В', de: '24 V' },
      },
      {
        label: {
          en: 'Number of pins',
          tr: 'Pin sayısı',
          ru: 'Количество контактов',
          de: 'Polzahl',
        },
        value: { en: '15', tr: '15', ru: '15', de: '15' },
      },
      {
        label: { en: 'Type', tr: 'Tip', ru: 'Тип', de: 'Typ' },
        value: { en: 'ABS', tr: 'ABS', ru: 'ABS', de: 'ABS' },
      },
      {
        label: {
          en: 'Cable length',
          tr: 'Kablo uzunluğu',
          ru: 'Длина кабеля',
          de: 'Kabellänge',
        },
        value: {
          en: '3 m / 4 m',
          tr: '3 m / 4 m',
          ru: '3 м / 4 м',
          de: '3 m / 4 m',
        },
      },
      {
        label: {
          en: 'Coil material',
          tr: 'Spiral malzemesi',
          ru: 'Материал спирали',
          de: 'Spiralenmaterial',
        },
        value: {
          en: 'Polyurethane',
          tr: 'Poliüretan',
          ru: 'Полиуретан',
          de: 'Polyurethan',
        },
      },
      {
        label: {
          en: 'Coil diameter',
          tr: 'Spiral çapı',
          ru: 'Диаметр спирали',
          de: 'Spiralendurchmesser',
        },
        value: { en: '65 mm', tr: '65 mm', ru: '65 мм', de: '65 mm' },
      },
      {
        label: {
          en: 'Inner diameter',
          tr: 'İç çap',
          ru: 'Внутренний диаметр',
          de: 'Innendurchmesser',
        },
        value: { en: '30 mm', tr: '30 mm', ru: '30 мм', de: '30 mm' },
      },
      {
        label: {
          en: 'Wire cross-section',
          tr: 'Tel kesiti',
          ru: 'Сечение жил',
          de: 'Aderquerschnitt',
        },
        value: {
          en: '12x1.5 mm + 3x2.5 mm',
          tr: '12x1.5 mm + 3x2.5 mm',
          ru: '12x1.5 мм + 3x2.5 мм',
          de: '12x1.5 mm + 3x2.5 mm',
        },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/cables/R030-180.jpg'],
  },
  {
    id: 'prod-r030-181',
    slug: 'r030-181-spiral-cable-abs-24v-15p-3-5m-4-5m',
    smrCode: 'R030-181',
    categoryId: 'cat-cables',
    subcategoryId: 'subcat-abs-ebs-cable',
    title: {
      en: 'New Model 24V/15P ABS Spiral Cable (3.5 m / 4.5 m)',
      tr: 'Yeni Model 24V/15P ABS Kablo (3,5 m / 4,5 m)',
      ru: 'Спиральный кабель ABS 24 В/15 контактов, новая модель (3,5 м / 4,5 м)',
      de: 'ABS-Spiralkabel 24 V/15-polig, Neues Modell (3,5 m / 4,5 m)',
    },
    description: {
      en: 'New model 24 V, 15-pin ABS spiral (coiled) cable for the tractor–trailer connection. Polyurethane coil Ø65 mm, wire 12x1.5 mm + 3x2.5 mm. Length: 3.5 m / 4.5 m.',
      tr: 'Çekici-römork bağlantısı için yeni model 24 V, 15 pinli ABS spiral kablo. Poliüretan spiral Ø65 mm, tel 12x1,5 mm + 3x2,5 mm. Uzunluk: 3,5 m / 4,5 m.',
      ru: 'Спиральный кабель ABS 24 В, 15 контактов, новая модель, для соединения тягача и прицепа. Спираль из полиуретана Ø65 мм, жилы 12x1,5 мм + 3x2,5 мм. Длина: 3,5 м / 4,5 м.',
      de: 'ABS-Spiralkabel 24 V, 15-polig, Neues Modell, für die Verbindung zwischen Zugfahrzeug und Anhänger. Polyurethan-Spirale Ø65 mm, Adern 12x1,5 mm + 3x2,5 mm. Länge: 3,5 m / 4,5 m.',
    },
    specs: [
      {
        label: {
          en: 'Voltage',
          tr: 'Voltaj',
          ru: 'Напряжение',
          de: 'Spannung',
        },
        value: { en: '24 V', tr: '24 V', ru: '24 В', de: '24 V' },
      },
      {
        label: {
          en: 'Number of pins',
          tr: 'Pin sayısı',
          ru: 'Количество контактов',
          de: 'Polzahl',
        },
        value: { en: '15', tr: '15', ru: '15', de: '15' },
      },
      {
        label: { en: 'Type', tr: 'Tip', ru: 'Тип', de: 'Typ' },
        value: { en: 'ABS', tr: 'ABS', ru: 'ABS', de: 'ABS' },
      },
      {
        label: {
          en: 'Cable length',
          tr: 'Kablo uzunluğu',
          ru: 'Длина кабеля',
          de: 'Kabellänge',
        },
        value: {
          en: '3.5 m / 4.5 m',
          tr: '3,5 m / 4,5 m',
          ru: '3,5 м / 4,5 м',
          de: '3,5 m / 4,5 m',
        },
      },
      {
        label: {
          en: 'Coil material',
          tr: 'Spiral malzemesi',
          ru: 'Материал спирали',
          de: 'Spiralenmaterial',
        },
        value: {
          en: 'Polyurethane',
          tr: 'Poliüretan',
          ru: 'Полиуретан',
          de: 'Polyurethan',
        },
      },
      {
        label: {
          en: 'Coil diameter',
          tr: 'Spiral çapı',
          ru: 'Диаметр спирали',
          de: 'Spiralendurchmesser',
        },
        value: { en: '65 mm', tr: '65 mm', ru: '65 мм', de: '65 mm' },
      },
      {
        label: {
          en: 'Inner diameter',
          tr: 'İç çap',
          ru: 'Внутренний диаметр',
          de: 'Innendurchmesser',
        },
        value: { en: '30 mm', tr: '30 mm', ru: '30 мм', de: '30 mm' },
      },
      {
        label: {
          en: 'Wire cross-section',
          tr: 'Tel kesiti',
          ru: 'Сечение жил',
          de: 'Aderquerschnitt',
        },
        value: {
          en: '12x1.5 mm + 3x2.5 mm',
          tr: '12x1.5 mm + 3x2.5 mm',
          ru: '12x1.5 мм + 3x2.5 мм',
          de: '12x1.5 mm + 3x2.5 mm',
        },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/cables/R030-180.jpg'],
  },
  {
    id: 'prod-r030-182',
    slug: 'r030-182-spiral-cable-abs-24v-15p-4m-5m',
    smrCode: 'R030-182',
    categoryId: 'cat-cables',
    subcategoryId: 'subcat-abs-ebs-cable',
    title: {
      en: 'New Model 24V/15P ABS Spiral Cable (4 m / 5 m)',
      tr: 'Yeni Model 24V/15P ABS Kablo (4 m / 5 m)',
      ru: 'Спиральный кабель ABS 24 В/15 контактов, новая модель (4 м / 5 м)',
      de: 'ABS-Spiralkabel 24 V/15-polig, Neues Modell (4 m / 5 m)',
    },
    description: {
      en: 'New model 24 V, 15-pin ABS spiral (coiled) cable for the tractor–trailer connection. Polyurethane coil Ø65 mm, wire 12x1.5 mm + 3x2.5 mm. Length: 4 m / 5 m.',
      tr: 'Çekici-römork bağlantısı için yeni model 24 V, 15 pinli ABS spiral kablo. Poliüretan spiral Ø65 mm, tel 12x1,5 mm + 3x2,5 mm. Uzunluk: 4 m / 5 m.',
      ru: 'Спиральный кабель ABS 24 В, 15 контактов, новая модель, для соединения тягача и прицепа. Спираль из полиуретана Ø65 мм, жилы 12x1,5 мм + 3x2,5 мм. Длина: 4 м / 5 м.',
      de: 'ABS-Spiralkabel 24 V, 15-polig, Neues Modell, für die Verbindung zwischen Zugfahrzeug und Anhänger. Polyurethan-Spirale Ø65 mm, Adern 12x1,5 mm + 3x2,5 mm. Länge: 4 m / 5 m.',
    },
    specs: [
      {
        label: {
          en: 'Voltage',
          tr: 'Voltaj',
          ru: 'Напряжение',
          de: 'Spannung',
        },
        value: { en: '24 V', tr: '24 V', ru: '24 В', de: '24 V' },
      },
      {
        label: {
          en: 'Number of pins',
          tr: 'Pin sayısı',
          ru: 'Количество контактов',
          de: 'Polzahl',
        },
        value: { en: '15', tr: '15', ru: '15', de: '15' },
      },
      {
        label: { en: 'Type', tr: 'Tip', ru: 'Тип', de: 'Typ' },
        value: { en: 'ABS', tr: 'ABS', ru: 'ABS', de: 'ABS' },
      },
      {
        label: {
          en: 'Cable length',
          tr: 'Kablo uzunluğu',
          ru: 'Длина кабеля',
          de: 'Kabellänge',
        },
        value: {
          en: '4 m / 5 m',
          tr: '4 m / 5 m',
          ru: '4 м / 5 м',
          de: '4 m / 5 m',
        },
      },
      {
        label: {
          en: 'Coil material',
          tr: 'Spiral malzemesi',
          ru: 'Материал спирали',
          de: 'Spiralenmaterial',
        },
        value: {
          en: 'Polyurethane',
          tr: 'Poliüretan',
          ru: 'Полиуретан',
          de: 'Polyurethan',
        },
      },
      {
        label: {
          en: 'Coil diameter',
          tr: 'Spiral çapı',
          ru: 'Диаметр спирали',
          de: 'Spiralendurchmesser',
        },
        value: { en: '65 mm', tr: '65 mm', ru: '65 мм', de: '65 mm' },
      },
      {
        label: {
          en: 'Inner diameter',
          tr: 'İç çap',
          ru: 'Внутренний диаметр',
          de: 'Innendurchmesser',
        },
        value: { en: '30 mm', tr: '30 mm', ru: '30 мм', de: '30 mm' },
      },
      {
        label: {
          en: 'Wire cross-section',
          tr: 'Tel kesiti',
          ru: 'Сечение жил',
          de: 'Aderquerschnitt',
        },
        value: {
          en: '12x1.5 mm + 3x2.5 mm',
          tr: '12x1.5 mm + 3x2.5 mm',
          ru: '12x1.5 мм + 3x2.5 мм',
          de: '12x1.5 mm + 3x2.5 mm',
        },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/cables/R030-180.jpg'],
  },
  {
    id: 'prod-r030-183',
    slug: 'r030-183-spiral-cable-abs-24v-15p-4-5m-5-5m',
    smrCode: 'R030-183',
    categoryId: 'cat-cables',
    subcategoryId: 'subcat-abs-ebs-cable',
    title: {
      en: 'New Model 24V/15P ABS Spiral Cable (4.5 m / 5.5 m)',
      tr: 'Yeni Model 24V/15P ABS Kablo (4,5 m / 5,5 m)',
      ru: 'Спиральный кабель ABS 24 В/15 контактов, новая модель (4,5 м / 5,5 м)',
      de: 'ABS-Spiralkabel 24 V/15-polig, Neues Modell (4,5 m / 5,5 m)',
    },
    description: {
      en: 'New model 24 V, 15-pin ABS spiral (coiled) cable for the tractor–trailer connection. Polyurethane coil Ø65 mm, wire 12x1.5 mm + 3x2.5 mm. Length: 4.5 m / 5.5 m.',
      tr: 'Çekici-römork bağlantısı için yeni model 24 V, 15 pinli ABS spiral kablo. Poliüretan spiral Ø65 mm, tel 12x1,5 mm + 3x2,5 mm. Uzunluk: 4,5 m / 5,5 m.',
      ru: 'Спиральный кабель ABS 24 В, 15 контактов, новая модель, для соединения тягача и прицепа. Спираль из полиуретана Ø65 мм, жилы 12x1,5 мм + 3x2,5 мм. Длина: 4,5 м / 5,5 м.',
      de: 'ABS-Spiralkabel 24 V, 15-polig, Neues Modell, für die Verbindung zwischen Zugfahrzeug und Anhänger. Polyurethan-Spirale Ø65 mm, Adern 12x1,5 mm + 3x2,5 mm. Länge: 4,5 m / 5,5 m.',
    },
    specs: [
      {
        label: {
          en: 'Voltage',
          tr: 'Voltaj',
          ru: 'Напряжение',
          de: 'Spannung',
        },
        value: { en: '24 V', tr: '24 V', ru: '24 В', de: '24 V' },
      },
      {
        label: {
          en: 'Number of pins',
          tr: 'Pin sayısı',
          ru: 'Количество контактов',
          de: 'Polzahl',
        },
        value: { en: '15', tr: '15', ru: '15', de: '15' },
      },
      {
        label: { en: 'Type', tr: 'Tip', ru: 'Тип', de: 'Typ' },
        value: { en: 'ABS', tr: 'ABS', ru: 'ABS', de: 'ABS' },
      },
      {
        label: {
          en: 'Cable length',
          tr: 'Kablo uzunluğu',
          ru: 'Длина кабеля',
          de: 'Kabellänge',
        },
        value: {
          en: '4.5 m / 5.5 m',
          tr: '4,5 m / 5,5 m',
          ru: '4,5 м / 5,5 м',
          de: '4,5 m / 5,5 m',
        },
      },
      {
        label: {
          en: 'Coil material',
          tr: 'Spiral malzemesi',
          ru: 'Материал спирали',
          de: 'Spiralenmaterial',
        },
        value: {
          en: 'Polyurethane',
          tr: 'Poliüretan',
          ru: 'Полиуретан',
          de: 'Polyurethan',
        },
      },
      {
        label: {
          en: 'Coil diameter',
          tr: 'Spiral çapı',
          ru: 'Диаметр спирали',
          de: 'Spiralendurchmesser',
        },
        value: { en: '65 mm', tr: '65 mm', ru: '65 мм', de: '65 mm' },
      },
      {
        label: {
          en: 'Inner diameter',
          tr: 'İç çap',
          ru: 'Внутренний диаметр',
          de: 'Innendurchmesser',
        },
        value: { en: '30 mm', tr: '30 mm', ru: '30 мм', de: '30 mm' },
      },
      {
        label: {
          en: 'Wire cross-section',
          tr: 'Tel kesiti',
          ru: 'Сечение жил',
          de: 'Aderquerschnitt',
        },
        value: {
          en: '12x1.5 mm + 3x2.5 mm',
          tr: '12x1.5 mm + 3x2.5 mm',
          ru: '12x1.5 мм + 3x2.5 мм',
          de: '12x1.5 mm + 3x2.5 mm',
        },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/cables/R030-180.jpg'],
  },
  {
    id: 'prod-r030-190p',
    slug: 'r030-190p-adapter-cable-plastic-3m-4m',
    smrCode: 'R030-190P',
    categoryId: 'cat-cables',
    subcategoryId: 'subcat-spiral-cable',
    title: {
      en: 'New Model Adapter Cable, Plastic / Injection-Moulded Plugs, Black – White (3 m / 4 m)',
      tr: 'Yeni Model Adaptör Kablo Plastik / Enjeksiyon Baskılı Fişli Siyah - Beyaz (3 m / 4 m)',
      ru: 'Адаптерный кабель, новая модель, вилки пластик / литая под давлением, чёрный — белый (3 м / 4 м)',
      de: 'Adapterkabel Neues Modell, Stecker Kunststoff / Spritzguss, Schwarz – Weiß (3 m / 4 m)',
    },
    description: {
      en: 'New model adapter cable with plastic / injection-moulded plugs in black or white for trailer electrical connections. Length: 3 m / 4 m.',
      tr: 'Römork elektrik bağlantıları için siyah veya beyaz, plastik / enjeksiyon baskılı fişli yeni model adaptör kablo. Uzunluk: 3 m / 4 m.',
      ru: 'Адаптерный кабель новой модели с вилками (пластик / литая под давлением) чёрного или белого цвета для электрических соединений прицепа. Длина: 3 м / 4 м.',
      de: 'Adapterkabel Neues Modell mit Steckern (Kunststoff / Spritzguss) in Schwarz oder Weiß für elektrische Anhängerverbindungen. Länge: 3 m / 4 m.',
    },
    specs: [
      {
        label: {
          en: 'Cable length',
          tr: 'Kablo uzunluğu',
          ru: 'Длина кабеля',
          de: 'Kabellänge',
        },
        value: {
          en: '3 m / 4 m',
          tr: '3 m / 4 m',
          ru: '3 м / 4 м',
          de: '3 m / 4 m',
        },
      },
      {
        label: {
          en: 'Plug variants',
          tr: 'Fiş versiyonları',
          ru: 'Варианты вилки',
          de: 'Steckervarianten',
        },
        value: {
          en: 'P: plastic plug; PM: injection-moulded plug',
          tr: 'P: plastik fiş; PM: enjeksiyon baskılı fiş',
          ru: 'P: пластиковая вилка; PM: литая вилка',
          de: 'P: Kunststoffstecker; PM: Spritzgussstecker',
        },
      },
      {
        label: { en: 'Color', tr: 'Renk', ru: 'Цвет', de: 'Farbe' },
        value: {
          en: 'Black – White',
          tr: 'Siyah - Beyaz',
          ru: 'Чёрный — белый',
          de: 'Schwarz – Weiß',
        },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/cables/R030-190PM.jpg'],
  },
  {
    id: 'prod-r030-191p',
    slug: 'r030-191p-adapter-cable-plastic-3-5m-4-5m',
    smrCode: 'R030-191P',
    categoryId: 'cat-cables',
    subcategoryId: 'subcat-spiral-cable',
    title: {
      en: 'New Model Adapter Cable, Plastic / Injection-Moulded Plugs, Black – White (3.5 m / 4.5 m)',
      tr: 'Yeni Model Adaptör Kablo Plastik / Enjeksiyon Baskılı Fişli Siyah - Beyaz (3,5 m / 4,5 m)',
      ru: 'Адаптерный кабель, новая модель, вилки пластик / литая под давлением, чёрный — белый (3,5 м / 4,5 м)',
      de: 'Adapterkabel Neues Modell, Stecker Kunststoff / Spritzguss, Schwarz – Weiß (3,5 m / 4,5 m)',
    },
    description: {
      en: 'New model adapter cable with plastic / injection-moulded plugs in black or white for trailer electrical connections. Length: 3.5 m / 4.5 m.',
      tr: 'Römork elektrik bağlantıları için siyah veya beyaz, plastik / enjeksiyon baskılı fişli yeni model adaptör kablo. Uzunluk: 3,5 m / 4,5 m.',
      ru: 'Адаптерный кабель новой модели с вилками (пластик / литая под давлением) чёрного или белого цвета для электрических соединений прицепа. Длина: 3,5 м / 4,5 м.',
      de: 'Adapterkabel Neues Modell mit Steckern (Kunststoff / Spritzguss) in Schwarz oder Weiß für elektrische Anhängerverbindungen. Länge: 3,5 m / 4,5 m.',
    },
    specs: [
      {
        label: {
          en: 'Cable length',
          tr: 'Kablo uzunluğu',
          ru: 'Длина кабеля',
          de: 'Kabellänge',
        },
        value: {
          en: '3.5 m / 4.5 m',
          tr: '3,5 m / 4,5 m',
          ru: '3,5 м / 4,5 м',
          de: '3,5 m / 4,5 m',
        },
      },
      {
        label: {
          en: 'Plug variants',
          tr: 'Fiş versiyonları',
          ru: 'Варианты вилки',
          de: 'Steckervarianten',
        },
        value: {
          en: 'P: plastic plug; PM: injection-moulded plug',
          tr: 'P: plastik fiş; PM: enjeksiyon baskılı fiş',
          ru: 'P: пластиковая вилка; PM: литая вилка',
          de: 'P: Kunststoffstecker; PM: Spritzgussstecker',
        },
      },
      {
        label: { en: 'Color', tr: 'Renk', ru: 'Цвет', de: 'Farbe' },
        value: {
          en: 'Black – White',
          tr: 'Siyah - Beyaz',
          ru: 'Чёрный — белый',
          de: 'Schwarz – Weiß',
        },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/cables/R030-190PM.jpg'],
  },
  {
    id: 'prod-r030-192ma',
    slug: 'r030-192ma-adapter-cable-metal-plastic-5m',
    smrCode: 'R030-192MA',
    categoryId: 'cat-cables',
    subcategoryId: 'subcat-spiral-cable',
    title: {
      en: 'New Model Adapter Cable, Metal / Plastic / Injection-Moulded Plugs, Black – White (5 m)',
      tr: 'Yeni Model Adaptör Kablo Metal / Plastik / Enjeksiyon Baskılı Fişli Siyah - Beyaz (5 m)',
      ru: 'Адаптерный кабель, новая модель, вилки металл / пластик / литая под давлением, чёрный — белый (5 м)',
      de: 'Adapterkabel Neues Modell, Stecker Metall / Kunststoff / Spritzguss, Schwarz – Weiß (5 m)',
    },
    description: {
      en: 'New model adapter cable with metal / plastic / injection-moulded plugs in black or white for trailer electrical connections. Length: 5 m.',
      tr: 'Römork elektrik bağlantıları için siyah veya beyaz, metal / plastik / enjeksiyon baskılı fişli yeni model adaptör kablo. Uzunluk: 5 m.',
      ru: 'Адаптерный кабель новой модели с вилками (металл / пластик / литая под давлением) чёрного или белого цвета для электрических соединений прицепа. Длина: 5 м.',
      de: 'Adapterkabel Neues Modell mit Steckern (Metall / Kunststoff / Spritzguss) in Schwarz oder Weiß für elektrische Anhängerverbindungen. Länge: 5 m.',
    },
    specs: [
      {
        label: {
          en: 'Cable length',
          tr: 'Kablo uzunluğu',
          ru: 'Длина кабеля',
          de: 'Kabellänge',
        },
        value: { en: '5 m', tr: '5 m', ru: '5 м', de: '5 m' },
      },
      {
        label: {
          en: 'Plug variants',
          tr: 'Fiş versiyonları',
          ru: 'Варианты вилки',
          de: 'Steckervarianten',
        },
        value: {
          en: 'MA: metal plug; P: plastic plug; PM: injection-moulded plug',
          tr: 'MA: metal fiş; P: plastik fiş; PM: enjeksiyon baskılı fiş',
          ru: 'MA: металлическая вилка; P: пластиковая вилка; PM: литая вилка',
          de: 'MA: Metallstecker; P: Kunststoffstecker; PM: Spritzgussstecker',
        },
      },
      {
        label: { en: 'Color', tr: 'Renk', ru: 'Цвет', de: 'Farbe' },
        value: {
          en: 'Black – White',
          tr: 'Siyah - Beyaz',
          ru: 'Чёрный — белый',
          de: 'Schwarz – Weiß',
        },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/cables/R030-190PM.jpg'],
  },
  {
    id: 'prod-r030-193p',
    slug: 'r030-193p-adapter-cable-plastic-5-5m',
    smrCode: 'R030-193P',
    categoryId: 'cat-cables',
    subcategoryId: 'subcat-spiral-cable',
    title: {
      en: 'New Model Adapter Cable, Plastic / Injection-Moulded Plugs, Black – White (5.5 m)',
      tr: 'Yeni Model Adaptör Kablo Plastik / Enjeksiyon Baskılı Fişli Siyah - Beyaz (5,5 m)',
      ru: 'Адаптерный кабель, новая модель, вилки пластик / литая под давлением, чёрный — белый (5,5 м)',
      de: 'Adapterkabel Neues Modell, Stecker Kunststoff / Spritzguss, Schwarz – Weiß (5,5 m)',
    },
    description: {
      en: 'New model adapter cable with plastic / injection-moulded plugs in black or white for trailer electrical connections. Length: 5.5 m.',
      tr: 'Römork elektrik bağlantıları için siyah veya beyaz, plastik / enjeksiyon baskılı fişli yeni model adaptör kablo. Uzunluk: 5,5 m.',
      ru: 'Адаптерный кабель новой модели с вилками (пластик / литая под давлением) чёрного или белого цвета для электрических соединений прицепа. Длина: 5,5 м.',
      de: 'Adapterkabel Neues Modell mit Steckern (Kunststoff / Spritzguss) in Schwarz oder Weiß für elektrische Anhängerverbindungen. Länge: 5,5 m.',
    },
    specs: [
      {
        label: {
          en: 'Cable length',
          tr: 'Kablo uzunluğu',
          ru: 'Длина кабеля',
          de: 'Kabellänge',
        },
        value: { en: '5.5 m', tr: '5,5 m', ru: '5,5 м', de: '5,5 m' },
      },
      {
        label: {
          en: 'Plug variants',
          tr: 'Fiş versiyonları',
          ru: 'Варианты вилки',
          de: 'Steckervarianten',
        },
        value: {
          en: 'P: plastic plug; PM: injection-moulded plug',
          tr: 'P: plastik fiş; PM: enjeksiyon baskılı fiş',
          ru: 'P: пластиковая вилка; PM: литая вилка',
          de: 'P: Kunststoffstecker; PM: Spritzgussstecker',
        },
      },
      {
        label: { en: 'Color', tr: 'Renk', ru: 'Цвет', de: 'Farbe' },
        value: {
          en: 'Black – White',
          tr: 'Siyah - Beyaz',
          ru: 'Чёрный — белый',
          de: 'Schwarz – Weiß',
        },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/cables/R030-190PM.jpg'],
  },
  {
    id: 'prod-r030-200',
    slug: 'r030-200-spiral-cable-24v-7p-molded-black-3m-4m',
    smrCode: 'R030-200',
    categoryId: 'cat-cables',
    subcategoryId: 'subcat-spiral-cable',
    title: {
      en: 'New Model 24V/7P Spiral Cable, Injection-Moulded Black Plug (3 m / 4 m)',
      tr: 'Yeni Model 24V/7P Enjeksiyon Baskılı Siyah Fişli Kablo (3 m / 4 m)',
      ru: 'Спиральный кабель 24 В/7 контактов, новая модель, литая вилка, чёрная (3 м / 4 м)',
      de: 'Spiralkabel 24 V/7-polig, Neues Modell, Spritzgussstecker schwarz (3 m / 4 m)',
    },
    description: {
      en: 'New model 24 V, 7-pin spiral (coiled) cable with an injection-moulded black plug for the tractor–trailer connection. Polyurethane coil Ø40 mm, wire 6x1 mm + 1x1.5 mm. Length: 3 m / 4 m.',
      tr: 'Çekici-römork bağlantısı için enjeksiyon baskılı siyah fişli yeni model 24 V, 7 pinli spiral kablo. Poliüretan spiral Ø40 mm, tel 6x1 mm + 1x1,5 mm. Uzunluk: 3 m / 4 m.',
      ru: 'Спиральный кабель 24 В, 7 контактов, новая модель, с литой вилкой (чёрной) для соединения тягача и прицепа. Спираль из полиуретана Ø40 мм, жилы 6x1 мм + 1x1,5 мм. Длина: 3 м / 4 м.',
      de: 'Spiralkabel 24 V, 7-polig, Neues Modell, mit schwarzem Spritzgussstecker für die Verbindung zwischen Zugfahrzeug und Anhänger. Polyurethan-Spirale Ø40 mm, Adern 6x1 mm + 1x1,5 mm. Länge: 3 m / 4 m.',
    },
    specs: [
      {
        label: {
          en: 'Voltage',
          tr: 'Voltaj',
          ru: 'Напряжение',
          de: 'Spannung',
        },
        value: { en: '24 V', tr: '24 V', ru: '24 В', de: '24 V' },
      },
      {
        label: {
          en: 'Number of pins',
          tr: 'Pin sayısı',
          ru: 'Количество контактов',
          de: 'Polzahl',
        },
        value: { en: '7', tr: '7', ru: '7', de: '7' },
      },
      {
        label: { en: 'Color', tr: 'Renk', ru: 'Цвет', de: 'Farbe' },
        value: { en: 'Black', tr: 'Siyah', ru: 'Чёрный', de: 'Schwarz' },
      },
      {
        label: {
          en: 'Cable length',
          tr: 'Kablo uzunluğu',
          ru: 'Длина кабеля',
          de: 'Kabellänge',
        },
        value: {
          en: '3 m / 4 m',
          tr: '3 m / 4 m',
          ru: '3 м / 4 м',
          de: '3 m / 4 m',
        },
      },
      {
        label: {
          en: 'Coil material',
          tr: 'Spiral malzemesi',
          ru: 'Материал спирали',
          de: 'Spiralenmaterial',
        },
        value: {
          en: 'Polyurethane',
          tr: 'Poliüretan',
          ru: 'Полиуретан',
          de: 'Polyurethan',
        },
      },
      {
        label: {
          en: 'Plug material',
          tr: 'Fiş malzemesi',
          ru: 'Материал вилки',
          de: 'Steckermaterial',
        },
        value: {
          en: 'Molded plastic',
          tr: 'Enjeksiyon baskılı plastik',
          ru: 'Литой пластик',
          de: 'Spritzguss-Kunststoff',
        },
      },
      {
        label: {
          en: 'Coil diameter',
          tr: 'Spiral çapı',
          ru: 'Диаметр спирали',
          de: 'Spiralendurchmesser',
        },
        value: { en: '40 mm', tr: '40 mm', ru: '40 мм', de: '40 mm' },
      },
      {
        label: {
          en: 'Inner diameter',
          tr: 'İç çap',
          ru: 'Внутренний диаметр',
          de: 'Innendurchmesser',
        },
        value: { en: '20 mm', tr: '20 mm', ru: '20 мм', de: '20 mm' },
      },
      {
        label: {
          en: 'Wire cross-section',
          tr: 'Tel kesiti',
          ru: 'Сечение жил',
          de: 'Aderquerschnitt',
        },
        value: {
          en: '6x1 mm + 1x1.5 mm',
          tr: '6x1 mm + 1x1.5 mm',
          ru: '6x1 мм + 1x1.5 мм',
          de: '6x1 mm + 1x1.5 mm',
        },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/cables/R030-200.jpg'],
  },
  {
    id: 'prod-r030-201',
    slug: 'r030-201-spiral-cable-24v-7p-molded-black-3-5m-4-5m',
    smrCode: 'R030-201',
    categoryId: 'cat-cables',
    subcategoryId: 'subcat-spiral-cable',
    title: {
      en: 'New Model 24V/7P Spiral Cable, Injection-Moulded Black Plug (3.5 m / 4.5 m)',
      tr: 'Yeni Model 24V/7P Enjeksiyon Baskılı Siyah Fişli Kablo (3,5 m / 4,5 m)',
      ru: 'Спиральный кабель 24 В/7 контактов, новая модель, литая вилка, чёрная (3,5 м / 4,5 м)',
      de: 'Spiralkabel 24 V/7-polig, Neues Modell, Spritzgussstecker schwarz (3,5 m / 4,5 m)',
    },
    description: {
      en: 'New model 24 V, 7-pin spiral (coiled) cable with an injection-moulded black plug for the tractor–trailer connection. Polyurethane coil Ø40 mm, wire 6x1 mm + 1x1.5 mm. Length: 3.5 m / 4.5 m.',
      tr: 'Çekici-römork bağlantısı için enjeksiyon baskılı siyah fişli yeni model 24 V, 7 pinli spiral kablo. Poliüretan spiral Ø40 mm, tel 6x1 mm + 1x1,5 mm. Uzunluk: 3,5 m / 4,5 m.',
      ru: 'Спиральный кабель 24 В, 7 контактов, новая модель, с литой вилкой (чёрной) для соединения тягача и прицепа. Спираль из полиуретана Ø40 мм, жилы 6x1 мм + 1x1,5 мм. Длина: 3,5 м / 4,5 м.',
      de: 'Spiralkabel 24 V, 7-polig, Neues Modell, mit schwarzem Spritzgussstecker für die Verbindung zwischen Zugfahrzeug und Anhänger. Polyurethan-Spirale Ø40 mm, Adern 6x1 mm + 1x1,5 mm. Länge: 3,5 m / 4,5 m.',
    },
    specs: [
      {
        label: {
          en: 'Voltage',
          tr: 'Voltaj',
          ru: 'Напряжение',
          de: 'Spannung',
        },
        value: { en: '24 V', tr: '24 V', ru: '24 В', de: '24 V' },
      },
      {
        label: {
          en: 'Number of pins',
          tr: 'Pin sayısı',
          ru: 'Количество контактов',
          de: 'Polzahl',
        },
        value: { en: '7', tr: '7', ru: '7', de: '7' },
      },
      {
        label: { en: 'Color', tr: 'Renk', ru: 'Цвет', de: 'Farbe' },
        value: { en: 'Black', tr: 'Siyah', ru: 'Чёрный', de: 'Schwarz' },
      },
      {
        label: {
          en: 'Cable length',
          tr: 'Kablo uzunluğu',
          ru: 'Длина кабеля',
          de: 'Kabellänge',
        },
        value: {
          en: '3.5 m / 4.5 m',
          tr: '3,5 m / 4,5 m',
          ru: '3,5 м / 4,5 м',
          de: '3,5 m / 4,5 m',
        },
      },
      {
        label: {
          en: 'Coil material',
          tr: 'Spiral malzemesi',
          ru: 'Материал спирали',
          de: 'Spiralenmaterial',
        },
        value: {
          en: 'Polyurethane',
          tr: 'Poliüretan',
          ru: 'Полиуретан',
          de: 'Polyurethan',
        },
      },
      {
        label: {
          en: 'Plug material',
          tr: 'Fiş malzemesi',
          ru: 'Материал вилки',
          de: 'Steckermaterial',
        },
        value: {
          en: 'Molded plastic',
          tr: 'Enjeksiyon baskılı plastik',
          ru: 'Литой пластик',
          de: 'Spritzguss-Kunststoff',
        },
      },
      {
        label: {
          en: 'Coil diameter',
          tr: 'Spiral çapı',
          ru: 'Диаметр спирали',
          de: 'Spiralendurchmesser',
        },
        value: { en: '40 mm', tr: '40 mm', ru: '40 мм', de: '40 mm' },
      },
      {
        label: {
          en: 'Inner diameter',
          tr: 'İç çap',
          ru: 'Внутренний диаметр',
          de: 'Innendurchmesser',
        },
        value: { en: '20 mm', tr: '20 mm', ru: '20 мм', de: '20 mm' },
      },
      {
        label: {
          en: 'Wire cross-section',
          tr: 'Tel kesiti',
          ru: 'Сечение жил',
          de: 'Aderquerschnitt',
        },
        value: {
          en: '6x1 mm + 1x1.5 mm',
          tr: '6x1 mm + 1x1.5 mm',
          ru: '6x1 мм + 1x1.5 мм',
          de: '6x1 mm + 1x1.5 mm',
        },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/cables/R030-200.jpg'],
  },
  {
    id: 'prod-r030-202',
    slug: 'r030-202-spiral-cable-24v-7p-molded-black-4m-5m',
    smrCode: 'R030-202',
    categoryId: 'cat-cables',
    subcategoryId: 'subcat-spiral-cable',
    title: {
      en: 'New Model 24V/7P Spiral Cable, Injection-Moulded Black Plug (4 m / 5 m)',
      tr: 'Yeni Model 24V/7P Enjeksiyon Baskılı Siyah Fişli Kablo (4 m / 5 m)',
      ru: 'Спиральный кабель 24 В/7 контактов, новая модель, литая вилка, чёрная (4 м / 5 м)',
      de: 'Spiralkabel 24 V/7-polig, Neues Modell, Spritzgussstecker schwarz (4 m / 5 m)',
    },
    description: {
      en: 'New model 24 V, 7-pin spiral (coiled) cable with an injection-moulded black plug for the tractor–trailer connection. Polyurethane coil Ø40 mm, wire 6x1 mm + 1x1.5 mm. Length: 4 m / 5 m.',
      tr: 'Çekici-römork bağlantısı için enjeksiyon baskılı siyah fişli yeni model 24 V, 7 pinli spiral kablo. Poliüretan spiral Ø40 mm, tel 6x1 mm + 1x1,5 mm. Uzunluk: 4 m / 5 m.',
      ru: 'Спиральный кабель 24 В, 7 контактов, новая модель, с литой вилкой (чёрной) для соединения тягача и прицепа. Спираль из полиуретана Ø40 мм, жилы 6x1 мм + 1x1,5 мм. Длина: 4 м / 5 м.',
      de: 'Spiralkabel 24 V, 7-polig, Neues Modell, mit schwarzem Spritzgussstecker für die Verbindung zwischen Zugfahrzeug und Anhänger. Polyurethan-Spirale Ø40 mm, Adern 6x1 mm + 1x1,5 mm. Länge: 4 m / 5 m.',
    },
    specs: [
      {
        label: {
          en: 'Voltage',
          tr: 'Voltaj',
          ru: 'Напряжение',
          de: 'Spannung',
        },
        value: { en: '24 V', tr: '24 V', ru: '24 В', de: '24 V' },
      },
      {
        label: {
          en: 'Number of pins',
          tr: 'Pin sayısı',
          ru: 'Количество контактов',
          de: 'Polzahl',
        },
        value: { en: '7', tr: '7', ru: '7', de: '7' },
      },
      {
        label: { en: 'Color', tr: 'Renk', ru: 'Цвет', de: 'Farbe' },
        value: { en: 'Black', tr: 'Siyah', ru: 'Чёрный', de: 'Schwarz' },
      },
      {
        label: {
          en: 'Cable length',
          tr: 'Kablo uzunluğu',
          ru: 'Длина кабеля',
          de: 'Kabellänge',
        },
        value: {
          en: '4 m / 5 m',
          tr: '4 m / 5 m',
          ru: '4 м / 5 м',
          de: '4 m / 5 m',
        },
      },
      {
        label: {
          en: 'Coil material',
          tr: 'Spiral malzemesi',
          ru: 'Материал спирали',
          de: 'Spiralenmaterial',
        },
        value: {
          en: 'Polyurethane',
          tr: 'Poliüretan',
          ru: 'Полиуретан',
          de: 'Polyurethan',
        },
      },
      {
        label: {
          en: 'Plug material',
          tr: 'Fiş malzemesi',
          ru: 'Материал вилки',
          de: 'Steckermaterial',
        },
        value: {
          en: 'Molded plastic',
          tr: 'Enjeksiyon baskılı plastik',
          ru: 'Литой пластик',
          de: 'Spritzguss-Kunststoff',
        },
      },
      {
        label: {
          en: 'Coil diameter',
          tr: 'Spiral çapı',
          ru: 'Диаметр спирали',
          de: 'Spiralendurchmesser',
        },
        value: { en: '40 mm', tr: '40 mm', ru: '40 мм', de: '40 mm' },
      },
      {
        label: {
          en: 'Inner diameter',
          tr: 'İç çap',
          ru: 'Внутренний диаметр',
          de: 'Innendurchmesser',
        },
        value: { en: '20 mm', tr: '20 mm', ru: '20 мм', de: '20 mm' },
      },
      {
        label: {
          en: 'Wire cross-section',
          tr: 'Tel kesiti',
          ru: 'Сечение жил',
          de: 'Aderquerschnitt',
        },
        value: {
          en: '6x1 mm + 1x1.5 mm',
          tr: '6x1 mm + 1x1.5 mm',
          ru: '6x1 мм + 1x1.5 мм',
          de: '6x1 mm + 1x1.5 mm',
        },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/cables/R030-200.jpg'],
  },
  {
    id: 'prod-r030-203',
    slug: 'r030-203-spiral-cable-24v-7p-molded-black-4-5m-5-5m',
    smrCode: 'R030-203',
    categoryId: 'cat-cables',
    subcategoryId: 'subcat-spiral-cable',
    title: {
      en: 'New Model 24V/7P Spiral Cable, Injection-Moulded Black Plug (4.5 m / 5.5 m)',
      tr: 'Yeni Model 24V/7P Enjeksiyon Baskılı Siyah Fişli Kablo (4,5 m / 5,5 m)',
      ru: 'Спиральный кабель 24 В/7 контактов, новая модель, литая вилка, чёрная (4,5 м / 5,5 м)',
      de: 'Spiralkabel 24 V/7-polig, Neues Modell, Spritzgussstecker schwarz (4,5 m / 5,5 m)',
    },
    description: {
      en: 'New model 24 V, 7-pin spiral (coiled) cable with an injection-moulded black plug for the tractor–trailer connection. Polyurethane coil Ø40 mm, wire 6x1 mm + 1x1.5 mm. Length: 4.5 m / 5.5 m.',
      tr: 'Çekici-römork bağlantısı için enjeksiyon baskılı siyah fişli yeni model 24 V, 7 pinli spiral kablo. Poliüretan spiral Ø40 mm, tel 6x1 mm + 1x1,5 mm. Uzunluk: 4,5 m / 5,5 m.',
      ru: 'Спиральный кабель 24 В, 7 контактов, новая модель, с литой вилкой (чёрной) для соединения тягача и прицепа. Спираль из полиуретана Ø40 мм, жилы 6x1 мм + 1x1,5 мм. Длина: 4,5 м / 5,5 м.',
      de: 'Spiralkabel 24 V, 7-polig, Neues Modell, mit schwarzem Spritzgussstecker für die Verbindung zwischen Zugfahrzeug und Anhänger. Polyurethan-Spirale Ø40 mm, Adern 6x1 mm + 1x1,5 mm. Länge: 4,5 m / 5,5 m.',
    },
    specs: [
      {
        label: {
          en: 'Voltage',
          tr: 'Voltaj',
          ru: 'Напряжение',
          de: 'Spannung',
        },
        value: { en: '24 V', tr: '24 V', ru: '24 В', de: '24 V' },
      },
      {
        label: {
          en: 'Number of pins',
          tr: 'Pin sayısı',
          ru: 'Количество контактов',
          de: 'Polzahl',
        },
        value: { en: '7', tr: '7', ru: '7', de: '7' },
      },
      {
        label: { en: 'Color', tr: 'Renk', ru: 'Цвет', de: 'Farbe' },
        value: { en: 'Black', tr: 'Siyah', ru: 'Чёрный', de: 'Schwarz' },
      },
      {
        label: {
          en: 'Cable length',
          tr: 'Kablo uzunluğu',
          ru: 'Длина кабеля',
          de: 'Kabellänge',
        },
        value: {
          en: '4.5 m / 5.5 m',
          tr: '4,5 m / 5,5 m',
          ru: '4,5 м / 5,5 м',
          de: '4,5 m / 5,5 m',
        },
      },
      {
        label: {
          en: 'Coil material',
          tr: 'Spiral malzemesi',
          ru: 'Материал спирали',
          de: 'Spiralenmaterial',
        },
        value: {
          en: 'Polyurethane',
          tr: 'Poliüretan',
          ru: 'Полиуретан',
          de: 'Polyurethan',
        },
      },
      {
        label: {
          en: 'Plug material',
          tr: 'Fiş malzemesi',
          ru: 'Материал вилки',
          de: 'Steckermaterial',
        },
        value: {
          en: 'Molded plastic',
          tr: 'Enjeksiyon baskılı plastik',
          ru: 'Литой пластик',
          de: 'Spritzguss-Kunststoff',
        },
      },
      {
        label: {
          en: 'Coil diameter',
          tr: 'Spiral çapı',
          ru: 'Диаметр спирали',
          de: 'Spiralendurchmesser',
        },
        value: { en: '40 mm', tr: '40 mm', ru: '40 мм', de: '40 mm' },
      },
      {
        label: {
          en: 'Inner diameter',
          tr: 'İç çap',
          ru: 'Внутренний диаметр',
          de: 'Innendurchmesser',
        },
        value: { en: '20 mm', tr: '20 mm', ru: '20 мм', de: '20 mm' },
      },
      {
        label: {
          en: 'Wire cross-section',
          tr: 'Tel kesiti',
          ru: 'Сечение жил',
          de: 'Aderquerschnitt',
        },
        value: {
          en: '6x1 mm + 1x1.5 mm',
          tr: '6x1 mm + 1x1.5 mm',
          ru: '6x1 мм + 1x1.5 мм',
          de: '6x1 mm + 1x1.5 mm',
        },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/cables/R030-200.jpg'],
  },
  {
    id: 'prod-r030-210',
    slug: 'r030-210-spiral-cable-24v-7p-molded-white-3m-4m',
    smrCode: 'R030-210',
    categoryId: 'cat-cables',
    subcategoryId: 'subcat-spiral-cable',
    title: {
      en: 'New Model 24V/7P Spiral Cable, Injection-Moulded White Plug (3 m / 4 m)',
      tr: 'Yeni Model 24V/7P Enjeksiyon Baskılı Beyaz Fişli Kablo (3 m / 4 m)',
      ru: 'Спиральный кабель 24 В/7 контактов, новая модель, литая вилка, белая (3 м / 4 м)',
      de: 'Spiralkabel 24 V/7-polig, Neues Modell, Spritzgussstecker weiß (3 m / 4 m)',
    },
    description: {
      en: 'New model 24 V, 7-pin spiral (coiled) cable with an injection-moulded white plug for the tractor–trailer connection. Polyurethane coil Ø40 mm, wire 6x1 mm + 1x1.5 mm. Length: 3 m / 4 m.',
      tr: 'Çekici-römork bağlantısı için enjeksiyon baskılı beyaz fişli yeni model 24 V, 7 pinli spiral kablo. Poliüretan spiral Ø40 mm, tel 6x1 mm + 1x1,5 mm. Uzunluk: 3 m / 4 m.',
      ru: 'Спиральный кабель 24 В, 7 контактов, новая модель, с литой вилкой (белой) для соединения тягача и прицепа. Спираль из полиуретана Ø40 мм, жилы 6x1 мм + 1x1,5 мм. Длина: 3 м / 4 м.',
      de: 'Spiralkabel 24 V, 7-polig, Neues Modell, mit weißem Spritzgussstecker für die Verbindung zwischen Zugfahrzeug und Anhänger. Polyurethan-Spirale Ø40 mm, Adern 6x1 mm + 1x1,5 mm. Länge: 3 m / 4 m.',
    },
    specs: [
      {
        label: {
          en: 'Voltage',
          tr: 'Voltaj',
          ru: 'Напряжение',
          de: 'Spannung',
        },
        value: { en: '24 V', tr: '24 V', ru: '24 В', de: '24 V' },
      },
      {
        label: {
          en: 'Number of pins',
          tr: 'Pin sayısı',
          ru: 'Количество контактов',
          de: 'Polzahl',
        },
        value: { en: '7', tr: '7', ru: '7', de: '7' },
      },
      {
        label: { en: 'Color', tr: 'Renk', ru: 'Цвет', de: 'Farbe' },
        value: { en: 'White', tr: 'Beyaz', ru: 'Белый', de: 'Weiß' },
      },
      {
        label: {
          en: 'Cable length',
          tr: 'Kablo uzunluğu',
          ru: 'Длина кабеля',
          de: 'Kabellänge',
        },
        value: {
          en: '3 m / 4 m',
          tr: '3 m / 4 m',
          ru: '3 м / 4 м',
          de: '3 m / 4 m',
        },
      },
      {
        label: {
          en: 'Coil material',
          tr: 'Spiral malzemesi',
          ru: 'Материал спирали',
          de: 'Spiralenmaterial',
        },
        value: {
          en: 'Polyurethane',
          tr: 'Poliüretan',
          ru: 'Полиуретан',
          de: 'Polyurethan',
        },
      },
      {
        label: {
          en: 'Plug material',
          tr: 'Fiş malzemesi',
          ru: 'Материал вилки',
          de: 'Steckermaterial',
        },
        value: {
          en: 'Molded plastic',
          tr: 'Enjeksiyon baskılı plastik',
          ru: 'Литой пластик',
          de: 'Spritzguss-Kunststoff',
        },
      },
      {
        label: {
          en: 'Coil diameter',
          tr: 'Spiral çapı',
          ru: 'Диаметр спирали',
          de: 'Spiralendurchmesser',
        },
        value: { en: '40 mm', tr: '40 mm', ru: '40 мм', de: '40 mm' },
      },
      {
        label: {
          en: 'Inner diameter',
          tr: 'İç çap',
          ru: 'Внутренний диаметр',
          de: 'Innendurchmesser',
        },
        value: { en: '20 mm', tr: '20 mm', ru: '20 мм', de: '20 mm' },
      },
      {
        label: {
          en: 'Wire cross-section',
          tr: 'Tel kesiti',
          ru: 'Сечение жил',
          de: 'Aderquerschnitt',
        },
        value: {
          en: '6x1 mm + 1x1.5 mm',
          tr: '6x1 mm + 1x1.5 mm',
          ru: '6x1 мм + 1x1.5 мм',
          de: '6x1 mm + 1x1.5 mm',
        },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/cables/R030-210.jpg'],
  },
  {
    id: 'prod-r030-211',
    slug: 'r030-211-spiral-cable-24v-7p-molded-white-3-5m-4-5m',
    smrCode: 'R030-211',
    categoryId: 'cat-cables',
    subcategoryId: 'subcat-spiral-cable',
    title: {
      en: 'New Model 24V/7P Spiral Cable, Injection-Moulded White Plug (3.5 m / 4.5 m)',
      tr: 'Yeni Model 24V/7P Enjeksiyon Baskılı Beyaz Fişli Kablo (3,5 m / 4,5 m)',
      ru: 'Спиральный кабель 24 В/7 контактов, новая модель, литая вилка, белая (3,5 м / 4,5 м)',
      de: 'Spiralkabel 24 V/7-polig, Neues Modell, Spritzgussstecker weiß (3,5 m / 4,5 m)',
    },
    description: {
      en: 'New model 24 V, 7-pin spiral (coiled) cable with an injection-moulded white plug for the tractor–trailer connection. Polyurethane coil Ø40 mm, wire 6x1 mm + 1x1.5 mm. Length: 3.5 m / 4.5 m.',
      tr: 'Çekici-römork bağlantısı için enjeksiyon baskılı beyaz fişli yeni model 24 V, 7 pinli spiral kablo. Poliüretan spiral Ø40 mm, tel 6x1 mm + 1x1,5 mm. Uzunluk: 3,5 m / 4,5 m.',
      ru: 'Спиральный кабель 24 В, 7 контактов, новая модель, с литой вилкой (белой) для соединения тягача и прицепа. Спираль из полиуретана Ø40 мм, жилы 6x1 мм + 1x1,5 мм. Длина: 3,5 м / 4,5 м.',
      de: 'Spiralkabel 24 V, 7-polig, Neues Modell, mit weißem Spritzgussstecker für die Verbindung zwischen Zugfahrzeug und Anhänger. Polyurethan-Spirale Ø40 mm, Adern 6x1 mm + 1x1,5 mm. Länge: 3,5 m / 4,5 m.',
    },
    specs: [
      {
        label: {
          en: 'Voltage',
          tr: 'Voltaj',
          ru: 'Напряжение',
          de: 'Spannung',
        },
        value: { en: '24 V', tr: '24 V', ru: '24 В', de: '24 V' },
      },
      {
        label: {
          en: 'Number of pins',
          tr: 'Pin sayısı',
          ru: 'Количество контактов',
          de: 'Polzahl',
        },
        value: { en: '7', tr: '7', ru: '7', de: '7' },
      },
      {
        label: { en: 'Color', tr: 'Renk', ru: 'Цвет', de: 'Farbe' },
        value: { en: 'White', tr: 'Beyaz', ru: 'Белый', de: 'Weiß' },
      },
      {
        label: {
          en: 'Cable length',
          tr: 'Kablo uzunluğu',
          ru: 'Длина кабеля',
          de: 'Kabellänge',
        },
        value: {
          en: '3.5 m / 4.5 m',
          tr: '3,5 m / 4,5 m',
          ru: '3,5 м / 4,5 м',
          de: '3,5 m / 4,5 m',
        },
      },
      {
        label: {
          en: 'Coil material',
          tr: 'Spiral malzemesi',
          ru: 'Материал спирали',
          de: 'Spiralenmaterial',
        },
        value: {
          en: 'Polyurethane',
          tr: 'Poliüretan',
          ru: 'Полиуретан',
          de: 'Polyurethan',
        },
      },
      {
        label: {
          en: 'Plug material',
          tr: 'Fiş malzemesi',
          ru: 'Материал вилки',
          de: 'Steckermaterial',
        },
        value: {
          en: 'Molded plastic',
          tr: 'Enjeksiyon baskılı plastik',
          ru: 'Литой пластик',
          de: 'Spritzguss-Kunststoff',
        },
      },
      {
        label: {
          en: 'Coil diameter',
          tr: 'Spiral çapı',
          ru: 'Диаметр спирали',
          de: 'Spiralendurchmesser',
        },
        value: { en: '40 mm', tr: '40 mm', ru: '40 мм', de: '40 mm' },
      },
      {
        label: {
          en: 'Inner diameter',
          tr: 'İç çap',
          ru: 'Внутренний диаметр',
          de: 'Innendurchmesser',
        },
        value: { en: '20 mm', tr: '20 mm', ru: '20 мм', de: '20 mm' },
      },
      {
        label: {
          en: 'Wire cross-section',
          tr: 'Tel kesiti',
          ru: 'Сечение жил',
          de: 'Aderquerschnitt',
        },
        value: {
          en: '6x1 mm + 1x1.5 mm',
          tr: '6x1 mm + 1x1.5 mm',
          ru: '6x1 мм + 1x1.5 мм',
          de: '6x1 mm + 1x1.5 mm',
        },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/cables/R030-210.jpg'],
  },
  {
    id: 'prod-r030-212',
    slug: 'r030-212-spiral-cable-24v-7p-molded-white-4m-5m',
    smrCode: 'R030-212',
    categoryId: 'cat-cables',
    subcategoryId: 'subcat-spiral-cable',
    title: {
      en: 'New Model 24V/7P Spiral Cable, Injection-Moulded White Plug (4 m / 5 m)',
      tr: 'Yeni Model 24V/7P Enjeksiyon Baskılı Beyaz Fişli Kablo (4 m / 5 m)',
      ru: 'Спиральный кабель 24 В/7 контактов, новая модель, литая вилка, белая (4 м / 5 м)',
      de: 'Spiralkabel 24 V/7-polig, Neues Modell, Spritzgussstecker weiß (4 m / 5 m)',
    },
    description: {
      en: 'New model 24 V, 7-pin spiral (coiled) cable with an injection-moulded white plug for the tractor–trailer connection. Polyurethane coil Ø40 mm, wire 6x1 mm + 1x1.5 mm. Length: 4 m / 5 m.',
      tr: 'Çekici-römork bağlantısı için enjeksiyon baskılı beyaz fişli yeni model 24 V, 7 pinli spiral kablo. Poliüretan spiral Ø40 mm, tel 6x1 mm + 1x1,5 mm. Uzunluk: 4 m / 5 m.',
      ru: 'Спиральный кабель 24 В, 7 контактов, новая модель, с литой вилкой (белой) для соединения тягача и прицепа. Спираль из полиуретана Ø40 мм, жилы 6x1 мм + 1x1,5 мм. Длина: 4 м / 5 м.',
      de: 'Spiralkabel 24 V, 7-polig, Neues Modell, mit weißem Spritzgussstecker für die Verbindung zwischen Zugfahrzeug und Anhänger. Polyurethan-Spirale Ø40 mm, Adern 6x1 mm + 1x1,5 mm. Länge: 4 m / 5 m.',
    },
    specs: [
      {
        label: {
          en: 'Voltage',
          tr: 'Voltaj',
          ru: 'Напряжение',
          de: 'Spannung',
        },
        value: { en: '24 V', tr: '24 V', ru: '24 В', de: '24 V' },
      },
      {
        label: {
          en: 'Number of pins',
          tr: 'Pin sayısı',
          ru: 'Количество контактов',
          de: 'Polzahl',
        },
        value: { en: '7', tr: '7', ru: '7', de: '7' },
      },
      {
        label: { en: 'Color', tr: 'Renk', ru: 'Цвет', de: 'Farbe' },
        value: { en: 'White', tr: 'Beyaz', ru: 'Белый', de: 'Weiß' },
      },
      {
        label: {
          en: 'Cable length',
          tr: 'Kablo uzunluğu',
          ru: 'Длина кабеля',
          de: 'Kabellänge',
        },
        value: {
          en: '4 m / 5 m',
          tr: '4 m / 5 m',
          ru: '4 м / 5 м',
          de: '4 m / 5 m',
        },
      },
      {
        label: {
          en: 'Coil material',
          tr: 'Spiral malzemesi',
          ru: 'Материал спирали',
          de: 'Spiralenmaterial',
        },
        value: {
          en: 'Polyurethane',
          tr: 'Poliüretan',
          ru: 'Полиуретан',
          de: 'Polyurethan',
        },
      },
      {
        label: {
          en: 'Plug material',
          tr: 'Fiş malzemesi',
          ru: 'Материал вилки',
          de: 'Steckermaterial',
        },
        value: {
          en: 'Molded plastic',
          tr: 'Enjeksiyon baskılı plastik',
          ru: 'Литой пластик',
          de: 'Spritzguss-Kunststoff',
        },
      },
      {
        label: {
          en: 'Coil diameter',
          tr: 'Spiral çapı',
          ru: 'Диаметр спирали',
          de: 'Spiralendurchmesser',
        },
        value: { en: '40 mm', tr: '40 mm', ru: '40 мм', de: '40 mm' },
      },
      {
        label: {
          en: 'Inner diameter',
          tr: 'İç çap',
          ru: 'Внутренний диаметр',
          de: 'Innendurchmesser',
        },
        value: { en: '20 mm', tr: '20 mm', ru: '20 мм', de: '20 mm' },
      },
      {
        label: {
          en: 'Wire cross-section',
          tr: 'Tel kesiti',
          ru: 'Сечение жил',
          de: 'Aderquerschnitt',
        },
        value: {
          en: '6x1 mm + 1x1.5 mm',
          tr: '6x1 mm + 1x1.5 mm',
          ru: '6x1 мм + 1x1.5 мм',
          de: '6x1 mm + 1x1.5 mm',
        },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/cables/R030-210.jpg'],
  },
  {
    id: 'prod-r030-213',
    slug: 'r030-213-spiral-cable-24v-7p-molded-white-4-5m-5-5m',
    smrCode: 'R030-213',
    categoryId: 'cat-cables',
    subcategoryId: 'subcat-spiral-cable',
    title: {
      en: 'New Model 24V/7P Spiral Cable, Injection-Moulded White Plug (4.5 m / 5.5 m)',
      tr: 'Yeni Model 24V/7P Enjeksiyon Baskılı Beyaz Fişli Kablo (4,5 m / 5,5 m)',
      ru: 'Спиральный кабель 24 В/7 контактов, новая модель, литая вилка, белая (4,5 м / 5,5 м)',
      de: 'Spiralkabel 24 V/7-polig, Neues Modell, Spritzgussstecker weiß (4,5 m / 5,5 m)',
    },
    description: {
      en: 'New model 24 V, 7-pin spiral (coiled) cable with an injection-moulded white plug for the tractor–trailer connection. Polyurethane coil Ø40 mm, wire 6x1 mm + 1x1.5 mm. Length: 4.5 m / 5.5 m.',
      tr: 'Çekici-römork bağlantısı için enjeksiyon baskılı beyaz fişli yeni model 24 V, 7 pinli spiral kablo. Poliüretan spiral Ø40 mm, tel 6x1 mm + 1x1,5 mm. Uzunluk: 4,5 m / 5,5 m.',
      ru: 'Спиральный кабель 24 В, 7 контактов, новая модель, с литой вилкой (белой) для соединения тягача и прицепа. Спираль из полиуретана Ø40 мм, жилы 6x1 мм + 1x1,5 мм. Длина: 4,5 м / 5,5 м.',
      de: 'Spiralkabel 24 V, 7-polig, Neues Modell, mit weißem Spritzgussstecker für die Verbindung zwischen Zugfahrzeug und Anhänger. Polyurethan-Spirale Ø40 mm, Adern 6x1 mm + 1x1,5 mm. Länge: 4,5 m / 5,5 m.',
    },
    specs: [
      {
        label: {
          en: 'Voltage',
          tr: 'Voltaj',
          ru: 'Напряжение',
          de: 'Spannung',
        },
        value: { en: '24 V', tr: '24 V', ru: '24 В', de: '24 V' },
      },
      {
        label: {
          en: 'Number of pins',
          tr: 'Pin sayısı',
          ru: 'Количество контактов',
          de: 'Polzahl',
        },
        value: { en: '7', tr: '7', ru: '7', de: '7' },
      },
      {
        label: { en: 'Color', tr: 'Renk', ru: 'Цвет', de: 'Farbe' },
        value: { en: 'White', tr: 'Beyaz', ru: 'Белый', de: 'Weiß' },
      },
      {
        label: {
          en: 'Cable length',
          tr: 'Kablo uzunluğu',
          ru: 'Длина кабеля',
          de: 'Kabellänge',
        },
        value: {
          en: '4.5 m / 5.5 m',
          tr: '4,5 m / 5,5 m',
          ru: '4,5 м / 5,5 м',
          de: '4,5 m / 5,5 m',
        },
      },
      {
        label: {
          en: 'Coil material',
          tr: 'Spiral malzemesi',
          ru: 'Материал спирали',
          de: 'Spiralenmaterial',
        },
        value: {
          en: 'Polyurethane',
          tr: 'Poliüretan',
          ru: 'Полиуретан',
          de: 'Polyurethan',
        },
      },
      {
        label: {
          en: 'Plug material',
          tr: 'Fiş malzemesi',
          ru: 'Материал вилки',
          de: 'Steckermaterial',
        },
        value: {
          en: 'Molded plastic',
          tr: 'Enjeksiyon baskılı plastik',
          ru: 'Литой пластик',
          de: 'Spritzguss-Kunststoff',
        },
      },
      {
        label: {
          en: 'Coil diameter',
          tr: 'Spiral çapı',
          ru: 'Диаметр спирали',
          de: 'Spiralendurchmesser',
        },
        value: { en: '40 mm', tr: '40 mm', ru: '40 мм', de: '40 mm' },
      },
      {
        label: {
          en: 'Inner diameter',
          tr: 'İç çap',
          ru: 'Внутренний диаметр',
          de: 'Innendurchmesser',
        },
        value: { en: '20 mm', tr: '20 mm', ru: '20 мм', de: '20 mm' },
      },
      {
        label: {
          en: 'Wire cross-section',
          tr: 'Tel kesiti',
          ru: 'Сечение жил',
          de: 'Aderquerschnitt',
        },
        value: {
          en: '6x1 mm + 1x1.5 mm',
          tr: '6x1 mm + 1x1.5 mm',
          ru: '6x1 мм + 1x1.5 мм',
          de: '6x1 mm + 1x1.5 mm',
        },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/cables/R030-210.jpg'],
  },
  // ───────────── Tank caps / anti-theft devices  (cat-tank-caps) ─────────────
  {
    id: 'prod-s263',
    slug: 's263-fuel-tank-protector-80mm-155mm',
    smrCode: 'S263',
    categoryId: 'cat-tank-caps',
    subcategoryId: 'subcat-anti-theft',
    title: {
      en: '80 mm Fuel Tank Protector (155 mm)',
      tr: "80'lik Depo Mazot Koruması (155 mm)",
      ru: 'Защита топливного бака 80 мм (155 мм)',
      de: 'Tankschutz 80 mm (155 mm)',
    },
    description: {
      en: 'Anti-theft protector for the diesel fuel tank filler neck, 80 mm version (155 mm).',
      tr: "Depo ağzı için 80'lik mazot hırsızlık koruması (155 mm).",
      ru: 'Антикражная защита заливной горловины топливного бака, исполнение 80 мм (155 мм).',
      de: 'Diebstahlschutz für den Dieseltank-Einfüllstutzen, Ausführung 80 mm (155 mm).',
    },
    specs: [
      {
        label: {
          en: 'Cap size',
          tr: 'Kapak ölçüsü',
          ru: 'Размер крышки',
          de: 'Deckelgröße',
        },
        value: {
          en: '80 mm (155 mm)',
          tr: '80 mm (155 mm)',
          ru: '80 мм (155 мм)',
          de: '80 mm (155 mm)',
        },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/placeholder.png'],
  },
  {
    id: 'prod-s264',
    slug: 's264-fuel-tank-protector-80mm-165mm',
    smrCode: 'S264',
    categoryId: 'cat-tank-caps',
    subcategoryId: 'subcat-anti-theft',
    title: {
      en: '80 mm Fuel Tank Protector (165 mm)',
      tr: "80'lik Depo Mazot Koruması (165 mm)",
      ru: 'Защита топливного бака 80 мм (165 мм)',
      de: 'Tankschutz 80 mm (165 mm)',
    },
    description: {
      en: 'Anti-theft protector for the diesel fuel tank filler neck, 80 mm version (165 mm).',
      tr: "Depo ağzı için 80'lik mazot hırsızlık koruması (165 mm).",
      ru: 'Антикражная защита заливной горловины топливного бака, исполнение 80 мм (165 мм).',
      de: 'Diebstahlschutz für den Dieseltank-Einfüllstutzen, Ausführung 80 mm (165 mm).',
    },
    specs: [
      {
        label: {
          en: 'Cap size',
          tr: 'Kapak ölçüsü',
          ru: 'Размер крышки',
          de: 'Deckelgröße',
        },
        value: {
          en: '80 mm (165 mm)',
          tr: '80 mm (165 mm)',
          ru: '80 мм (165 мм)',
          de: '80 mm (165 mm)',
        },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/placeholder.png'],
  },
  {
    id: 'prod-s266',
    slug: 's266-fuel-tank-protector-60mm',
    smrCode: 'S266',
    categoryId: 'cat-tank-caps',
    subcategoryId: 'subcat-anti-theft',
    title: {
      en: '60 mm Fuel Tank Protector',
      tr: "60'lık Depo Mazot Koruması",
      ru: 'Защита топливного бака 60 мм',
      de: 'Tankschutz 60 mm',
    },
    description: {
      en: 'Anti-theft protector for the diesel fuel tank filler neck, 60 mm version.',
      tr: "Depo ağzı için 60'lık mazot hırsızlık koruması.",
      ru: 'Антикражная защита заливной горловины топливного бака, исполнение 60 мм.',
      de: 'Diebstahlschutz für den Dieseltank-Einfüllstutzen, Ausführung 60 mm.',
    },
    specs: [
      {
        label: {
          en: 'Cap size',
          tr: 'Kapak ölçüsü',
          ru: 'Размер крышки',
          de: 'Deckelgröße',
        },
        value: { en: '60 mm', tr: '60 mm', ru: '60 мм', de: '60 mm' },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/placeholder.png'],
  },
  {
    id: 'prod-s267',
    slug: 's267-fuel-tank-protector-60mm-threaded',
    smrCode: 'S267',
    categoryId: 'cat-tank-caps',
    subcategoryId: 'subcat-anti-theft',
    title: {
      en: '60 mm Threaded Fuel Tank Protector',
      tr: "60'lık Depo Mazot Koruması Dişli",
      ru: 'Защита топливного бака 60 мм, резьбовая',
      de: 'Tankschutz 60 mm mit Gewinde',
    },
    description: {
      en: 'Threaded anti-theft protector for the diesel fuel tank filler neck, 60 mm version.',
      tr: "Depo ağzı için dişli 60'lık mazot hırsızlık koruması.",
      ru: 'Резьбовая антикражная защита заливной горловины топливного бака, исполнение 60 мм.',
      de: 'Diebstahlschutz mit Gewinde für den Dieseltank-Einfüllstutzen, Ausführung 60 mm.',
    },
    specs: [
      {
        label: {
          en: 'Cap size',
          tr: 'Kapak ölçüsü',
          ru: 'Размер крышки',
          de: 'Deckelgröße',
        },
        value: { en: '60 mm', tr: '60 mm', ru: '60 мм', de: '60 mm' },
      },
      {
        label: { en: 'Design', tr: 'Yapı', ru: 'Конструкция', de: 'Bauart' },
        value: {
          en: 'Threaded',
          tr: 'Dişli',
          ru: 'Резьбовая',
          de: 'Mit Gewinde',
        },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/placeholder.png'],
  },
  {
    id: 'prod-s269',
    slug: 's269-fuel-tank-protector-60mm-aluminium-head',
    smrCode: 'S269',
    categoryId: 'cat-tank-caps',
    subcategoryId: 'subcat-anti-theft',
    title: {
      en: '60 mm Fuel Tank Protector, Aluminium Head',
      tr: '60mm Alüminyum Kafalı Depo Mazot Koruması',
      ru: 'Защита топливного бака 60 мм с алюминиевой головкой',
      de: 'Tankschutz 60 mm mit Aluminiumkopf',
    },
    description: {
      en: 'Anti-theft protector with aluminium head for the diesel fuel tank filler neck, 60 mm version.',
      tr: 'Depo ağzı için alüminyum kafalı 60 mm mazot hırsızlık koruması.',
      ru: 'Антикражная защита заливной горловины топливного бака с алюминиевой головкой, исполнение 60 мм.',
      de: 'Diebstahlschutz mit Aluminiumkopf für den Dieseltank-Einfüllstutzen, Ausführung 60 mm.',
    },
    specs: [
      {
        label: {
          en: 'Cap size',
          tr: 'Kapak ölçüsü',
          ru: 'Размер крышки',
          de: 'Deckelgröße',
        },
        value: { en: '60 mm', tr: '60 mm', ru: '60 мм', de: '60 mm' },
      },
      {
        label: {
          en: 'Material',
          tr: 'Malzeme',
          ru: 'Материал',
          de: 'Material',
        },
        value: {
          en: 'Aluminium head',
          tr: 'Alüminyum kafa',
          ru: 'Алюминиевая головка',
          de: 'Aluminiumkopf',
        },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/placeholder.png'],
  },
  {
    id: 'prod-s270',
    slug: 's270-fuel-tank-protector-80mm-aluminium-head',
    smrCode: 'S270',
    categoryId: 'cat-tank-caps',
    subcategoryId: 'subcat-anti-theft',
    title: {
      en: '80 mm Fuel Tank Protector, Aluminium Head',
      tr: '80mm Alüminyum Kafalı Depo Mazot Koruması',
      ru: 'Защита топливного бака 80 мм с алюминиевой головкой',
      de: 'Tankschutz 80 mm mit Aluminiumkopf',
    },
    description: {
      en: 'Anti-theft protector with aluminium head for the diesel fuel tank filler neck, 80 mm version.',
      tr: 'Depo ağzı için alüminyum kafalı 80 mm mazot hırsızlık koruması.',
      ru: 'Антикражная защита заливной горловины топливного бака с алюминиевой головкой, исполнение 80 мм.',
      de: 'Diebstahlschutz mit Aluminiumkopf für den Dieseltank-Einfüllstutzen, Ausführung 80 mm.',
    },
    specs: [
      {
        label: {
          en: 'Cap size',
          tr: 'Kapak ölçüsü',
          ru: 'Размер крышки',
          de: 'Deckelgröße',
        },
        value: { en: '80 mm', tr: '80 mm', ru: '80 мм', de: '80 mm' },
      },
      {
        label: {
          en: 'Material',
          tr: 'Malzeme',
          ru: 'Материал',
          de: 'Material',
        },
        value: {
          en: 'Aluminium head',
          tr: 'Alüminyum kafa',
          ru: 'Алюминиевая головка',
          de: 'Aluminiumkopf',
        },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/tank-caps/S270.jpg'],
  },
  {
    id: 'prod-s268',
    slug: 's268-adblue-scania-adapter',
    smrCode: 'S268',
    categoryId: 'cat-tank-caps',
    subcategoryId: 'subcat-adblue-fuel-cap',
    title: {
      en: 'AdBlue Scania Adapter',
      tr: 'Adblue Scania Adaptör',
      ru: 'Адаптер AdBlue для Scania',
      de: 'AdBlue-Adapter für Scania',
    },
    description: {
      en: 'Adapter for the AdBlue tank filler neck of Scania vehicles.',
      tr: 'Scania araçların Adblue depo ağzı için adaptör.',
      ru: 'Адаптер для заливной горловины бака AdBlue автомобилей Scania.',
      de: 'Adapter für den AdBlue-Tankstutzen von Scania-Fahrzeugen.',
    },
    specs: [
      {
        label: {
          en: 'Intended for',
          tr: 'Kullanım alanı',
          ru: 'Назначение',
          de: 'Verwendung',
        },
        value: { en: 'AdBlue', tr: 'AdBlue', ru: 'AdBlue', de: 'AdBlue' },
      },
      {
        label: { en: 'Vehicle', tr: 'Araç', ru: 'Автомобиль', de: 'Fahrzeug' },
        value: { en: 'Scania', tr: 'Scania', ru: 'Scania', de: 'Scania' },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/placeholder.png'],
  },
  {
    id: 'prod-s271-1',
    slug: 's271-1-document-tube-chained-cap',
    smrCode: 'S271-1',
    categoryId: 'cat-tank-caps',
    subcategoryId: 'subcat-accessories',
    title: {
      en: 'Document Tube (Without Clamp, With Chained Cap)',
      tr: 'Doküman Borusu (Kelepçesiz + Zincirli Kapaklı)',
      ru: 'Тубус для документов (без хомута, с крышкой на цепочке)',
      de: 'Dokumentenrohr (ohne Schelle, mit Kappe an Kette)',
    },
    description: {
      en: 'Document tube without clamp, supplied with a cap attached by a chain.',
      tr: 'Kelepçesiz doküman borusu; zincirli kapak ile birlikte.',
      ru: 'Тубус для документов без хомута, крышка крепится на цепочке.',
      de: 'Dokumentenrohr ohne Schelle, mit an einer Kette befestigter Kappe.',
    },
    specs: [
      {
        label: { en: 'Design', tr: 'Yapı', ru: 'Конструкция', de: 'Bauart' },
        value: {
          en: 'Without clamp; chained cap',
          tr: 'Kelepçesiz; zincirli kapak',
          ru: 'Без хомута; крышка на цепочке',
          de: 'Ohne Schelle; Kappe an Kette',
        },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/placeholder.png'],
  },
  {
    id: 'prod-s275',
    slug: 's275-fuel-tank-protection-cap-60mm-black',
    smrCode: 'S275',
    categoryId: 'cat-tank-caps',
    subcategoryId: 'subcat-anti-theft',
    title: {
      en: '60 mm Fuel Tank Protection Cap (Black Painted)',
      tr: '60mm Depo Mazot Koruma Kapağı (Siyah Boyalı)',
      ru: 'Защитная крышка топливного бака 60 мм (чёрная окраска)',
      de: 'Tankschutzkappe 60 mm (schwarz lackiert)',
    },
    description: {
      en: '60 mm anti-theft protection cap for diesel fuel tanks, black painted.',
      tr: 'Mazot depoları için 60 mm hırsızlık koruma kapağı, siyah boyalı.',
      ru: 'Антикражная защитная крышка для топливных баков 60 мм, окрашена в чёрный цвет.',
      de: 'Diebstahlschutzkappe 60 mm für Dieseltanks, schwarz lackiert.',
    },
    specs: [
      {
        label: {
          en: 'Cap size',
          tr: 'Kapak ölçüsü',
          ru: 'Размер крышки',
          de: 'Deckelgröße',
        },
        value: { en: '60 mm', tr: '60 mm', ru: '60 мм', de: '60 mm' },
      },
      {
        label: { en: 'Color', tr: 'Renk', ru: 'Цвет', de: 'Farbe' },
        value: { en: 'Black', tr: 'Siyah', ru: 'Чёрный', de: 'Schwarz' },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/placeholder.png'],
  },
  {
    id: 'prod-s275a',
    slug: 's275a-fuel-tank-protection-cap-60mm-no-inner-part',
    smrCode: 'S275A',
    categoryId: 'cat-tank-caps',
    subcategoryId: 'subcat-anti-theft',
    title: {
      en: '60 mm Fuel Tank Protection Cap (Without Allen Key and Inner Part)',
      tr: '60 mm Depo Mazot Koruma Kapağı (Alyan ve İç Parçasız)',
      ru: 'Защитная крышка топливного бака 60 мм (без шестигранного ключа и внутренней части)',
      de: 'Tankschutzkappe 60 mm (ohne Inbusschlüssel und Innenteil)',
    },
    description: {
      en: '60 mm fuel tank protection cap, supplied without Allen key and inner part.',
      tr: '60 mm depo mazot koruma kapağı; alyan ve iç parça olmadan.',
      ru: 'Защитная крышка топливного бака 60 мм, поставляется без шестигранного ключа и внутренней части.',
      de: 'Tankschutzkappe 60 mm, ohne Inbusschlüssel und Innenteil geliefert.',
    },
    specs: [
      {
        label: {
          en: 'Cap size',
          tr: 'Kapak ölçüsü',
          ru: 'Размер крышки',
          de: 'Deckelgröße',
        },
        value: { en: '60 mm', tr: '60 mm', ru: '60 мм', de: '60 mm' },
      },
      {
        label: { en: 'Design', tr: 'Yapı', ru: 'Конструкция', de: 'Bauart' },
        value: {
          en: 'Without Allen key and inner part',
          tr: 'Alyan ve iç parçasız',
          ru: 'Без шестигранного ключа и внутренней части',
          de: 'Ohne Inbusschlüssel und Innenteil',
        },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/placeholder.png'],
  },
  {
    id: 'prod-s277',
    slug: 's277-fuel-tank-protection-cap-80mm-black',
    smrCode: 'S277',
    categoryId: 'cat-tank-caps',
    subcategoryId: 'subcat-anti-theft',
    title: {
      en: '80 mm Fuel Tank Protection Cap (Black Painted)',
      tr: '80mm Depo Mazot Koruma Kapağı (Siyah Boyalı)',
      ru: 'Защитная крышка топливного бака 80 мм (чёрная окраска)',
      de: 'Tankschutzkappe 80 mm (schwarz lackiert)',
    },
    description: {
      en: '80 mm anti-theft protection cap for diesel fuel tanks, black painted.',
      tr: 'Mazot depoları için 80 mm hırsızlık koruma kapağı, siyah boyalı.',
      ru: 'Антикражная защитная крышка для топливных баков 80 мм, окрашена в чёрный цвет.',
      de: 'Diebstahlschutzkappe 80 mm für Dieseltanks, schwarz lackiert.',
    },
    specs: [
      {
        label: {
          en: 'Cap size',
          tr: 'Kapak ölçüsü',
          ru: 'Размер крышки',
          de: 'Deckelgröße',
        },
        value: { en: '80 mm', tr: '80 mm', ru: '80 мм', de: '80 mm' },
      },
      {
        label: { en: 'Color', tr: 'Renk', ru: 'Цвет', de: 'Farbe' },
        value: { en: 'Black', tr: 'Siyah', ru: 'Чёрный', de: 'Schwarz' },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/tank-caps/S277.jpg'],
  },
  {
    id: 'prod-s277a',
    slug: 's277a-fuel-tank-protection-cap-80mm-no-inner-part',
    smrCode: 'S277A',
    categoryId: 'cat-tank-caps',
    subcategoryId: 'subcat-anti-theft',
    title: {
      en: '80 mm Fuel Tank Protection Cap (Without Allen Key and Inner Part)',
      tr: '80 mm Depo Mazot Koruma Kapağı (Alyan ve İç Parçasız)',
      ru: 'Защитная крышка топливного бака 80 мм (без шестигранного ключа и внутренней части)',
      de: 'Tankschutzkappe 80 mm (ohne Inbusschlüssel und Innenteil)',
    },
    description: {
      en: '80 mm fuel tank protection cap, supplied without Allen key and inner part.',
      tr: '80 mm depo mazot koruma kapağı; alyan ve iç parça olmadan.',
      ru: 'Защитная крышка топливного бака 80 мм, поставляется без шестигранного ключа и внутренней части.',
      de: 'Tankschutzkappe 80 mm, ohne Inbusschlüssel und Innenteil geliefert.',
    },
    specs: [
      {
        label: {
          en: 'Cap size',
          tr: 'Kapak ölçüsü',
          ru: 'Размер крышки',
          de: 'Deckelgröße',
        },
        value: { en: '80 mm', tr: '80 mm', ru: '80 мм', de: '80 mm' },
      },
      {
        label: { en: 'Design', tr: 'Yapı', ru: 'Конструкция', de: 'Bauart' },
        value: {
          en: 'Without Allen key and inner part',
          tr: 'Alyan ve iç parçasız',
          ru: 'Без шестигранного ключа и внутренней части',
          de: 'Ohne Inbusschlüssel und Innenteil',
        },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/placeholder.png'],
  },
  {
    id: 'prod-s280-01',
    slug: 's280-01-fuel-tank-cap-b60-galv',
    smrCode: 'S280-01',
    categoryId: 'cat-tank-caps',
    subcategoryId: 'subcat-fuel-cap',
    title: {
      en: 'B60 Galvanized Fuel Tank Cap',
      tr: 'B60 Galvaniz Depo Kapağı',
      ru: 'Крышка топливного бака B60, оцинкованная',
      de: 'Tankdeckel B60, verzinkt',
    },
    description: {
      en: 'Galvanized fuel tank cap, size B60. For truck fuel tanks.',
      tr: 'B60 ölçüsünde galvaniz depo kapağı. Kamyon yakıt depoları için.',
      ru: 'Крышка топливного бака B60, оцинкованная. Для топливных баков грузовых автомобилей.',
      de: 'Tankdeckel B60, verzinkt. Für Kraftstofftanks von Lkw.',
    },
    specs: [
      {
        label: {
          en: 'Cap size',
          tr: 'Kapak ölçüsü',
          ru: 'Размер крышки',
          de: 'Deckelgröße',
        },
        value: { en: 'B60', tr: 'B60', ru: 'B60', de: 'B60' },
      },
      {
        label: {
          en: 'Material',
          tr: 'Malzeme',
          ru: 'Материал',
          de: 'Material',
        },
        value: {
          en: 'Galvanized',
          tr: 'Galvaniz',
          ru: 'Оцинкованный',
          de: 'Verzinkt',
        },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/placeholder.png'],
  },
  {
    id: 'prod-s280-02',
    slug: 's280-02-fuel-tank-cap-b60a-galv',
    smrCode: 'S280-02',
    categoryId: 'cat-tank-caps',
    subcategoryId: 'subcat-fuel-cap',
    title: {
      en: 'B60A Galvanized Fuel Tank Cap',
      tr: 'B60A Galvaniz Depo Kapağı',
      ru: 'Крышка топливного бака B60A, оцинкованная',
      de: 'Tankdeckel B60A, verzinkt',
    },
    description: {
      en: 'Galvanized fuel tank cap, size B60A. For truck fuel tanks.',
      tr: 'B60A ölçüsünde galvaniz depo kapağı. Kamyon yakıt depoları için.',
      ru: 'Крышка топливного бака B60A, оцинкованная. Для топливных баков грузовых автомобилей.',
      de: 'Tankdeckel B60A, verzinkt. Für Kraftstofftanks von Lkw.',
    },
    specs: [
      {
        label: {
          en: 'Cap size',
          tr: 'Kapak ölçüsü',
          ru: 'Размер крышки',
          de: 'Deckelgröße',
        },
        value: { en: 'B60A', tr: 'B60A', ru: 'B60A', de: 'B60A' },
      },
      {
        label: {
          en: 'Material',
          tr: 'Malzeme',
          ru: 'Материал',
          de: 'Material',
        },
        value: {
          en: 'Galvanized',
          tr: 'Galvaniz',
          ru: 'Оцинкованный',
          de: 'Verzinkt',
        },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/tank-caps/S280-02.jpg'],
  },
  {
    id: 'prod-s280-03',
    slug: 's280-03-fuel-tank-cap-b60-alu',
    smrCode: 'S280-03',
    categoryId: 'cat-tank-caps',
    subcategoryId: 'subcat-fuel-cap',
    title: {
      en: 'B60 Aluminium Fuel Tank Cap',
      tr: 'B60 Alüminyum Depo Kapağı',
      ru: 'Крышка топливного бака B60, алюминиевая',
      de: 'Tankdeckel B60, aus Aluminium',
    },
    description: {
      en: 'Aluminium fuel tank cap, size B60. For truck fuel tanks.',
      tr: 'B60 ölçüsünde alüminyum depo kapağı. Kamyon yakıt depoları için.',
      ru: 'Крышка топливного бака B60, алюминиевая. Для топливных баков грузовых автомобилей.',
      de: 'Tankdeckel B60, aus Aluminium. Für Kraftstofftanks von Lkw.',
    },
    specs: [
      {
        label: {
          en: 'Cap size',
          tr: 'Kapak ölçüsü',
          ru: 'Размер крышки',
          de: 'Deckelgröße',
        },
        value: { en: 'B60', tr: 'B60', ru: 'B60', de: 'B60' },
      },
      {
        label: {
          en: 'Material',
          tr: 'Malzeme',
          ru: 'Материал',
          de: 'Material',
        },
        value: {
          en: 'Aluminium',
          tr: 'Alüminyum',
          ru: 'Алюминий',
          de: 'Aluminium',
        },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/placeholder.png'],
  },
  {
    id: 'prod-s280-04',
    slug: 's280-04-fuel-tank-cap-b60a-alu',
    smrCode: 'S280-04',
    categoryId: 'cat-tank-caps',
    subcategoryId: 'subcat-fuel-cap',
    title: {
      en: 'B60A Aluminium Fuel Tank Cap',
      tr: 'B60A Alüminyum Depo Kapağı',
      ru: 'Крышка топливного бака B60A, алюминиевая',
      de: 'Tankdeckel B60A, aus Aluminium',
    },
    description: {
      en: 'Aluminium fuel tank cap, size B60A. For truck fuel tanks.',
      tr: 'B60A ölçüsünde alüminyum depo kapağı. Kamyon yakıt depoları için.',
      ru: 'Крышка топливного бака B60A, алюминиевая. Для топливных баков грузовых автомобилей.',
      de: 'Tankdeckel B60A, aus Aluminium. Für Kraftstofftanks von Lkw.',
    },
    specs: [
      {
        label: {
          en: 'Cap size',
          tr: 'Kapak ölçüsü',
          ru: 'Размер крышки',
          de: 'Deckelgröße',
        },
        value: { en: 'B60A', tr: 'B60A', ru: 'B60A', de: 'B60A' },
      },
      {
        label: {
          en: 'Material',
          tr: 'Malzeme',
          ru: 'Материал',
          de: 'Material',
        },
        value: {
          en: 'Aluminium',
          tr: 'Alüminyum',
          ru: 'Алюминий',
          de: 'Aluminium',
        },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/placeholder.png'],
  },
  {
    id: 'prod-s280-05',
    slug: 's280-05-fuel-tank-cap-b80-galv',
    smrCode: 'S280-05',
    categoryId: 'cat-tank-caps',
    subcategoryId: 'subcat-fuel-cap',
    title: {
      en: 'B80 Galvanized Fuel Tank Cap',
      tr: 'B80 Galvaniz Depo Kapağı',
      ru: 'Крышка топливного бака B80, оцинкованная',
      de: 'Tankdeckel B80, verzinkt',
    },
    description: {
      en: 'Galvanized fuel tank cap, size B80. For truck fuel tanks.',
      tr: 'B80 ölçüsünde galvaniz depo kapağı. Kamyon yakıt depoları için.',
      ru: 'Крышка топливного бака B80, оцинкованная. Для топливных баков грузовых автомобилей.',
      de: 'Tankdeckel B80, verzinkt. Für Kraftstofftanks von Lkw.',
    },
    specs: [
      {
        label: {
          en: 'Cap size',
          tr: 'Kapak ölçüsü',
          ru: 'Размер крышки',
          de: 'Deckelgröße',
        },
        value: { en: 'B80', tr: 'B80', ru: 'B80', de: 'B80' },
      },
      {
        label: {
          en: 'Material',
          tr: 'Malzeme',
          ru: 'Материал',
          de: 'Material',
        },
        value: {
          en: 'Galvanized',
          tr: 'Galvaniz',
          ru: 'Оцинкованный',
          de: 'Verzinkt',
        },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/placeholder.png'],
  },
  {
    id: 'prod-s280-06',
    slug: 's280-06-fuel-tank-cap-b80a-galv',
    smrCode: 'S280-06',
    categoryId: 'cat-tank-caps',
    subcategoryId: 'subcat-fuel-cap',
    title: {
      en: 'B80A Galvanized Fuel Tank Cap',
      tr: 'B80A Galvaniz Depo Kapağı',
      ru: 'Крышка топливного бака B80A, оцинкованная',
      de: 'Tankdeckel B80A, verzinkt',
    },
    description: {
      en: 'Galvanized fuel tank cap, size B80A. For truck fuel tanks.',
      tr: 'B80A ölçüsünde galvaniz depo kapağı. Kamyon yakıt depoları için.',
      ru: 'Крышка топливного бака B80A, оцинкованная. Для топливных баков грузовых автомобилей.',
      de: 'Tankdeckel B80A, verzinkt. Für Kraftstofftanks von Lkw.',
    },
    specs: [
      {
        label: {
          en: 'Cap size',
          tr: 'Kapak ölçüsü',
          ru: 'Размер крышки',
          de: 'Deckelgröße',
        },
        value: { en: 'B80A', tr: 'B80A', ru: 'B80A', de: 'B80A' },
      },
      {
        label: {
          en: 'Material',
          tr: 'Malzeme',
          ru: 'Материал',
          de: 'Material',
        },
        value: {
          en: 'Galvanized',
          tr: 'Galvaniz',
          ru: 'Оцинкованный',
          de: 'Verzinkt',
        },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/placeholder.png'],
  },
  {
    id: 'prod-s280-07',
    slug: 's280-07-fuel-tank-cap-b80-alu',
    smrCode: 'S280-07',
    categoryId: 'cat-tank-caps',
    subcategoryId: 'subcat-fuel-cap',
    title: {
      en: 'B80 Aluminium Fuel Tank Cap',
      tr: 'B80 Alüminyum Depo Kapağı',
      ru: 'Крышка топливного бака B80, алюминиевая',
      de: 'Tankdeckel B80, aus Aluminium',
    },
    description: {
      en: 'Aluminium fuel tank cap, size B80. For truck fuel tanks.',
      tr: 'B80 ölçüsünde alüminyum depo kapağı. Kamyon yakıt depoları için.',
      ru: 'Крышка топливного бака B80, алюминиевая. Для топливных баков грузовых автомобилей.',
      de: 'Tankdeckel B80, aus Aluminium. Für Kraftstofftanks von Lkw.',
    },
    specs: [
      {
        label: {
          en: 'Cap size',
          tr: 'Kapak ölçüsü',
          ru: 'Размер крышки',
          de: 'Deckelgröße',
        },
        value: { en: 'B80', tr: 'B80', ru: 'B80', de: 'B80' },
      },
      {
        label: {
          en: 'Material',
          tr: 'Malzeme',
          ru: 'Материал',
          de: 'Material',
        },
        value: {
          en: 'Aluminium',
          tr: 'Alüminyum',
          ru: 'Алюминий',
          de: 'Aluminium',
        },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/placeholder.png'],
  },
  {
    id: 'prod-s280-08',
    slug: 's280-08-fuel-tank-cap-b80a-alu',
    smrCode: 'S280-08',
    categoryId: 'cat-tank-caps',
    subcategoryId: 'subcat-fuel-cap',
    title: {
      en: 'B80A Aluminium Fuel Tank Cap',
      tr: 'B80A Alüminyum Depo Kapağı',
      ru: 'Крышка топливного бака B80A, алюминиевая',
      de: 'Tankdeckel B80A, aus Aluminium',
    },
    description: {
      en: 'Aluminium fuel tank cap, size B80A. For truck fuel tanks.',
      tr: 'B80A ölçüsünde alüminyum depo kapağı. Kamyon yakıt depoları için.',
      ru: 'Крышка топливного бака B80A, алюминиевая. Для топливных баков грузовых автомобилей.',
      de: 'Tankdeckel B80A, aus Aluminium. Für Kraftstofftanks von Lkw.',
    },
    specs: [
      {
        label: {
          en: 'Cap size',
          tr: 'Kapak ölçüsü',
          ru: 'Размер крышки',
          de: 'Deckelgröße',
        },
        value: { en: 'B80A', tr: 'B80A', ru: 'B80A', de: 'B80A' },
      },
      {
        label: {
          en: 'Material',
          tr: 'Malzeme',
          ru: 'Материал',
          de: 'Material',
        },
        value: {
          en: 'Aluminium',
          tr: 'Alüminyum',
          ru: 'Алюминий',
          de: 'Aluminium',
        },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/placeholder.png'],
  },
  {
    id: 'prod-s280-09',
    slug: 's280-09-fuel-tank-cap-b40a-inox',
    smrCode: 'S280-09',
    categoryId: 'cat-tank-caps',
    subcategoryId: 'subcat-fuel-cap',
    title: {
      en: 'B40A Stainless Fuel Tank Cap',
      tr: 'B40A Paslanmaz Depo Kapağı',
      ru: 'Крышка топливного бака B40A, из нержавеющей стали',
      de: 'Tankdeckel B40A, aus Edelstahl',
    },
    description: {
      en: 'Stainless fuel tank cap, size B40A. For truck fuel tanks.',
      tr: 'B40A ölçüsünde paslanmaz depo kapağı. Kamyon yakıt depoları için.',
      ru: 'Крышка топливного бака B40A, из нержавеющей стали. Для топливных баков грузовых автомобилей.',
      de: 'Tankdeckel B40A, aus Edelstahl. Für Kraftstofftanks von Lkw.',
    },
    specs: [
      {
        label: {
          en: 'Cap size',
          tr: 'Kapak ölçüsü',
          ru: 'Размер крышки',
          de: 'Deckelgröße',
        },
        value: { en: 'B40A', tr: 'B40A', ru: 'B40A', de: 'B40A' },
      },
      {
        label: {
          en: 'Material',
          tr: 'Malzeme',
          ru: 'Материал',
          de: 'Material',
        },
        value: {
          en: 'Stainless steel',
          tr: 'Paslanmaz',
          ru: 'Нержавеющая сталь',
          de: 'Edelstahl',
        },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/tank-caps/S280-09.jpg'],
  },
  {
    id: 'prod-s280-13',
    slug: 's280-13-fuel-tank-cap-b60a-plastic-scania',
    smrCode: 'S280-13',
    categoryId: 'cat-tank-caps',
    subcategoryId: 'subcat-fuel-cap',
    title: {
      en: 'B60A Plastic Fuel Tank Cap for Scania',
      tr: 'B60A Plastik Depo Kapağı Scania',
      ru: 'Крышка топливного бака B60A, пластиковая для Scania',
      de: 'Tankdeckel B60A, aus Kunststoff für Scania',
    },
    description: {
      en: 'Plastic fuel tank cap, size B60A for Scania vehicles. For truck fuel tanks.',
      tr: 'B60A ölçüsünde plastik depo kapağı (Scania). Kamyon yakıt depoları için.',
      ru: 'Крышка топливного бака B60A, пластиковая для автомобилей Scania. Для топливных баков грузовых автомобилей.',
      de: 'Tankdeckel B60A, aus Kunststoff für Scania-Fahrzeuge. Für Kraftstofftanks von Lkw.',
    },
    specs: [
      {
        label: {
          en: 'Cap size',
          tr: 'Kapak ölçüsü',
          ru: 'Размер крышки',
          de: 'Deckelgröße',
        },
        value: { en: 'B60A', tr: 'B60A', ru: 'B60A', de: 'B60A' },
      },
      {
        label: {
          en: 'Material',
          tr: 'Malzeme',
          ru: 'Материал',
          de: 'Material',
        },
        value: {
          en: 'Plastic',
          tr: 'Plastik',
          ru: 'Пластик',
          de: 'Kunststoff',
        },
      },
      {
        label: { en: 'Vehicle', tr: 'Araç', ru: 'Автомобиль', de: 'Fahrzeug' },
        value: { en: 'Scania', tr: 'Scania', ru: 'Scania', de: 'Scania' },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/tank-caps/S280-13.jpg'],
  },
  {
    id: 'prod-s280-14',
    slug: 's280-14-fuel-tank-cap-b60a-plastic-scania-ring',
    smrCode: 'S280-14',
    categoryId: 'cat-tank-caps',
    subcategoryId: 'subcat-fuel-cap',
    title: {
      en: 'B60A Plastic Fuel Tank Cap for Scania, with Ring',
      tr: 'B60A Plastik Depo Kapağı Scania Çemberli',
      ru: 'Крышка топливного бака B60A, пластиковая для Scania, с кольцом',
      de: 'Tankdeckel B60A, aus Kunststoff für Scania, mit Ring',
    },
    description: {
      en: 'Plastic fuel tank cap, size B60A for Scania vehicles, with ring. For truck fuel tanks.',
      tr: 'B60A ölçüsünde plastik depo kapağı (Scania), çemberli. Kamyon yakıt depoları için.',
      ru: 'Крышка топливного бака B60A, пластиковая для автомобилей Scania, с кольцом. Для топливных баков грузовых автомобилей.',
      de: 'Tankdeckel B60A, aus Kunststoff für Scania-Fahrzeuge, mit Ring. Für Kraftstofftanks von Lkw.',
    },
    specs: [
      {
        label: {
          en: 'Cap size',
          tr: 'Kapak ölçüsü',
          ru: 'Размер крышки',
          de: 'Deckelgröße',
        },
        value: { en: 'B60A', tr: 'B60A', ru: 'B60A', de: 'B60A' },
      },
      {
        label: {
          en: 'Material',
          tr: 'Malzeme',
          ru: 'Материал',
          de: 'Material',
        },
        value: {
          en: 'Plastic',
          tr: 'Plastik',
          ru: 'Пластик',
          de: 'Kunststoff',
        },
      },
      {
        label: { en: 'Vehicle', tr: 'Araç', ru: 'Автомобиль', de: 'Fahrzeug' },
        value: { en: 'Scania', tr: 'Scania', ru: 'Scania', de: 'Scania' },
      },
      {
        label: { en: 'Design', tr: 'Yapı', ru: 'Конструкция', de: 'Bauart' },
        value: {
          en: 'with Ring',
          tr: 'Çemberli',
          ru: 'с кольцом',
          de: 'mit Ring',
        },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/placeholder.png'],
  },
  {
    id: 'prod-s280-14z',
    slug: 's280-14z-fuel-tank-cap-b60a-plastic-scania-ringchain',
    smrCode: 'S280-14Z',
    categoryId: 'cat-tank-caps',
    subcategoryId: 'subcat-fuel-cap',
    title: {
      en: 'B60A Plastic Fuel Tank Cap for Scania, with Ring and Chain',
      tr: 'B60A Plastik Depo Kapağı Scania Çemberli Zincirli',
      ru: 'Крышка топливного бака B60A, пластиковая для Scania, с кольцом и цепочкой',
      de: 'Tankdeckel B60A, aus Kunststoff für Scania, mit Ring und Kette',
    },
    description: {
      en: 'Plastic fuel tank cap, size B60A for Scania vehicles, with ring and chain. For truck fuel tanks.',
      tr: 'B60A ölçüsünde plastik depo kapağı (Scania), çemberli zincirli. Kamyon yakıt depoları için.',
      ru: 'Крышка топливного бака B60A, пластиковая для автомобилей Scania, с кольцом и цепочкой. Для топливных баков грузовых автомобилей.',
      de: 'Tankdeckel B60A, aus Kunststoff für Scania-Fahrzeuge, mit Ring und Kette. Für Kraftstofftanks von Lkw.',
    },
    specs: [
      {
        label: {
          en: 'Cap size',
          tr: 'Kapak ölçüsü',
          ru: 'Размер крышки',
          de: 'Deckelgröße',
        },
        value: { en: 'B60A', tr: 'B60A', ru: 'B60A', de: 'B60A' },
      },
      {
        label: {
          en: 'Material',
          tr: 'Malzeme',
          ru: 'Материал',
          de: 'Material',
        },
        value: {
          en: 'Plastic',
          tr: 'Plastik',
          ru: 'Пластик',
          de: 'Kunststoff',
        },
      },
      {
        label: { en: 'Vehicle', tr: 'Araç', ru: 'Автомобиль', de: 'Fahrzeug' },
        value: { en: 'Scania', tr: 'Scania', ru: 'Scania', de: 'Scania' },
      },
      {
        label: { en: 'Design', tr: 'Yapı', ru: 'Конструкция', de: 'Bauart' },
        value: {
          en: 'with Ring and Chain',
          tr: 'Çemberli Zincirli',
          ru: 'с кольцом и цепочкой',
          de: 'mit Ring und Kette',
        },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/tank-caps/S280-14Z.jpg'],
  },
  {
    id: 'prod-s280-15',
    slug: 's280-15-fuel-tank-cap-b80a-plastic',
    smrCode: 'S280-15',
    categoryId: 'cat-tank-caps',
    subcategoryId: 'subcat-fuel-cap',
    title: {
      en: 'B80A Plastic Fuel Tank Cap',
      tr: 'B80A Plastik Depo Kapağı',
      ru: 'Крышка топливного бака B80A, пластиковая',
      de: 'Tankdeckel B80A, aus Kunststoff',
    },
    description: {
      en: 'Plastic fuel tank cap, size B80A. For truck fuel tanks.',
      tr: 'B80A ölçüsünde plastik depo kapağı. Kamyon yakıt depoları için.',
      ru: 'Крышка топливного бака B80A, пластиковая. Для топливных баков грузовых автомобилей.',
      de: 'Tankdeckel B80A, aus Kunststoff. Für Kraftstofftanks von Lkw.',
    },
    specs: [
      {
        label: {
          en: 'Cap size',
          tr: 'Kapak ölçüsü',
          ru: 'Размер крышки',
          de: 'Deckelgröße',
        },
        value: { en: 'B80A', tr: 'B80A', ru: 'B80A', de: 'B80A' },
      },
      {
        label: {
          en: 'Material',
          tr: 'Malzeme',
          ru: 'Материал',
          de: 'Material',
        },
        value: {
          en: 'Plastic',
          tr: 'Plastik',
          ru: 'Пластик',
          de: 'Kunststoff',
        },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/tank-caps/S280-15.jpg'],
  },
  {
    id: 'prod-s280-15z',
    slug: 's280-15z-fuel-tank-cap-b80a-plastic-chain',
    smrCode: 'S280-15Z',
    categoryId: 'cat-tank-caps',
    subcategoryId: 'subcat-fuel-cap',
    title: {
      en: 'B80A Plastic Fuel Tank Cap, with Chain',
      tr: 'B80A Plastik Depo Kapağı Zincirli',
      ru: 'Крышка топливного бака B80A, пластиковая, с цепочкой',
      de: 'Tankdeckel B80A, aus Kunststoff, mit Kette',
    },
    description: {
      en: 'Plastic fuel tank cap, size B80A, with chain. For truck fuel tanks.',
      tr: 'B80A ölçüsünde plastik depo kapağı, zincirli. Kamyon yakıt depoları için.',
      ru: 'Крышка топливного бака B80A, пластиковая, с цепочкой. Для топливных баков грузовых автомобилей.',
      de: 'Tankdeckel B80A, aus Kunststoff, mit Kette. Für Kraftstofftanks von Lkw.',
    },
    specs: [
      {
        label: {
          en: 'Cap size',
          tr: 'Kapak ölçüsü',
          ru: 'Размер крышки',
          de: 'Deckelgröße',
        },
        value: { en: 'B80A', tr: 'B80A', ru: 'B80A', de: 'B80A' },
      },
      {
        label: {
          en: 'Material',
          tr: 'Malzeme',
          ru: 'Материал',
          de: 'Material',
        },
        value: {
          en: 'Plastic',
          tr: 'Plastik',
          ru: 'Пластик',
          de: 'Kunststoff',
        },
      },
      {
        label: { en: 'Design', tr: 'Yapı', ru: 'Конструкция', de: 'Bauart' },
        value: {
          en: 'with Chain',
          tr: 'Zincirli',
          ru: 'с цепочкой',
          de: 'mit Kette',
        },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/tank-caps/S280-15Z.jpg'],
  },
  {
    id: 'prod-s280-17',
    slug: 's280-17-fuel-tank-cap-b80a-plastic-side',
    smrCode: 'S280-17',
    categoryId: 'cat-tank-caps',
    subcategoryId: 'subcat-anti-theft-lock',
    title: {
      en: 'B80A Plastic Fuel Tank Cap, Side Locking',
      tr: 'B80A Plastik Depo Kapağı Yandan Kilitli',
      ru: 'Крышка топливного бака B80A, пластиковая, с боковым замком',
      de: 'Tankdeckel B80A, aus Kunststoff, seitlich abschließbar',
    },
    description: {
      en: 'Plastic fuel tank cap, size B80A, side locking. For truck fuel tanks.',
      tr: 'B80A ölçüsünde plastik depo kapağı, yandan kilitli. Kamyon yakıt depoları için.',
      ru: 'Крышка топливного бака B80A, пластиковая, с боковым замком. Для топливных баков грузовых автомобилей.',
      de: 'Tankdeckel B80A, aus Kunststoff, seitlich abschließbar. Für Kraftstofftanks von Lkw.',
    },
    specs: [
      {
        label: {
          en: 'Cap size',
          tr: 'Kapak ölçüsü',
          ru: 'Размер крышки',
          de: 'Deckelgröße',
        },
        value: { en: 'B80A', tr: 'B80A', ru: 'B80A', de: 'B80A' },
      },
      {
        label: {
          en: 'Material',
          tr: 'Malzeme',
          ru: 'Материал',
          de: 'Material',
        },
        value: {
          en: 'Plastic',
          tr: 'Plastik',
          ru: 'Пластик',
          de: 'Kunststoff',
        },
      },
      {
        label: { en: 'Design', tr: 'Yapı', ru: 'Конструкция', de: 'Bauart' },
        value: {
          en: 'Side Locking',
          tr: 'Yandan Kilitli',
          ru: 'с боковым замком',
          de: 'seitlich abschließbar',
        },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/tank-caps/S280-17.jpg'],
  },
  {
    id: 'prod-s280-19',
    slug: 's280-19-fuel-tank-cap-40mm-biodiesel',
    smrCode: 'S280-19',
    categoryId: 'cat-tank-caps',
    subcategoryId: 'subcat-fuel-cap',
    title: {
      en: 'Bio Diesel 40 mm Fuel Tank Cap',
      tr: "Bio Dizel 40'lık Depo Kapağı",
      ru: 'Крышка топливного бака для биодизеля 40 мм',
      de: 'Tankdeckel für Biodiesel 40 mm',
    },
    description: {
      en: '40 mm tank cap for biodiesel fuel tanks.',
      tr: "Biyodizel yakıt depoları için 40'lık depo kapağı.",
      ru: 'Крышка 40 мм для топливных баков с биодизелем.',
      de: 'Tankdeckel 40 mm für Biodiesel-Kraftstofftanks.',
    },
    specs: [
      {
        label: {
          en: 'Cap size',
          tr: 'Kapak ölçüsü',
          ru: 'Размер крышки',
          de: 'Deckelgröße',
        },
        value: { en: '40 mm', tr: '40 mm', ru: '40 мм', de: '40 mm' },
      },
      {
        label: {
          en: 'Intended for',
          tr: 'Kullanım alanı',
          ru: 'Назначение',
          de: 'Verwendung',
        },
        value: {
          en: 'Biodiesel',
          tr: 'Biyodizel',
          ru: 'Биодизель',
          de: 'Biodiesel',
        },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/tank-caps/S280-19.jpg'],
  },
  {
    id: 'prod-s280-10',
    slug: 's280-10-adblue-tank-cap-60mm-scania',
    smrCode: 'S280-10',
    categoryId: 'cat-tank-caps',
    subcategoryId: 'subcat-adblue-fuel-cap',
    title: {
      en: 'AdBlue 60 mm Tank Cap for Scania',
      tr: "Adblue 60'lık Scania Depo Kapağı",
      ru: 'Крышка бака AdBlue 60 мм для Scania',
      de: 'AdBlue-Tankdeckel 60 mm für Scania',
    },
    description: {
      en: 'Tank cap 60 mm for the AdBlue tank of Scania vehicles.',
      tr: 'Adblue deposu için 60 mm depo kapağı (Scania).',
      ru: 'Крышка 60 мм для бака AdBlue автомобилей Scania.',
      de: 'Tankdeckel 60 mm für den AdBlue-Tank von Scania-Fahrzeugen.',
    },
    specs: [
      {
        label: {
          en: 'Cap size',
          tr: 'Kapak ölçüsü',
          ru: 'Размер крышки',
          de: 'Deckelgröße',
        },
        value: { en: '60 mm', tr: '60 mm', ru: '60 мм', de: '60 mm' },
      },
      {
        label: {
          en: 'Intended for',
          tr: 'Kullanım alanı',
          ru: 'Назначение',
          de: 'Verwendung',
        },
        value: { en: 'AdBlue', tr: 'AdBlue', ru: 'AdBlue', de: 'AdBlue' },
      },
      {
        label: { en: 'Vehicle', tr: 'Araç', ru: 'Автомобиль', de: 'Fahrzeug' },
        value: { en: 'Scania', tr: 'Scania', ru: 'Scania', de: 'Scania' },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/tank-caps/S280-10.jpg'],
  },
  {
    id: 'prod-s280-11',
    slug: 's280-11-adblue-tank-cap-60mm-iveco',
    smrCode: 'S280-11',
    categoryId: 'cat-tank-caps',
    subcategoryId: 'subcat-adblue-fuel-cap',
    title: {
      en: 'AdBlue 60 mm Tank Cap for Iveco',
      tr: "Adblue 60'lık Iveco Depo Kapağı",
      ru: 'Крышка бака AdBlue 60 мм для Iveco',
      de: 'AdBlue-Tankdeckel 60 mm für Iveco',
    },
    description: {
      en: 'Tank cap 60 mm for the AdBlue tank of Iveco vehicles.',
      tr: 'Adblue deposu için 60 mm depo kapağı (Iveco).',
      ru: 'Крышка 60 мм для бака AdBlue автомобилей Iveco.',
      de: 'Tankdeckel 60 mm für den AdBlue-Tank von Iveco-Fahrzeugen.',
    },
    specs: [
      {
        label: {
          en: 'Cap size',
          tr: 'Kapak ölçüsü',
          ru: 'Размер крышки',
          de: 'Deckelgröße',
        },
        value: { en: '60 mm', tr: '60 mm', ru: '60 мм', de: '60 mm' },
      },
      {
        label: {
          en: 'Intended for',
          tr: 'Kullanım alanı',
          ru: 'Назначение',
          de: 'Verwendung',
        },
        value: { en: 'AdBlue', tr: 'AdBlue', ru: 'AdBlue', de: 'AdBlue' },
      },
      {
        label: { en: 'Vehicle', tr: 'Araç', ru: 'Автомобиль', de: 'Fahrzeug' },
        value: { en: 'Iveco', tr: 'Iveco', ru: 'Iveco', de: 'Iveco' },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/tank-caps/S280-11.jpg'],
  },
  {
    id: 'prod-s280-12',
    slug: 's280-12-adblue-tank-cap-40mm',
    smrCode: 'S280-12',
    categoryId: 'cat-tank-caps',
    subcategoryId: 'subcat-adblue-fuel-cap',
    title: {
      en: 'AdBlue 40 mm Tank Cap',
      tr: "Adblue 40'lık Depo Kapağı",
      ru: 'Крышка бака AdBlue 40 мм',
      de: 'AdBlue-Tankdeckel 40 mm',
    },
    description: {
      en: 'Tank cap 40 mm for the AdBlue tank of trucks.',
      tr: 'Adblue deposu için 40 mm depo kapağı.',
      ru: 'Крышка 40 мм для бака AdBlue грузовых автомобилей.',
      de: 'Tankdeckel 40 mm für den AdBlue-Tank von Lkw.',
    },
    specs: [
      {
        label: {
          en: 'Cap size',
          tr: 'Kapak ölçüsü',
          ru: 'Размер крышки',
          de: 'Deckelgröße',
        },
        value: { en: '40 mm', tr: '40 mm', ru: '40 мм', de: '40 mm' },
      },
      {
        label: {
          en: 'Intended for',
          tr: 'Kullanım alanı',
          ru: 'Назначение',
          de: 'Verwendung',
        },
        value: { en: 'AdBlue', tr: 'AdBlue', ru: 'AdBlue', de: 'AdBlue' },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/tank-caps/S280-12.jpg'],
  },
  {
    id: 'prod-s280-18',
    slug: 's280-18-adblue-tank-cap-40mm-nolock-tail',
    smrCode: 'S280-18',
    categoryId: 'cat-tank-caps',
    subcategoryId: 'subcat-adblue-fuel-cap',
    title: {
      en: 'AdBlue 40 mm Tank Cap, Non-Locking, With Tail',
      tr: "Adblue 40'lık Depo Kapağı Kilitsiz Kuyruklu",
      ru: 'Крышка бака AdBlue 40 мм, без замка, с хвостовиком',
      de: 'AdBlue-Tankdeckel 40 mm, nicht abschließbar, mit Lasche',
    },
    description: {
      en: 'Tank cap 40 mm for the AdBlue tank of trucks, non-locking, with tail.',
      tr: 'Adblue deposu için 40 mm depo kapağı, kilitsiz kuyruklu.',
      ru: 'Крышка 40 мм для бака AdBlue грузовых автомобилей, без замка, с хвостовиком.',
      de: 'Tankdeckel 40 mm für den AdBlue-Tank von Lkw, nicht abschließbar, mit Lasche.',
    },
    specs: [
      {
        label: {
          en: 'Cap size',
          tr: 'Kapak ölçüsü',
          ru: 'Размер крышки',
          de: 'Deckelgröße',
        },
        value: { en: '40 mm', tr: '40 mm', ru: '40 мм', de: '40 mm' },
      },
      {
        label: {
          en: 'Intended for',
          tr: 'Kullanım alanı',
          ru: 'Назначение',
          de: 'Verwendung',
        },
        value: { en: 'AdBlue', tr: 'AdBlue', ru: 'AdBlue', de: 'AdBlue' },
      },
      {
        label: { en: 'Design', tr: 'Yapı', ru: 'Конструкция', de: 'Bauart' },
        value: {
          en: 'Non-Locking, With Tail',
          tr: 'Kilitsiz Kuyruklu',
          ru: 'без замка, с хвостовиком',
          de: 'nicht abschließbar, mit Lasche',
        },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/tank-caps/S280-18.jpg'],
  },
  {
    id: 'prod-s280-21',
    slug: 's280-21-adblue-tank-cap-40mm-nolock',
    smrCode: 'S280-21',
    categoryId: 'cat-tank-caps',
    subcategoryId: 'subcat-adblue-fuel-cap',
    title: {
      en: 'AdBlue 40 mm Tank Cap, Non-Locking',
      tr: "Adblue 40'lık Depo Kapağı Kilitsiz",
      ru: 'Крышка бака AdBlue 40 мм, без замка',
      de: 'AdBlue-Tankdeckel 40 mm, nicht abschließbar',
    },
    description: {
      en: 'Tank cap 40 mm for the AdBlue tank of trucks, non-locking.',
      tr: 'Adblue deposu için 40 mm depo kapağı, kilitsiz.',
      ru: 'Крышка 40 мм для бака AdBlue грузовых автомобилей, без замка.',
      de: 'Tankdeckel 40 mm für den AdBlue-Tank von Lkw, nicht abschließbar.',
    },
    specs: [
      {
        label: {
          en: 'Cap size',
          tr: 'Kapak ölçüsü',
          ru: 'Размер крышки',
          de: 'Deckelgröße',
        },
        value: { en: '40 mm', tr: '40 mm', ru: '40 мм', de: '40 mm' },
      },
      {
        label: {
          en: 'Intended for',
          tr: 'Kullanım alanı',
          ru: 'Назначение',
          de: 'Verwendung',
        },
        value: { en: 'AdBlue', tr: 'AdBlue', ru: 'AdBlue', de: 'AdBlue' },
      },
      {
        label: { en: 'Design', tr: 'Yapı', ru: 'Конструкция', de: 'Bauart' },
        value: {
          en: 'Non-Locking',
          tr: 'Kilitsiz',
          ru: 'без замка',
          de: 'nicht abschließbar',
        },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/placeholder.png'],
  },
  {
    id: 'prod-s280-22',
    slug: 's280-22-adblue-tank-cap-40mm-lock',
    smrCode: 'S280-22',
    categoryId: 'cat-tank-caps',
    subcategoryId: 'subcat-anti-theft-lock',
    title: {
      en: 'AdBlue 40 mm Tank Cap, Locking',
      tr: "Adblue 40'lık Depo Kapağı Kilitli",
      ru: 'Крышка бака AdBlue 40 мм, с замком',
      de: 'AdBlue-Tankdeckel 40 mm, abschließbar',
    },
    description: {
      en: 'Tank cap 40 mm for the AdBlue tank of trucks, locking.',
      tr: 'Adblue deposu için 40 mm depo kapağı, kilitli.',
      ru: 'Крышка 40 мм для бака AdBlue грузовых автомобилей, с замком.',
      de: 'Tankdeckel 40 mm für den AdBlue-Tank von Lkw, abschließbar.',
    },
    specs: [
      {
        label: {
          en: 'Cap size',
          tr: 'Kapak ölçüsü',
          ru: 'Размер крышки',
          de: 'Deckelgröße',
        },
        value: { en: '40 mm', tr: '40 mm', ru: '40 мм', de: '40 mm' },
      },
      {
        label: {
          en: 'Intended for',
          tr: 'Kullanım alanı',
          ru: 'Назначение',
          de: 'Verwendung',
        },
        value: { en: 'AdBlue', tr: 'AdBlue', ru: 'AdBlue', de: 'AdBlue' },
      },
      {
        label: { en: 'Design', tr: 'Yapı', ru: 'Конструкция', de: 'Bauart' },
        value: {
          en: 'Locking',
          tr: 'Kilitli',
          ru: 'с замком',
          de: 'abschließbar',
        },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/tank-caps/S280-22.jpg'],
  },
  {
    id: 'prod-s280-23',
    slug: 's280-23-adblue-tank-cap-b60-plastic-rv',
    smrCode: 'S280-23',
    categoryId: 'cat-tank-caps',
    subcategoryId: 'subcat-adblue-fuel-cap',
    title: {
      en: 'AdBlue B60 Plastic Tank Cap for Renault-Volvo',
      tr: 'Adblue B60 Reno-Volvo Plastik Depo Kapağı',
      ru: 'Пластиковая крышка бака AdBlue B60 для Renault-Volvo',
      de: 'AdBlue-Tankdeckel B60 aus Kunststoff für Renault-Volvo',
    },
    description: {
      en: 'Plastic tank cap B60 for the AdBlue tank of Renault-Volvo vehicles.',
      tr: 'Adblue deposu için B60 plastik depo kapağı (Reno-Volvo).',
      ru: 'Пластиковая крышка B60 для бака AdBlue автомобилей Renault-Volvo.',
      de: 'Kunststoff-Tankdeckel B60 für den AdBlue-Tank von Renault-Volvo-Fahrzeugen.',
    },
    specs: [
      {
        label: {
          en: 'Cap size',
          tr: 'Kapak ölçüsü',
          ru: 'Размер крышки',
          de: 'Deckelgröße',
        },
        value: { en: 'B60', tr: 'B60', ru: 'B60', de: 'B60' },
      },
      {
        label: {
          en: 'Intended for',
          tr: 'Kullanım alanı',
          ru: 'Назначение',
          de: 'Verwendung',
        },
        value: { en: 'AdBlue', tr: 'AdBlue', ru: 'AdBlue', de: 'AdBlue' },
      },
      {
        label: {
          en: 'Material',
          tr: 'Malzeme',
          ru: 'Материал',
          de: 'Material',
        },
        value: {
          en: 'Plastic',
          tr: 'Plastik',
          ru: 'Пластик',
          de: 'Kunststoff',
        },
      },
      {
        label: { en: 'Vehicle', tr: 'Araç', ru: 'Автомобиль', de: 'Fahrzeug' },
        value: {
          en: 'Renault-Volvo',
          tr: 'Renault-Volvo',
          ru: 'Renault-Volvo',
          de: 'Renault-Volvo',
        },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/placeholder.png'],
  },
  // ───────────── Hub caps  (cat-hub-caps) ─────────────
  {
    id: 'prod-tmp-9899',
    slug: 'tmp-9899-hub-cap-m230x3',
    smrCode: 'TMP 9899',
    oemNumbers: [
      '03.212.27.01.0',
      '10.10605',
      '08171',
      '404.111-00',
      '070.076',
      '52132',
    ],
    categoryId: 'cat-hub-caps',

    title: {
      en: 'Hub Cap, External Thread M230x3 (SW120)',
      tr: 'Porya Kapağı (Dıştan Dişli) - M230 x 3 (SW120)',
      ru: 'Колпак ступицы, наружная резьба M230x3 (SW120)',
      de: 'Radnabenkappe, Außengewinde M230x3 (SW120)',
    },
    description: {
      en: 'Hub cap with external thread M230x3 for truck and trailer axle hubs, wrench size SW120.',
      tr: 'Çekici ve römork aks porya kapağı, dıştan dişli M230x3, anahtar ağzı SW120.',
      ru: 'Колпак ступицы с наружной резьбой M230x3 для ступиц осей грузовиков и прицепов, размер под ключ SW120.',
      de: 'Radnabenkappe mit Außengewinde M230x3 für Achsnaben von Lkw und Anhängern, Schlüsselweite SW120.',
    },
    specs: [
      {
        label: { en: 'Thread', tr: 'Diş', ru: 'Резьба', de: 'Gewinde' },
        value: { en: 'M230x3', tr: 'M230x3', ru: 'M230x3', de: 'M230x3' },
      },
      {
        label: {
          en: 'Thread type',
          tr: 'Diş tipi',
          ru: 'Тип резьбы',
          de: 'Gewindeart',
        },
        value: {
          en: 'External thread',
          tr: 'Dıştan dişli',
          ru: 'Наружная резьба',
          de: 'Außengewinde',
        },
      },
      {
        label: {
          en: 'Wrench size (SW)',
          tr: 'Anahtar ağzı (SW)',
          ru: 'Размер под ключ (SW)',
          de: 'Schlüsselweite (SW)',
        },
        value: { en: 'SW120', tr: 'SW120', ru: 'SW120', de: 'SW120' },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/hub-caps/TMP9899.jpg'],
  },
  {
    id: 'prod-tmp-9895',
    slug: 'tmp-9895-hub-cap-m155x3',
    smrCode: 'TMP 9895',
    oemNumbers: [
      '03.212.26.01.0',
      '10.10603',
      '05949',
      '046.136-00',
      '11.080.0244.450',
      '070.071',
      '52127',
    ],
    categoryId: 'cat-hub-caps',

    title: {
      en: 'Hub Cap, External Thread M155x3 (SW120)',
      tr: 'Porya Kapağı (Dıştan Dişli) - M155 x 3 (SW120)',
      ru: 'Колпак ступицы, наружная резьба M155x3 (SW120)',
      de: 'Radnabenkappe, Außengewinde M155x3 (SW120)',
    },
    description: {
      en: 'Hub cap with external thread M155x3 for truck and trailer axle hubs, wrench size SW120, max. torque 700 Nm.',
      tr: 'Çekici ve römork aks porya kapağı, dıştan dişli M155x3, anahtar ağzı SW120, maksimum tork 700 Nm.',
      ru: 'Колпак ступицы с наружной резьбой M155x3 для ступиц осей грузовиков и прицепов, размер под ключ SW120, макс. крутящий момент 700 Нм.',
      de: 'Radnabenkappe mit Außengewinde M155x3 für Achsnaben von Lkw und Anhängern, Schlüsselweite SW120, max. Drehmoment 700 Nm.',
    },
    specs: [
      {
        label: { en: 'Thread', tr: 'Diş', ru: 'Резьба', de: 'Gewinde' },
        value: { en: 'M155x3', tr: 'M155x3', ru: 'M155x3', de: 'M155x3' },
      },
      {
        label: {
          en: 'Thread type',
          tr: 'Diş tipi',
          ru: 'Тип резьбы',
          de: 'Gewindeart',
        },
        value: {
          en: 'External thread',
          tr: 'Dıştan dişli',
          ru: 'Наружная резьба',
          de: 'Außengewinde',
        },
      },
      {
        label: {
          en: 'Wrench size (SW)',
          tr: 'Anahtar ağzı (SW)',
          ru: 'Размер под ключ (SW)',
          de: 'Schlüsselweite (SW)',
        },
        value: { en: 'SW120', tr: 'SW120', ru: 'SW120', de: 'SW120' },
      },
      {
        label: {
          en: 'Max. torque',
          tr: 'Maksimum tork',
          ru: 'Макс. крутящий момент',
          de: 'Max. Drehmoment',
        },
        value: { en: '700 Nm', tr: '700 Nm', ru: '700 Нм', de: '700 Nm' },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/hub-caps/TMP9899.jpg'],
  },
  {
    id: 'prod-tmp-9894',
    slug: 'tmp-9894-hub-cap-m135x3',
    smrCode: 'TMP 9894',
    oemNumbers: [
      '03.212.25.02.0',
      '10.10601',
      '05948',
      '406.129-00',
      '11.080.0244.440',
      '070.070',
      '52126',
    ],
    categoryId: 'cat-hub-caps',

    title: {
      en: 'Hub Cap, External Thread M135x3 (SW120)',
      tr: 'Porya Kapağı (Dıştan Dişli) - M135 x 3 (SW120)',
      ru: 'Колпак ступицы, наружная резьба M135x3 (SW120)',
      de: 'Radnabenkappe, Außengewinde M135x3 (SW120)',
    },
    description: {
      en: 'Hub cap with external thread M135x3 for truck and trailer axle hubs, wrench size SW120, max. torque 700 Nm.',
      tr: 'Çekici ve römork aks porya kapağı, dıştan dişli M135x3, anahtar ağzı SW120, maksimum tork 700 Nm.',
      ru: 'Колпак ступицы с наружной резьбой M135x3 для ступиц осей грузовиков и прицепов, размер под ключ SW120, макс. крутящий момент 700 Нм.',
      de: 'Radnabenkappe mit Außengewinde M135x3 für Achsnaben von Lkw und Anhängern, Schlüsselweite SW120, max. Drehmoment 700 Nm.',
    },
    specs: [
      {
        label: { en: 'Thread', tr: 'Diş', ru: 'Резьба', de: 'Gewinde' },
        value: { en: 'M135x3', tr: 'M135x3', ru: 'M135x3', de: 'M135x3' },
      },
      {
        label: {
          en: 'Thread type',
          tr: 'Diş tipi',
          ru: 'Тип резьбы',
          de: 'Gewindeart',
        },
        value: {
          en: 'External thread',
          tr: 'Dıştan dişli',
          ru: 'Наружная резьба',
          de: 'Außengewinde',
        },
      },
      {
        label: {
          en: 'Wrench size (SW)',
          tr: 'Anahtar ağzı (SW)',
          ru: 'Размер под ключ (SW)',
          de: 'Schlüsselweite (SW)',
        },
        value: { en: 'SW120', tr: 'SW120', ru: 'SW120', de: 'SW120' },
      },
      {
        label: {
          en: 'Max. torque',
          tr: 'Maksimum tork',
          ru: 'Макс. крутящий момент',
          de: 'Max. Drehmoment',
        },
        value: { en: '700 Nm', tr: '700 Nm', ru: '700 Нм', de: '700 Nm' },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/hub-caps/TMP9899.jpg'],
  },
  {
    id: 'prod-tmp-9893',
    slug: 'tmp-9893-hub-cap-m125x3',
    smrCode: 'TMP 9893',
    oemNumbers: [
      '03.212.24.02.0',
      '10.10602',
      '04171',
      '046.135-00',
      '11.080.0241.110',
      '070.069',
      '52125',
    ],
    categoryId: 'cat-hub-caps',

    title: {
      en: 'Hub Cap, External Thread M125x3 (SW120)',
      tr: 'Porya Kapağı (Dıştan Dişli) - M125 x 3 (SW120)',
      ru: 'Колпак ступицы, наружная резьба M125x3 (SW120)',
      de: 'Radnabenkappe, Außengewinde M125x3 (SW120)',
    },
    description: {
      en: 'Hub cap with external thread M125x3 for truck and trailer axle hubs, wrench size SW120, max. torque 700 Nm.',
      tr: 'Çekici ve römork aks porya kapağı, dıştan dişli M125x3, anahtar ağzı SW120, maksimum tork 700 Nm.',
      ru: 'Колпак ступицы с наружной резьбой M125x3 для ступиц осей грузовиков и прицепов, размер под ключ SW120, макс. крутящий момент 700 Нм.',
      de: 'Radnabenkappe mit Außengewinde M125x3 für Achsnaben von Lkw und Anhängern, Schlüsselweite SW120, max. Drehmoment 700 Nm.',
    },
    specs: [
      {
        label: { en: 'Thread', tr: 'Diş', ru: 'Резьба', de: 'Gewinde' },
        value: { en: 'M125x3', tr: 'M125x3', ru: 'M125x3', de: 'M125x3' },
      },
      {
        label: {
          en: 'Thread type',
          tr: 'Diş tipi',
          ru: 'Тип резьбы',
          de: 'Gewindeart',
        },
        value: {
          en: 'External thread',
          tr: 'Dıştan dişli',
          ru: 'Наружная резьба',
          de: 'Außengewinde',
        },
      },
      {
        label: {
          en: 'Wrench size (SW)',
          tr: 'Anahtar ağzı (SW)',
          ru: 'Размер под ключ (SW)',
          de: 'Schlüsselweite (SW)',
        },
        value: { en: 'SW120', tr: 'SW120', ru: 'SW120', de: 'SW120' },
      },
      {
        label: {
          en: 'Max. torque',
          tr: 'Maksimum tork',
          ru: 'Макс. крутящий момент',
          de: 'Max. Drehmoment',
        },
        value: { en: '700 Nm', tr: '700 Nm', ru: '700 Нм', de: '700 Nm' },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/hub-caps/TMP9899.jpg'],
  },
  {
    id: 'prod-tmp-9892',
    slug: 'tmp-9892-hub-cap-m115x3',
    smrCode: 'TMP 9892',
    oemNumbers: [
      '03.212.23.02.0',
      '10.10608',
      '04170',
      '046.134-00',
      '11.080.0241.100',
      '070.067',
      '52123',
    ],
    categoryId: 'cat-hub-caps',

    title: {
      en: 'Hub Cap, External Thread M115x3 (SW95)',
      tr: 'Porya Kapağı (Dıştan Dişli) - M115 x 3 (SW95)',
      ru: 'Колпак ступицы, наружная резьба M115x3 (SW95)',
      de: 'Radnabenkappe, Außengewinde M115x3 (SW95)',
    },
    description: {
      en: 'Hub cap with external thread M115x3 for truck and trailer axle hubs, wrench size SW95, max. torque 700 Nm.',
      tr: 'Çekici ve römork aks porya kapağı, dıştan dişli M115x3, anahtar ağzı SW95, maksimum tork 700 Nm.',
      ru: 'Колпак ступицы с наружной резьбой M115x3 для ступиц осей грузовиков и прицепов, размер под ключ SW95, макс. крутящий момент 700 Нм.',
      de: 'Radnabenkappe mit Außengewinde M115x3 für Achsnaben von Lkw und Anhängern, Schlüsselweite SW95, max. Drehmoment 700 Nm.',
    },
    specs: [
      {
        label: { en: 'Thread', tr: 'Diş', ru: 'Резьба', de: 'Gewinde' },
        value: { en: 'M115x3', tr: 'M115x3', ru: 'M115x3', de: 'M115x3' },
      },
      {
        label: {
          en: 'Thread type',
          tr: 'Diş tipi',
          ru: 'Тип резьбы',
          de: 'Gewindeart',
        },
        value: {
          en: 'External thread',
          tr: 'Dıştan dişli',
          ru: 'Наружная резьба',
          de: 'Außengewinde',
        },
      },
      {
        label: {
          en: 'Wrench size (SW)',
          tr: 'Anahtar ağzı (SW)',
          ru: 'Размер под ключ (SW)',
          de: 'Schlüsselweite (SW)',
        },
        value: { en: 'SW95', tr: 'SW95', ru: 'SW95', de: 'SW95' },
      },
      {
        label: {
          en: 'Max. torque',
          tr: 'Maksimum tork',
          ru: 'Макс. крутящий момент',
          de: 'Max. Drehmoment',
        },
        value: { en: '700 Nm', tr: '700 Nm', ru: '700 Нм', de: '700 Nm' },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/hub-caps/TMP9899.jpg'],
  },
  {
    id: 'prod-tmp-97262',
    slug: 'tmp-97262-hub-cap-m136x2-5',
    smrCode: 'TMP 97262',
    categoryId: 'cat-hub-caps',

    title: {
      en: 'Economy Hub Cap, Internal Thread M136x2.5',
      tr: 'Eko Porya Kapağı (İçten Dişli) - M136 x 2,5',
      ru: 'Колпак ступицы «Эко», внутренняя резьба M136x2,5',
      de: 'Radnabenkappe Eco, Innengewinde M136x2,5',
    },
    description: {
      en: 'Hub cap with internal thread M136x2.5 for truck and trailer axle hubs.',
      tr: 'Çekici ve römork aks porya kapağı, i̇çten dişli M136x2,5.',
      ru: 'Колпак ступицы с внутренней резьбой M136x2,5 для ступиц осей грузовиков и прицепов.',
      de: 'Radnabenkappe mit Innengewinde M136x2,5 für Achsnaben von Lkw und Anhängern.',
    },
    specs: [
      {
        label: { en: 'Thread', tr: 'Diş', ru: 'Резьба', de: 'Gewinde' },
        value: {
          en: 'M136x2.5',
          tr: 'M136x2.5',
          ru: 'M136x2.5',
          de: 'M136x2.5',
        },
      },
      {
        label: {
          en: 'Thread type',
          tr: 'Diş tipi',
          ru: 'Тип резьбы',
          de: 'Gewindeart',
        },
        value: {
          en: 'Internal thread',
          tr: 'İçten dişli',
          ru: 'Внутренняя резьба',
          de: 'Innengewinde',
        },
      },
      {
        label: {
          en: 'Version',
          tr: 'Versiyon',
          ru: 'Исполнение',
          de: 'Ausführung',
        },
        value: { en: 'Economy', tr: 'Eko', ru: 'Эконом', de: 'Eco' },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/hub-caps/TMP9724.jpg'],
  },
  {
    id: 'prod-tmp-9726',
    slug: 'tmp-9726-hub-cap-m135x2',
    smrCode: 'TMP 9726',
    categoryId: 'cat-hub-caps',

    title: {
      en: 'Hub Cap, Internal Thread M135x2',
      tr: 'Porya Kapağı (İçten Dişli) - M135 x 2',
      ru: 'Колпак ступицы, внутренняя резьба M135x2',
      de: 'Radnabenkappe, Innengewinde M135x2',
    },
    description: {
      en: 'Hub cap with internal thread M135x2 for truck and trailer axle hubs.',
      tr: 'Çekici ve römork aks porya kapağı, i̇çten dişli M135x2.',
      ru: 'Колпак ступицы с внутренней резьбой M135x2 для ступиц осей грузовиков и прицепов.',
      de: 'Radnabenkappe mit Innengewinde M135x2 für Achsnaben von Lkw und Anhängern.',
    },
    specs: [
      {
        label: { en: 'Thread', tr: 'Diş', ru: 'Резьба', de: 'Gewinde' },
        value: { en: 'M135x2', tr: 'M135x2', ru: 'M135x2', de: 'M135x2' },
      },
      {
        label: {
          en: 'Thread type',
          tr: 'Diş tipi',
          ru: 'Тип резьбы',
          de: 'Gewindeart',
        },
        value: {
          en: 'Internal thread',
          tr: 'İçten dişli',
          ru: 'Внутренняя резьба',
          de: 'Innengewinde',
        },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/hub-caps/TMP9724.jpg'],
  },
  {
    id: 'prod-tmp-9724',
    slug: 'tmp-9724-hub-cap-m125x2',
    smrCode: 'TMP 9724',
    categoryId: 'cat-hub-caps',

    title: {
      en: 'Hub Cap, Internal Thread M125x2',
      tr: 'Porya Kapağı (İçten Dişli) - M125 x 2',
      ru: 'Колпак ступицы, внутренняя резьба M125x2',
      de: 'Radnabenkappe, Innengewinde M125x2',
    },
    description: {
      en: 'Hub cap with internal thread M125x2 for truck and trailer axle hubs.',
      tr: 'Çekici ve römork aks porya kapağı, i̇çten dişli M125x2.',
      ru: 'Колпак ступицы с внутренней резьбой M125x2 для ступиц осей грузовиков и прицепов.',
      de: 'Radnabenkappe mit Innengewinde M125x2 für Achsnaben von Lkw und Anhängern.',
    },
    specs: [
      {
        label: { en: 'Thread', tr: 'Diş', ru: 'Резьба', de: 'Gewinde' },
        value: { en: 'M125x2', tr: 'M125x2', ru: 'M125x2', de: 'M125x2' },
      },
      {
        label: {
          en: 'Thread type',
          tr: 'Diş tipi',
          ru: 'Тип резьбы',
          de: 'Gewindeart',
        },
        value: {
          en: 'Internal thread',
          tr: 'İçten dişli',
          ru: 'Внутренняя резьба',
          de: 'Innengewinde',
        },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/hub-caps/TMP9724.jpg'],
  },
  {
    id: 'prod-tmp-9652',
    slug: 'tmp-9652-hub-cap-m125x2',
    smrCode: 'TMP 9652',
    categoryId: 'cat-hub-caps',

    title: {
      en: 'Hub Cap, External Thread M125x2',
      tr: 'Porya Kapağı (Dıştan Dişli) - M125 x 2',
      ru: 'Колпак ступицы, наружная резьба M125x2',
      de: 'Radnabenkappe, Außengewinde M125x2',
    },
    description: {
      en: 'Hub cap with external thread M125x2 for truck and trailer axle hubs.',
      tr: 'Çekici ve römork aks porya kapağı, dıştan dişli M125x2.',
      ru: 'Колпак ступицы с наружной резьбой M125x2 для ступиц осей грузовиков и прицепов.',
      de: 'Radnabenkappe mit Außengewinde M125x2 für Achsnaben von Lkw und Anhängern.',
    },
    specs: [
      {
        label: { en: 'Thread', tr: 'Diş', ru: 'Резьба', de: 'Gewinde' },
        value: { en: 'M125x2', tr: 'M125x2', ru: 'M125x2', de: 'M125x2' },
      },
      {
        label: {
          en: 'Thread type',
          tr: 'Diş tipi',
          ru: 'Тип резьбы',
          de: 'Gewindeart',
        },
        value: {
          en: 'External thread',
          tr: 'Dıştan dişli',
          ru: 'Наружная резьба',
          de: 'Außengewinde',
        },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/hub-caps/TMP9652.jpg'],
  },
  {
    id: 'prod-tmp-9652-colakoglu',
    slug: 'tmp-9652-hub-cap-m125x2-colakoglu',
    smrCode: 'TMP 9652',
    categoryId: 'cat-hub-caps',

    title: {
      en: 'Hub Cap, External Thread M125x2 (Çolakoğlu)',
      tr: 'Porya Kapağı (Dıştan Dişli) - M125 x 2 (Çolakoğlu)',
      ru: 'Колпак ступицы, наружная резьба M125x2 (Çolakoğlu)',
      de: 'Radnabenkappe, Außengewinde M125x2 (Çolakoğlu)',
    },
    description: {
      en: 'Hub cap with external thread M125x2 for truck and trailer axle hubs.',
      tr: 'Çekici ve römork aks porya kapağı, dıştan dişli M125x2.',
      ru: 'Колпак ступицы с наружной резьбой M125x2 для ступиц осей грузовиков и прицепов.',
      de: 'Radnabenkappe mit Außengewinde M125x2 für Achsnaben von Lkw und Anhängern.',
    },
    specs: [
      {
        label: { en: 'Thread', tr: 'Diş', ru: 'Резьба', de: 'Gewinde' },
        value: { en: 'M125x2', tr: 'M125x2', ru: 'M125x2', de: 'M125x2' },
      },
      {
        label: {
          en: 'Thread type',
          tr: 'Diş tipi',
          ru: 'Тип резьбы',
          de: 'Gewindeart',
        },
        value: {
          en: 'External thread',
          tr: 'Dıştan dişli',
          ru: 'Наружная резьба',
          de: 'Außengewinde',
        },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/hub-caps/TMP9652.jpg'],
  },
  {
    id: 'prod-tmp-9650',
    slug: 'tmp-9650-hub-cap-m115x2',
    smrCode: 'TMP 9650',
    categoryId: 'cat-hub-caps',

    title: {
      en: 'Hub Cap, External Thread M115x2',
      tr: 'Porya Kapağı (Dıştan Dişli) - M115 x 2',
      ru: 'Колпак ступицы, наружная резьба M115x2',
      de: 'Radnabenkappe, Außengewinde M115x2',
    },
    description: {
      en: 'Hub cap with external thread M115x2 for truck and trailer axle hubs.',
      tr: 'Çekici ve römork aks porya kapağı, dıştan dişli M115x2.',
      ru: 'Колпак ступицы с наружной резьбой M115x2 для ступиц осей грузовиков и прицепов.',
      de: 'Radnabenkappe mit Außengewinde M115x2 für Achsnaben von Lkw und Anhängern.',
    },
    specs: [
      {
        label: { en: 'Thread', tr: 'Diş', ru: 'Резьба', de: 'Gewinde' },
        value: { en: 'M115x2', tr: 'M115x2', ru: 'M115x2', de: 'M115x2' },
      },
      {
        label: {
          en: 'Thread type',
          tr: 'Diş tipi',
          ru: 'Тип резьбы',
          de: 'Gewindeart',
        },
        value: {
          en: 'External thread',
          tr: 'Dıştan dişli',
          ru: 'Наружная резьба',
          de: 'Außengewinde',
        },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/hub-caps/TMP9650.jpg'],
  },
  {
    id: 'prod-tmp-6700',
    slug: 'tmp-6700-sae-gigant-hub-cap',
    smrCode: 'TMP 6700',
    categoryId: 'cat-hub-caps',

    title: {
      en: 'SAE GIGANT Hub Cap',
      tr: 'SAE GIGANT Porya Kapağı',
      ru: 'Колпак ступицы SAE GIGANT',
      de: 'Radnabenkappe SAE GIGANT',
    },
    description: {
      en: 'SAE GIGANT hub cap for truck and trailer axle hubs.',
      tr: 'Çekici ve römork aks porya kapağı, SAE GIGANT.',
      ru: 'Колпак ступицы SAE GIGANT для ступиц осей грузовиков и прицепов.',
      de: 'Radnabenkappe SAE GIGANT für Achsnaben von Lkw und Anhängern.',
    },
    specs: [
      {
        label: {
          en: 'Application',
          tr: 'Uygulama',
          ru: 'Применение',
          de: 'Anwendung',
        },
        value: {
          en: 'SAE GIGANT',
          tr: 'SAE GIGANT',
          ru: 'SAE GIGANT',
          de: 'SAE GIGANT',
        },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/hub-caps/TMP6700.jpg'],
  },
  {
    id: 'prod-tmp-6601',
    slug: 'tmp-6601-sae-gigant-hub-cap-m165x2-sw148',
    smrCode: 'TMP 6601',
    categoryId: 'cat-hub-caps',

    title: {
      en: 'SAE GIGANT Hub Cap M165x2 / SW148',
      tr: 'SAE GIGANT Porya Kapağı M165x2 / SW148',
      ru: 'Колпак ступицы SAE GIGANT M165x2 / SW148',
      de: 'Radnabenkappe SAE GIGANT M165x2 / SW148',
    },
    description: {
      en: 'SAE GIGANT hub cap for truck and trailer axle hubs. Thread M165x2, wrench size SW148.',
      tr: 'Çekici ve römork aks porya kapağı, SAE GIGANT. Diş M165x2, anahtar ağzı SW148.',
      ru: 'Колпак ступицы SAE GIGANT для ступиц осей грузовиков и прицепов. Резьба M165x2, размер под ключ SW148.',
      de: 'Radnabenkappe SAE GIGANT für Achsnaben von Lkw und Anhängern. Gewinde M165x2, Schlüsselweite SW148.',
    },
    specs: [
      {
        label: {
          en: 'Application',
          tr: 'Uygulama',
          ru: 'Применение',
          de: 'Anwendung',
        },
        value: {
          en: 'SAE GIGANT',
          tr: 'SAE GIGANT',
          ru: 'SAE GIGANT',
          de: 'SAE GIGANT',
        },
      },
      {
        label: { en: 'Thread', tr: 'Diş', ru: 'Резьба', de: 'Gewinde' },
        value: { en: 'M165x2', tr: 'M165x2', ru: 'M165x2', de: 'M165x2' },
      },
      {
        label: {
          en: 'Wrench size (SW)',
          tr: 'Anahtar ağzı (SW)',
          ru: 'Размер под ключ (SW)',
          de: 'Schlüsselweite (SW)',
        },
        value: { en: 'SW148', tr: 'SW148', ru: 'SW148', de: 'SW148' },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/hub-caps/TMP6601.jpg'],
  },
  {
    id: 'prod-tmp-5832',
    slug: 'tmp-5832-smb-hub-cap',
    smrCode: 'TMP 5832',
    oemNumbers: ['M044554'],
    categoryId: 'cat-hub-caps',

    title: {
      en: 'SMB Hub Cap',
      tr: 'SMB Porya Kapağı',
      ru: 'Колпак ступицы SMB',
      de: 'Radnabenkappe SMB',
    },
    description: {
      en: 'SMB hub cap for truck and trailer axle hubs. Size designation: 158-Q8G-167.',
      tr: 'Çekici ve römork aks porya kapağı, SMB. Ölçü kodu: 158-Q8G-167.',
      ru: 'Колпак ступицы SMB для ступиц осей грузовиков и прицепов. Обозначение размера: 158-Q8G-167.',
      de: 'Radnabenkappe SMB für Achsnaben von Lkw und Anhängern. Maßbezeichnung: 158-Q8G-167.',
    },
    specs: [
      {
        label: {
          en: 'Application',
          tr: 'Uygulama',
          ru: 'Применение',
          de: 'Anwendung',
        },
        value: { en: 'SMB', tr: 'SMB', ru: 'SMB', de: 'SMB' },
      },
      {
        label: {
          en: 'Size designation',
          tr: 'Ölçü kodu',
          ru: 'Обозначение размера',
          de: 'Maßbezeichnung',
        },
        value: {
          en: '158-Q8G-167',
          tr: '158-Q8G-167',
          ru: '158-Q8G-167',
          de: '158-Q8G-167',
        },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/hub-caps/TMP5832.jpg'],
  },
  {
    id: 'prod-tmp-5831',
    slug: 'tmp-5831-fruehauf-hub-cap',
    smrCode: 'TMP 5831',
    oemNumbers: ['AJA 0577 001', '11.080.3504.340', '090.037', '57159'],
    categoryId: 'cat-hub-caps',

    title: {
      en: 'FRUEHAUF Hub Cap',
      tr: 'FRUEHAUF Porya Kapağı',
      ru: 'Колпак ступицы FRUEHAUF',
      de: 'Radnabenkappe FRUEHAUF',
    },
    description: {
      en: 'FRUEHAUF hub cap for truck and trailer axle hubs. Size designation: Ø158 W8G/167. Unpainted version also available.',
      tr: 'Çekici ve römork aks porya kapağı, FRUEHAUF. Ölçü kodu: Ø158 W8G/167. Boyasız versiyonu da mevcuttur.',
      ru: 'Колпак ступицы FRUEHAUF для ступиц осей грузовиков и прицепов. Обозначение размера: Ø158 W8G/167. Доступно также исполнение без покраски.',
      de: 'Radnabenkappe FRUEHAUF für Achsnaben von Lkw und Anhängern. Maßbezeichnung: Ø158 W8G/167. Auch in unlackierter Ausführung erhältlich.',
    },
    specs: [
      {
        label: {
          en: 'Application',
          tr: 'Uygulama',
          ru: 'Применение',
          de: 'Anwendung',
        },
        value: {
          en: 'FRUEHAUF',
          tr: 'FRUEHAUF',
          ru: 'FRUEHAUF',
          de: 'FRUEHAUF',
        },
      },
      {
        label: {
          en: 'Size designation',
          tr: 'Ölçü kodu',
          ru: 'Обозначение размера',
          de: 'Maßbezeichnung',
        },
        value: {
          en: 'Ø158 W8G/167',
          tr: 'Ø158 W8G/167',
          ru: 'Ø158 W8G/167',
          de: 'Ø158 W8G/167',
        },
      },
      {
        label: { en: 'Design', tr: 'Yapı', ru: 'Конструкция', de: 'Bauart' },
        value: {
          en: 'Unpainted version also available',
          tr: 'Boyasız versiyonu da mevcut',
          ru: 'Доступно исполнение без покраски',
          de: 'Auch unlackiert erhältlich',
        },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/hub-caps/TMP5831.jpg'],
  },
  {
    id: 'prod-tmp-5070',
    slug: 'tmp-5070-saf-hub-cap-9-140x165x42-5',
    smrCode: 'TMP 5070',
    oemNumbers: ['1 304 0016 00', '075.029', '52360'],
    categoryId: 'cat-hub-caps',

    title: {
      en: 'SAF Hub Cap 9/140x165x42.5',
      tr: 'SAF Porya Kapağı 9/140x165x42.5',
      ru: 'Колпак ступицы SAF 9/140x165x42.5',
      de: 'Radnabenkappe SAF 9/140x165x42.5',
    },
    description: {
      en: 'SAF hub cap for truck and trailer axle hubs. Dimensions: 9/140x165x42.5.',
      tr: 'Çekici ve römork aks porya kapağı, SAF. Ölçüler: 9/140x165x42.5.',
      ru: 'Колпак ступицы SAF для ступиц осей грузовиков и прицепов. Размеры: 9/140x165x42.5.',
      de: 'Radnabenkappe SAF für Achsnaben von Lkw und Anhängern. Abmessungen: 9/140x165x42.5.',
    },
    specs: [
      {
        label: {
          en: 'Application',
          tr: 'Uygulama',
          ru: 'Применение',
          de: 'Anwendung',
        },
        value: { en: 'SAF', tr: 'SAF', ru: 'SAF', de: 'SAF' },
      },
      {
        label: {
          en: 'Dimensions',
          tr: 'Ölçüler',
          ru: 'Размеры',
          de: 'Abmessungen',
        },
        value: {
          en: '9/140x165x42.5',
          tr: '9/140x165x42.5',
          ru: '9/140x165x42.5',
          de: '9/140x165x42.5',
        },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/hub-caps/TMP5070.jpg'],
  },
  {
    id: 'prod-tmp-19871',
    slug: 'tmp-19871-ror-hub-cap-8-5x188-5x24',
    smrCode: 'TMP 19871',
    oemNumbers: ['212 2 6038', '10.20603', '085.058', '54408'],
    categoryId: 'cat-hub-caps',

    title: {
      en: 'ROR Hub Cap 8.5x188.5x24',
      tr: 'ROR Porya Kapağı 8.5x188.5x24',
      ru: 'Колпак ступицы ROR 8.5x188.5x24',
      de: 'Radnabenkappe ROR 8.5x188.5x24',
    },
    description: {
      en: 'ROR hub cap for truck and trailer axle hubs. Dimensions: 8.5x188.5x24.',
      tr: 'Çekici ve römork aks porya kapağı, ROR. Ölçüler: 8.5x188.5x24.',
      ru: 'Колпак ступицы ROR для ступиц осей грузовиков и прицепов. Размеры: 8.5x188.5x24.',
      de: 'Radnabenkappe ROR für Achsnaben von Lkw und Anhängern. Abmessungen: 8.5x188.5x24.',
    },
    specs: [
      {
        label: {
          en: 'Application',
          tr: 'Uygulama',
          ru: 'Применение',
          de: 'Anwendung',
        },
        value: { en: 'ROR', tr: 'ROR', ru: 'ROR', de: 'ROR' },
      },
      {
        label: {
          en: 'Dimensions',
          tr: 'Ölçüler',
          ru: 'Размеры',
          de: 'Abmessungen',
        },
        value: {
          en: '8.5x188.5x24',
          tr: '8.5x188.5x24',
          ru: '8.5x188.5x24',
          de: '8.5x188.5x24',
        },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/hub-caps/TMP19871.jpg'],
  },
  {
    id: 'prod-tmp-1987',
    slug: 'tmp-1987-ror-hub-cap-9-162x15',
    smrCode: 'TMP 1987',
    oemNumbers: ['212 24 673', '10.20602', '085.023', '52900'],
    categoryId: 'cat-hub-caps',

    title: {
      en: 'ROR Hub Cap 9-162x15',
      tr: 'ROR Porya Kapağı 9-162x15',
      ru: 'Колпак ступицы ROR 9-162x15',
      de: 'Radnabenkappe ROR 9-162x15',
    },
    description: {
      en: 'ROR hub cap for truck and trailer axle hubs. Dimensions: 9-162x15.',
      tr: 'Çekici ve römork aks porya kapağı, ROR. Ölçüler: 9-162x15.',
      ru: 'Колпак ступицы ROR для ступиц осей грузовиков и прицепов. Размеры: 9-162x15.',
      de: 'Radnabenkappe ROR für Achsnaben von Lkw und Anhängern. Abmessungen: 9-162x15.',
    },
    specs: [
      {
        label: {
          en: 'Application',
          tr: 'Uygulama',
          ru: 'Применение',
          de: 'Anwendung',
        },
        value: { en: 'ROR', tr: 'ROR', ru: 'ROR', de: 'ROR' },
      },
      {
        label: {
          en: 'Dimensions',
          tr: 'Ölçüler',
          ru: 'Размеры',
          de: 'Abmessungen',
        },
        value: {
          en: '9-162x15',
          tr: '9-162x15',
          ru: '9-162x15',
          de: '9-162x15',
        },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/hub-caps/TMP1987.jpg'],
  },
  {
    id: 'prod-tmp-1801',
    slug: 'tmp-1801-ror-hub-cap-9x139-156x49',
    smrCode: 'TMP 1801',
    oemNumbers: [
      '212 02 627',
      '10.20601',
      '02296',
      '266.532-00',
      '085.033',
      '52908',
    ],
    categoryId: 'cat-hub-caps',

    title: {
      en: 'ROR Hub Cap 9x139-156x49',
      tr: 'ROR Porya Kapağı 9x139-156x49',
      ru: 'Колпак ступицы ROR 9x139-156x49',
      de: 'Radnabenkappe ROR 9x139-156x49',
    },
    description: {
      en: 'ROR hub cap for truck and trailer axle hubs. Dimensions: 9x139-156x49.',
      tr: 'Çekici ve römork aks porya kapağı, ROR. Ölçüler: 9x139-156x49.',
      ru: 'Колпак ступицы ROR для ступиц осей грузовиков и прицепов. Размеры: 9x139-156x49.',
      de: 'Radnabenkappe ROR für Achsnaben von Lkw und Anhängern. Abmessungen: 9x139-156x49.',
    },
    specs: [
      {
        label: {
          en: 'Application',
          tr: 'Uygulama',
          ru: 'Применение',
          de: 'Anwendung',
        },
        value: { en: 'ROR', tr: 'ROR', ru: 'ROR', de: 'ROR' },
      },
      {
        label: {
          en: 'Dimensions',
          tr: 'Ölçüler',
          ru: 'Размеры',
          de: 'Abmessungen',
        },
        value: {
          en: '9x139-156x49',
          tr: '9x139-156x49',
          ru: '9x139-156x49',
          de: '9x139-156x49',
        },
      },
      {
        label: {
          en: 'Quantity per box',
          tr: 'Kutudaki adet',
          ru: 'Количество в коробке',
          de: 'Stück pro Karton',
        },
        value: { en: '0', tr: '0', ru: '0', de: '0' },
      },
    ],
    images: ['/products/hub-caps/TMP1801.jpg'],
  },
];
