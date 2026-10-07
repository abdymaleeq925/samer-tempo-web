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
  crossReferences: string[];
  subcategoryId: SubcategoryId;
  categoryId: string;
  title: LocalizedText;
  description: LocalizedText;
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
    image: '/products/s185-111pur.jpg',
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
    image: '/products/s010-02.jpg',
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
    image: '/products/s280-10.jpg',
  },
  {
    id: 'cat-repair-kits',
    slug: 'repair-kits',
    title: {
      en: 'Truck & Trailer Repair Kits',
      tr: 'Kamyon ve Treyler Tamir Takımları',
      ru: 'Ремкомплекты для грузовиков и прицепов',
      de: 'LKW & Anhänger Reparatursätze',
    },
    description: {
      tr: `SMR tamir takımları ağırlıklı olarak dingil tamir takımlarından oluşmaktadır. BPW, SAF, Gigant-SAE, ROR, Fruehauf-SMB ve Trailor dingil tamir takımları üretimimiz dahilindedir.

Fren pabuç yayları, fren pabucu kilitleme somunları, toz kapak sacları da bu ürün grubumuzun içinde yer almaktadır. Tamamı kendi imalatımız olan dingil tamir takımları ürün grubu S-kam mili bakımı için imal edilmektedir. Çeşitli özel ebatlarda Pirinç burçlar da imalatını yaptığımız ürünler arasındadır.
Ayrıca yüksek tonajlı TIR’lar için gerek pres, gerekse alüminyum porya kapakları üretimi de mevcuttur.

Tamir takımı grubumuza dahil ettiğimiz bir diğer ürün ailesi de “Gece Kilidi” (Night Lock) olarak adlandırdığımız Tır kapı iç kilit menteşeleridir. Bu kilitler sayesinde TIR şoförlerinin dinlenme esnasında dışarıdan gelebilecek kapı zorlamalarına karşı ekstra güven sağlanmaktadır.`,
      en: `SMR repair kits mainly consist of axle repair kits. Our production includes repair kits for BPW, SAF, Gigant-SAE, ROR, Fruehauf-SMB, and Trailor axles.

Brake shoe springs, brake shoe lock nuts, and dust shields are also included in this product group. All axle repair kits of our own manufacture are designed for S-camshaft maintenance. Brass bushings in various custom dimensions are also among the products we manufacture.
Furthermore, both pressed steel and aluminum hub caps are produced for heavy-duty commercial vehicles.

Another product family included in our repair kit category is the internal cab door lock hinges, referred to as "Night Lock". These locks provide extra security for truck drivers against external door intrusion during rest periods.`,
      ru: `Ремкомплекты SMR преимущественно состоят из комплектов для ремонта осей коммерческой техники. В наше производство входят ремкомплекты для осей BPW, SAF, Gigant-SAE, ROR, Fruehauf-SMB и Trailor.

В эту группу товаров также входят пружины тормозных колодок, стопорные гайки тормозных колодок и пылезащитные щиты. Все ремкомплекты осей собственного производства предназначены для обслуживания разжимных валов (S-cam). Кроме того, мы изготавливаем латунные втулки различных специальных размеров.
Для тяжеловозных грузовиков также налажен выпуск как штампованных (прессованных), так и алюминиевых крышек ступиц.

Еще одно семейство продуктов в нашей группе ремкомплектов — это внутренние дверные фиксаторы кабины, называемые «Ночной замок» (Night Lock). Эти замки обеспечивают дополнительную безопасность водителей во время отдыха, предотвращая взлом дверей снаружи.`,
      de: `SMR-Reparatursätze bestehen hauptsächlich aus Achsreparatursätzen. Unsere Produktion umfasst Reparatursätze für BPW-, SAF-, Gigant-SAE-, ROR-, Fruehauf-SMB- und Trailor-Achsen.

Bremsschuhfedern, Bremsschuh-Sicherungsmuttern und Staubschutzbleche gehören ebenfalls zu dieser Produktgruppe. Alle selbst hergestellten Achsreparatursätze sind für die Wartung von S-Nockenwellen ausgelegt. Messingbuchsen in verschiedenen Sondergrößen gehören ebenfalls zu unseren Fertigungsprodukten.
Darüber hinaus werden sowohl gepresste als auch Aluminium-Nabendeckel für schwerlastige LKW hergestellt.

Eine weitere Produktfamilie in unserer Reparatursatzgruppe sind die als „Night Lock“ (Nachtschloss) bezeichneten LKW-Türinnenverriegelungen. Diese Schlösser bieten LKW-Fahrern während der Ruhezeiten zusätzlichen Schutz gegen gewaltsames Öffnen der Türen von außen.`,
    },
    image: '/products/tmp5772.jpg',
  },
];

export const MOCK_PRODUCTS: Product[] = [
  // --- AIR COUPLINGS & VALVES ---
  {
    id: 'prod-s010-01',
    slug: 's010-01-standard-coupling-red-m16',
    smrCode: 'S010-01',
    oemNumbers: ['452 200 021 0', '952 200 021 0', '000 429 763 0'],
    crossReferences: ['WABCO 4522000210', 'KNORR K004212', 'DT 2.30210'],
    categoryId: 'cat-couplings',
    subcategoryId: 'subcat-coupling',
    title: {
      en: 'Standard Red Air Coupling M16x1.5',
      tr: 'STANDART KIRMIZI KAPLİN M16',
      ru: 'Головка соединительная стандартная (Красная) M16x1.5',
      de: 'Kupplungskopf Standard Rot M16x1.5',
    },
    description: {
      en: 'Standard emergency red palm coupling head with M16x1.5 connection for trailer brake lines.',
      tr: 'Treyler fren hatları için M16x1,5 bağlantılı standart kırmızı imdat kaplin başlığı.',
      ru: 'Стандартная пневматическая соединительная головка аварийной магистрали (красная) с резьбой M16x1.5.',
      de: 'Standard-Kupplungskopf Rot für die Vorratsleitung des Anhängers mit M16x1.5 Gewinde.',
    },
    images: [
      '/products/s010-01.jpg',
      '/products/r030-101.jpg',
      '/products/r030-130.jpg',
    ],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    specs: [
      {
        label: {
          en: 'Thread Size',
          tr: 'Diş Ölçüsü',
          ru: 'Резьба',
          de: 'Gewinde',
        },
        value: 'M16 x 1.5',
      },
      {
        label: {
          en: 'Color Code',
          tr: 'Renk Kodu',
          ru: 'Цветовая маркировка',
          de: 'Farbcode',
        },
        value: {
          en: 'Red (Emergency)',
          tr: 'Kırmızı (İmdat)',
          ru: 'Красная (Аварийная)',
          de: 'Rot (Vorratsleitung)',
        },
      },
      {
        label: {
          en: 'Max Pressure',
          tr: 'Maks. Basınç',
          ru: 'Макс. давление',
          de: 'Max. Druck',
        },
        value: {
          en: '10 bar',
          tr: '10 bar',
          ru: '10 бар',
          de: '10 bar',
        },
      },
    ],
  },
  {
    id: 'prod-s010-02',
    slug: 's010-02-standard-coupling-yellow-m16',
    smrCode: 'S010-02',
    oemNumbers: ['452 200 022 0', '952 200 022 0', '000 429 38 30'],
    crossReferences: ['WABCO 4522000220', 'KNORR K004213', 'DT 2.30211'],
    categoryId: 'cat-couplings',
    subcategoryId: 'subcat-coupling',
    title: {
      en: 'Standard Yellow Air Coupling M16x1.5',
      tr: 'STANDART SARI KAPLİN M16',
      ru: 'Головка соединительная стандартная (Желтая) M16x1.5',
      de: 'Kupplungskopf Standard Gelb M16x1.5',
    },
    description: {
      en: 'Standard service yellow palm coupling head with M16x1.5 connection for trailer air brake lines.',
      tr: 'Treyler hava fren hatları için M16x1,5 bağlantılı standart sarı servis kaplin başlığı.',
      ru: 'Стандартная пневматическая соединительная головка рабочей магистрали (желтая) с резьбой M16x1.5.',
      de: 'Standard-Kupplungskopf Gelb für die Bremsleitung des Anhängers mit M16x1.5 Gewinde.',
    },
    images: ['/products/s010-02.jpg'],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    specs: [
      {
        label: {
          en: 'Thread Size',
          tr: 'Diş Ölçüsü',
          ru: 'Резьба',
          de: 'Gewinde',
        },
        value: 'M16 x 1.5',
      },
      {
        label: {
          en: 'Color Code',
          tr: 'Renk Kodu',
          ru: 'Цветовая маркировка',
          de: 'Farbcode',
        },
        value: {
          en: 'Yellow (Service)',
          tr: 'Sarı (Servis)',
          ru: 'Желтый (Голова)',
          de: 'Gelb (Bremse)',
        },
      },
      {
        label: {
          en: 'Max Pressure',
          tr: 'Maks. Basınç',
          ru: 'Макс. давление',
          de: 'Max. Druck',
        },
        value: {
          en: '10 bar',
          tr: '10 bar',
          ru: '10 бар',
          de: '10 bar',
        },
      },
    ],
  },
  {
    id: 'prod-s060-01',
    slug: 's060-01-short-valve-m12',
    smrCode: 'S060-01',
    oemNumbers: ['000 429 23 01', '463 013 110 0', '463 013 116 0'],
    crossReferences: ['WABCO 4630131100', 'COJALI 2202100', 'DT 4.61200'],
    categoryId: 'cat-couplings',
    subcategoryId: 'subcat-valve',
    title: {
      en: '3/2 Short Air Valve M12x1.5 (46.9mm)',
      tr: 'KISA VENTİL M12x1,5 46,9mm',
      ru: 'Клапан пневматический короткий 3/2 M12x1.5 (46.9мм)',
      de: '3/2 Kurzes Luftventil M12x1.5 (46.9mm)',
    },
    description: {
      en: 'Compact 3/2-way pneumatic control valve with M12x1.5 ports and 46.9mm total body length.',
      tr: 'M12x1,5 portlu ve 46,9 mm toplam gövde uzunluğuna sahip kompakt 3/2 yollu pnömatik yön kontrol ventili.',
      ru: 'Компактный 3/2-ходовой пневматический управляющий клапан с резьбой M12x1.5 и длиной корпуса 46.9 мм.',
      de: 'Kompaktes 3/2-Wege-Pneumatikventil mit M12x1.5 Anschlüssen und 46.9mm Gehäuselänge.',
    },
    images: ['/products/s060-01.jpg'],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    specs: [
      {
        label: {
          en: 'Port Thread',
          tr: 'Bağlantı Ölçüsü',
          ru: 'Резьба портов',
          de: 'Anschlussgewinde',
        },
        value: 'M12 x 1.5',
      },
      {
        label: {
          en: 'Body Length',
          tr: 'Gövde Boyu',
          ru: 'Длина корпуса',
          de: 'Gehäuselänge',
        },
        value: {
          en: '46.9 mm',
          tr: '46.9 mm',
          ru: '46.9 мм',
          de: '46.9 mm',
        },
      },
      {
        label: {
          en: 'Valve Type',
          tr: 'Ventil Tipi',
          ru: 'Тип клапана',
          de: 'Ventiltyp',
        },
        value: {
          en: '3/2 Way Pneumatic',
          tr: '3/2 Yollu Pnömatik',
          ru: '3/2-ходовой пневматический',
          de: '3/2-Wege Pneumatik',
        },
      },
    ],
  },
  {
    id: 'prod-s130-01',
    slug: 's130-01-pneumatic-cylinder-m6',
    smrCode: 'S130-01',
    oemNumbers: ['000 429 01 02', '421 350 000 0', '131 452 0'],
    crossReferences: ['WABCO 4213500000', 'DT 2.40101'],
    categoryId: 'cat-couplings',
    subcategoryId: 'subcat-cylinder',
    title: {
      en: 'Pneumatic Cylinder 24mm M6 Thread',
      tr: 'SİLİNDİR 24mm M6',
      ru: 'Цилиндр пневматический 24мм M6',
      de: 'Pneumatikzylinder 24mm M6',
    },
    description: {
      en: 'Compact 24mm stroke/piston pneumatic cylinder with M6 connection thread for truck auxiliary control systems.',
      tr: 'Kamyon yardımcı kontrol sistemleri için M6 bağlantı dişli 24mm pistonlu kompakt pnömatik silindir.',
      ru: 'Компактный пневматический цилиндр (поршень 24 мм) с присоединительной резьбой M6.',
      de: 'Kompakter Pneumatikzylinder (24mm Kolben) mit M6 Anschlussgewinde für LKW-Steuerungssysteme.',
    },
    images: ['/products/s130-01.jpg'],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    specs: [
      {
        label: {
          en: 'Piston Diameter',
          tr: 'Piston Çapı',
          ru: 'Диаметр поршня',
          de: 'Kolbendurchmesser',
        },
        value: '24 mm',
      },
      {
        label: {
          en: 'Rod Thread',
          tr: 'Mil Dişi',
          ru: 'Резьба штока',
          de: 'Gewinde',
        },
        value: 'M6',
      },
    ],
  },
  {
    id: 'prod-s130-02',
    slug: 's130-02-pneumatic-cylinder-m8',
    smrCode: 'S130-02',
    oemNumbers: ['000 072 15 12', '000 072 18 12', '000 072 19 12'],
    crossReferences: ['MERCEDES 0000721812', 'DT 4.61502'],
    categoryId: 'cat-couplings',
    subcategoryId: 'subcat-cylinder',
    title: {
      en: 'Pneumatic Cylinder 24mm M8 Thread',
      tr: 'SİLİNDİR 24mm M8',
      ru: 'Цилиндр пневматический 24мм M8',
      de: 'Pneumatikzylinder 24mm M8',
    },
    description: {
      en: 'Pneumatic cylinder with 24mm internal piston and M8 threaded rod for gearbox and engine brake actuators.',
      tr: 'Şanzıman ve motor freni aktüatörleri için 24 mm iç pistonlu ve M8 dişli pnömatik silindir.',
      ru: 'Пневмоцилиндр с поршнем 24 мм и шпилькой M8 для привода тормоза двигателем и КПП.',
      de: 'Pneumatikzylinder mit 24mm Kolben und M8 Gewindestange für Getriebe- und Motorbremssteuerung.',
    },
    images: ['/products/s130-02.jpg'],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    specs: [
      {
        label: {
          en: 'Piston Diameter',
          tr: 'Piston Çapı',
          ru: 'Диаметр поршня',
          de: 'Kolbendurchmesser',
        },
        value: '24 mm',
      },
      {
        label: {
          en: 'Rod Thread',
          tr: 'Mil Dişi',
          ru: 'Резьба штока',
          de: 'Gewinde',
        },
        value: 'M8',
      },
    ],
  },
  {
    id: 'prod-s140',
    slug: 's140-brake-cylinder-28mm-m8',
    smrCode: 'S140',
    oemNumbers: ['000 430 79 26', '000 429 000 0', '000 430 49 26'],
    crossReferences: ['KNORR II32100', 'DT 4.62001'],
    categoryId: 'cat-couplings',
    subcategoryId: 'subcat-cylinder',
    title: {
      en: 'Brake Actuator Cylinder 28mm M8',
      tr: 'FREN SİLİNDİRİ 28mm M8',
      ru: 'Тормозной цилиндр 28мм M8',
      de: 'Bremszylinder 28mm M8',
    },
    description: {
      en: 'Heavy-duty brake actuator cylinder featuring 28mm piston diameter and M8 mounting fittings.',
      tr: '28 mm piston çapına ve M8 montaj bağlantılarına sahip ağır hizmet tipi fren silindiri.',
      ru: 'Усиленный тормозной пневмоцилиндр с диаметром поршня 28 мм и резьбовым креплением M8.',
      de: 'Robuster Bremszylinder mit 28mm Kolbendurchmesser und M8 Gewindeanschlüssen.',
    },
    images: [
      '/products/s140.jpg',
      '/products/r030-101.jpg',
      '/products/r030-130.jpg',
    ],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    specs: [
      {
        label: {
          en: 'Piston Diameter',
          tr: 'Piston Çapı',
          ru: 'Диаметр поршня',
          de: 'Kolbendurchmesser',
        },
        value: {
          en: '28 mm',
          tr: '28 mm',
          ru: '28 мм',
          de: '28 mm',
        },
      },
      {
        label: {
          en: 'Mounting Thread',
          tr: 'Bağlantı Dişi',
          ru: 'Резьба крепления',
          de: 'Befestigungsgewinde',
        },
        value: 'M8',
      },
    ],
  },
  {
    id: 'prod-s182-245pur',
    slug: 's182-245pur-air-hose-black-yellow-5m-m16',
    smrCode: 'S182-245 PUR',
    oemNumbers: ['000 429 41 85', '133 348 2', '81512106001'],
    crossReferences: ['COJALI 2211010', 'DT 2.30100'],
    categoryId: 'cat-couplings',
    subcategoryId: 'subcat-air-hose',
    title: {
      en: 'Coiled Air Hose PUR Black/Yellow 5.0m M16',
      tr: 'HAVA HORTUMU SİYAH/SARI 5,00m M16 PUR',
      ru: 'Шланг пневматический витой ПУ Черно/Желтый 5м M16',
      de: 'Druckluft-Wendelschlauch PUR Schwarz/Gelb 5.0m M16',
    },
    description: {
      en: 'Polyurethane (PUR) spiral coiled air hose in black/yellow safety pattern. 5.0m max working length with M16 fittings.',
      tr: 'Siyah/sarı güvenlik desenli poliüretan (PUR) spiral hava hortumu. M16 rekorlu, 5,0 m maks çalışma uzunluğu.',
      ru: 'Полиуретановый (PUR) спиральный шланг с черно-желтой маркировкой. Рабочая длина 5.0м, резьба M16.',
      de: 'Polyurethan (PUR) Wendelschlauch in Schwarz/Gelb. 5.0m max. Arbeitslänge mit M16 Anschlüssen.',
    },
    images: ['/products/s182-245pur.jpg'],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    specs: [
      {
        label: {
          en: 'Working Length',
          tr: 'Çalışma Boyu',
          ru: 'Рабочая длина',
          de: 'Arbeitslänge',
        },
        value: {
          en: '5 m',
          tr: '5 m',
          ru: '5 м',
          de: '5 m',
        },
      },
      {
        label: {
          en: 'Material',
          tr: 'Malzeme',
          ru: 'Материал',
          de: 'Material',
        },
        value: 'Polyurethane (PUR)',
      },
      {
        label: {
          en: 'Thread Fitting',
          tr: 'Rekor Ölçüsü',
          ru: 'Фитинги',
          de: 'Gewindeanschluss',
        },
        value: 'M16 x 1.5',
      },
    ],
  },
  {
    id: 'prod-s185-111pur',
    slug: 's185-111pur-cabin-cleaning-hose-actros-4m',
    smrCode: 'S185-111 PUR',
    oemNumbers: ['000 584 02 38', 'A0005840238'],
    crossReferences: ['MERCEDES A0005840238', 'DT 4.80302'],
    categoryId: 'cat-couplings',
    subcategoryId: 'subcat-air-hose',
    title: {
      en: 'Cabin Air Cleaning Hose Kit PUR 4.0m for Mercedes Actros',
      tr: 'PLASTİK TABANCALI KABİN TEMİZLEME HORTUMU PUR 4,00m ACTROS',
      ru: 'Шланг продувочный для кабины с пистолетом ПУ 4.0м (Mercedes Actros)',
      de: 'Kabinen-Reinigungsschlauch-Set PUR 4.0m für Actros',
    },
    description: {
      en: 'Blue polyurethane spiralled hose kit complete with air blow gun for interior cabin cleaning in Mercedes-Benz Actros trucks.',
      tr: 'Mercedes-Benz Actros kamyonlarda kabin içi temizlik için tasarlanmış, hava tabancalı mavi poliüretan spiral hortum seti.',
      ru: 'Спиральный полиуретановый шланг синего цвета с пистолетом для обдува кабины грузовиков Mercedes-Benz Actros.',
      de: 'Blauer PUR-Spiralen-Schlauch mit Blaspistole für die Kabinenreinigung in Mercedes-Benz Actros LKW.',
    },
    images: ['/products/s185-111pur.jpg'],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    specs: [
      {
        label: {
          en: 'Working Length',
          tr: 'Çalışma Boyu',
          ru: 'Рабочая длина',
          de: 'Arbeitslänge',
        },
        value: {
          en: '4 m',
          tr: '4 m',
          ru: '4 м',
          de: '4 m',
        },
      },
      {
        label: {
          en: 'Material',
          tr: 'Malzeme',
          ru: 'Материал',
          de: 'Material',
        },
        value: 'Polyurethane (PUR)',
      },
      {
        label: {
          en: 'Application',
          tr: 'Uygulama',
          ru: 'Применяемость',
          de: 'Anwendung',
        },
        value: 'Mercedes-Benz Actros / Axor / Antos',
      },
    ],
  },
  {
    id: 'prod-s186-115',
    slug: 's186-115-braided-tyre-inflation-hose-15m',
    smrCode: 'S186-115',
    oemNumbers: ['000 583 07 10', '81512206010', '133 348 5'],
    crossReferences: ['DT 2.30120', 'COJALI 2211020'],
    categoryId: 'cat-couplings',
    subcategoryId: 'subcat-air-hose',
    title: {
      en: 'Braided Reinforced Tyre Inflation Hose 15m',
      tr: 'LASTİK ŞİŞİRME HORTUMU İÇTEN ÖRGÜLÜ 15m',
      ru: 'Шланг подкачки шин текстильно-армированный 15м',
      de: 'Textilverstärkter Reifeneinfüllschlauch 15m',
    },
    description: {
      en: 'High-pressure internal textile braided rubber hose designed for heavy commercial vehicle tyre inflation. 15 meters length.',
      tr: 'Ağır ticari araç lastiklerini şişirmek için tasarlanmış içten tekstil örgülü, yüksek basınca dayanıklı 15 metre hortum.',
      ru: 'Высоконапорный шланг подкачки колес с внутренним текстильным армированием. Длина 15 метров.',
      de: 'Hochdruck-Reifeneinfüllschlauch mit gewebeverstärkter Innenseite für LKW und Auflieger. Länge 15m.',
    },
    images: ['/products/s186-115.jpg'],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    specs: [
      {
        label: { en: 'Length', tr: 'Uzunluk', ru: 'Длина', de: 'Länge' },
        value: {
          en: '15 m',
          tr: '15 m',
          ru: '15 м',
          de: '15 m',
        },
      },
      {
        label: {
          en: 'Reinforcement',
          tr: 'Takviye',
          ru: 'Армирование',
          de: 'Verstärkung',
        },
        value: 'Internal Textile Braiding',
      },
      {
        label: {
          en: 'Max Pressure',
          tr: 'Maks. Basınç',
          ru: 'Макс. давление',
          de: 'Max. Druck',
        },
        value: {
          en: '20 bar',
          tr: '20 bar',
          ru: '20 бар',
          de: '20 bar',
        },
      },
    ],
  },

  // --- ELECTRICAL CABLES & plugs ---
  {
    id: 'prod-r020-01a',
    slug: 'r020-01a-24v-7pin-plastic-plug-n-type',
    smrCode: 'R020-01A',
    oemNumbers: ['111008', '111009', '51305287', '000 545 62 14'],
    crossReferences: ['HELLA 8JB001933011', 'DT 4.80250'],
    categoryId: 'cat-cables',
    subcategoryId: 'subcat-plugs-sockets',
    title: {
      en: '24V 7-Pin Plastic Plug Black N-Type (Pinned Terminals)',
      tr: '24V PLASTİK SOKET SİYAH N TİPİ AYAKLAR PİMLİ',
      ru: 'Розетка 24V 7-контактная пластиковая (Тип N, штыревые контакты)',
      de: '24V 7-Polige Kunststoff-Steckdose Schwarz N-Typ',
    },
    description: {
      en: '24V 7-pin N-type female plug made of impact-resistant polyamide plastic with crimp pin terminals (ISO 1185 standard).',
      tr: 'ISO 1185 standardına uygun, sıkmalı/pimli terminallere sahip دارбеye dayanıklı plastik 24V 7li N Tipi dişi soket.',
      ru: 'Пластиковая 7-контактная розетка тип N (24V) из ударопрочного полиамида со штыревыми контактами (стандарт ISO 1185).',
      de: '24V 7-polige N-Typ Steckdose aus schlagfestem Kunststoff mit Stiftkontakten nach ISO 1185.',
    },
    images: ['/products/r020-01a.jpg'],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    specs: [
      {
        label: {
          en: 'Voltage / Pins',
          tr: 'Voltaj / Pin',
          ru: 'Напряжение / Контакты',
          de: 'Spannung / Pole',
        },
        value: {
          en: '24V / 7-Pin',
          tr: '24V / 7 Pinli',
          ru: '24V / 7-контактный',
          de: '24V / 7-Polig',
        },
      },
      {
        label: {
          en: 'Type Standard',
          tr: 'Tip Standardı',
          ru: 'Тип разъема',
          de: 'Standard',
        },
        value: {
          en: 'ISO 1185 (N-Type)',
          tr: 'ISO 1185 (N Tipi)',
          ru: 'ISO 1185 (Тип N)',
          de: 'ISO 1185 (N-Typ)',
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
          en: 'PA6 Plastic (Black)',
          tr: 'PA6 Plastik (Siyah)',
          ru: 'Пластик PA6 (Черный)',
          de: 'PA6 Kunststoff (Schwarz)',
        },
      },
    ],
  },
  {
    id: 'prod-r010-02',
    slug: 'r010-02-24v-7pin-green-plug-s-type',
    smrCode: 'R010-02',
    oemNumbers: ['111030', '000 545 78 14', '81254320002'],
    crossReferences: ['HELLA 8JA001930001', 'DT 4.80252'],
    categoryId: 'cat-cables',
    subcategoryId: 'subcat-plugs-sockets',
    title: {
      en: '24V 7-Pin Plastic Green Plug S-Type',
      tr: '24V PLASTİK YEŞİL FİŞ S TİPİ',
      ru: 'Вилка 24V 7-контактная пластиковая Зеленая (Тип S)',
      de: '24V 7-Poliger Kunststoff-Stecker Grün S-Typ',
    },
    description: {
      en: '24V 7-pin supplementary S-type male connector plug in green plastic housing (ISO 3731).',
      tr: 'Yeşil plastik gövdeli, ISO 3731 standardında 24V 7li S Tipi ilave elektrik tesisat fişi.',
      ru: 'Кабельная вилка 24V 7 контактов типа S (вспомогательная) в зеленом пластиковом корпусе (ISO 3731).',
      de: '24V 7-poliger S-Typ Zusatzstecker im grünen Kunststoffgehäuse nach ISO 3731.',
    },
    images: ['/products/r010-02.jpg'],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    specs: [
      {
        label: {
          en: 'Voltage / Pins',
          tr: 'Voltaj / Pin',
          ru: 'Напряжение / Контакты',
          de: 'Spannung / Pole',
        },
        value: {
          en: '24V / 7-Pin',
          tr: '24V / 7 Pinli',
          ru: '24V / 7-контактный',
          de: '24V / 7-Polig',
        },
      },
      {
        label: {
          en: 'Type Standard',
          tr: 'Tip Standardı',
          ru: 'Тип разъема',
          de: 'Standard',
        },
        value: {
          en: 'ISO 3731 (S-Type)',
          tr: 'ISO 3731 (S Tipi)',
          ru: 'ISO 3731 (Тип S)',
          de: 'ISO 3731 (S-Typ)',
        },
      },
      {
        label: { en: 'Color', tr: 'Renk', ru: 'Цвет', de: 'Farbe' },
        value: {
          en: 'Green',
          tr: 'Yeşil',
          ru: 'Зеленый',
          de: 'Grün',
        },
      },
    ],
  },
  {
    id: 'prod-r010-04',
    slug: 'r010-04-ebs-7pin-plug-crimp-terminals',
    smrCode: 'R010-04',
    oemNumbers: ['441 035 001 0', '000 545 80 14', '150 493 8'],
    crossReferences: ['WABCO 4410350010', 'COJALI 2210001', 'DT 2.30200'],
    categoryId: 'cat-cables',
    subcategoryId: 'subcat-plugs-sockets',
    title: {
      en: 'EBS 7-Pin Trailer Plug with Crimp Contacts',
      tr: 'EBS 7 Lİ FİŞ AYAKLAR SIKMALI',
      ru: 'Вилка EBS 7-контактная под обжим контактов (ISO 7638)',
      de: 'EBS 7-Poliger Stecker mit Crimp-Kontakten',
    },
    description: {
      en: '7-pin EBS brake connection plug with heavy-duty crimp pin terminals according to ISO 7638-1 standard.',
      tr: 'ISO 7638-1 standardında, sıkmalı (krimp) bacaklara sahip 7li EBS fren sistem fişi.',
      ru: '7-контактная кабельная вилка системы EBS/ABS с опрессовываемыми контактами по стандарту ISO 7638-1.',
      de: '7-poliger EBS-Bremsstecker mit Crimp-Kontakten nach ISO 7638-1 Norm.',
    },
    images: ['/products/r010-04.jpg'],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    specs: [
      {
        label: { en: 'Standard', tr: 'Standard', ru: 'Стандарт', de: 'Norm' },
        value: 'ISO 7638-1 (EBS / ABS)',
      },
      {
        label: {
          en: 'Pin Type',
          tr: 'Pim Tipi',
          ru: 'Тип контактов',
          de: 'Kontakttyp',
        },
        value: {
          en: 'Crimp Terminal',
          tr: 'Sıkmalı',
          ru: 'Обжимной',
          de: 'Crimpanschluss',
        },
      },
      {
        label: {
          en: 'Pin Count',
          tr: 'Pin Sayısı',
          ru: 'Кол-во контактов',
          de: 'Polzahl',
        },
        value: {
          en: '7 Pins',
          tr: '7 Pinli',
          ru: '7 контактов',
          de: '7 Polig',
        },
      },
    ],
  },
  {
    id: 'prod-r030-101',
    slug: 'r030-101-24v-metal-plug-spiral-cable-n-type-4-5m',
    smrCode: 'R030-101',
    oemNumbers: ['000 540 83 07', '81254116020', '139 217 8'],
    crossReferences: ['HELLA 8KA007123021', 'DT 2.30150'],
    categoryId: 'cat-cables',
    subcategoryId: 'subcat-spiral-cable',
    title: {
      en: '24V Coiled Cable Aluminum Plugs N-Type 4.5m',
      tr: '24V ALÜMİNYUM METAL FİŞLİ KABLO N TİPİ 4,5m',
      ru: 'Кабель спиральный 24V N-тип с алюминиевыми вилками 4.5м',
      de: '24V Wendelkanal Aluminium-Stecker N-Typ 4.5m',
    },
    description: {
      en: '24V 7-core (6x1.0mm² + 1x1.5mm²) polyurethane spiral cable with durable die-cast aluminum N-type plugs. Max extension 4.5 meters.',
      tr: 'Alüminyum döküm N-Tipi fişli, (6x1,00 mm² + 1x1,50 mm²) kesitli, 4,5 metreye uzayabilen poliüretan 24V spiral kablo.',
      ru: '7-жильный (6x1.0 + 1x1.5 мм²) полиуретановый спиральный кабель 24V с литыми алюминиевыми вилками N-типа. Длина 4.5м.',
      de: '24V 7-adriges (6x1.0 + 1x1.5mm²) PUR-Spiralkabel mit Alu-Gusssteckern Typ-N. Max. Auszugslänge 4.5m.',
    },
    images: ['/products/r030-101.jpg', '/products/r030-130.jpg'],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    specs: [
      {
        label: {
          en: 'Working Length',
          tr: 'Çalışma Boyu',
          ru: 'Рабочая длина',
          de: 'Arbeitslänge',
        },
        value: {
          en: '4.5 m',
          tr: '4.5 m',
          ru: '4.5 м',
          de: '4.5 m',
        },
      },
      {
        label: {
          en: 'Wire Cross-Section',
          tr: 'Kablo Kesiti',
          ru: 'Сечение жил',
          de: 'Kabelquerschnitt',
        },
        value: {
          en: '6 x 1.0 mm² + 1 x 1.5 mm²',
          tr: '6 x 1.0 mm² + 1 x 1.5 mm²',
          ru: '6 x 1.0 мм² + 1 x 1.5 мм²',
          de: '6 x 1.0 mm² + 1 x 1.5 mm²',
        },
      },
      {
        label: {
          en: 'Plug Material',
          tr: 'Fiş Malzemesi',
          ru: 'Материал вилок',
          de: 'Steckermaterial',
        },
        value: {
          en: 'Aluminum Alloy',
          tr: 'Alüminyum Alaşım',
          ru: 'Алюминиевый сплав',
          de: 'Aluminiumlegierung',
        },
      },
    ],
  },
  {
    id: 'prod-r030-130',
    slug: 'r030-130-24v-plastic-green-plug-cable-s-type-4m',
    smrCode: 'R030-130',
    oemNumbers: ['000 540 84 07', '81254116021', '139 217 9'],
    crossReferences: ['HELLA 8KA007123031', 'DT 2.30151'],
    categoryId: 'cat-cables',
    subcategoryId: 'subcat-spiral-cable',
    title: {
      en: '24V Coiled Cable Plastic Green Plugs S-Type 4.0m',
      tr: '24V PLASTİK YEŞİL FİŞLİ KABLO S TİPİ 4m',
      ru: 'Кабель спиральный 24V S-тип с зелеными пластиковыми вилками 4м',
      de: '24V Wendelkanal Kunststoff-Grün-Stecker S-Typ 4.0m',
    },
    description: {
      en: '24V 7-core S-type spiral cable fitted with impact-resistant green plastic plugs. Working length 4.0 meters.',
      tr: 'Darbeye dayanıklı yeşil plastik S-Tipi fişlerle donatılmış, 4,0 metre çalışma boyuna sahip 24V 7li spiral kablo.',
      ru: '7-жильный спиральный кабель тип S (24V) с зелеными ударопрочными вилками. Рабочая длина 4.0м.',
      de: '24V 7-adriges S-Typ Spiralkabel mit grünen Kunststoffsteckern. Max. Arbeitslänge 4.0m.',
    },
    images: ['/products/r030-130.jpg'],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    specs: [
      {
        label: {
          en: 'Working Length',
          tr: 'Çalışma Boyu',
          ru: 'Рабочая длина',
          de: 'Arbeitslänge',
        },
        value: {
          en: '4 m',
          tr: '4 m',
          ru: '4 м',
          de: '4 m',
        },
      },
      {
        label: {
          en: 'Wire Cross-Section',
          tr: 'Kablo Kesiti',
          ru: 'Сечение жил',
          de: 'Kabelquerschnitt',
        },
        value: '6 x 1.0 mm² + 1 x 1.5 mm²',
      },
      {
        label: { en: 'Standard', tr: 'Standard', ru: 'Стандарт', de: 'Norm' },
        value: {
          en: 'ISO 3731 (S-Type)',
          tr: 'ISO 3731 (S Tipi)',
          ru: 'ISO 3731 (Тип S)',
          de: 'ISO 3731 (S-Typ)',
        },
      },
    ],
  },
  {
    id: 'prod-r030-172',
    slug: 'r030-172-ebs-7-pin-spiral-cable-5m',
    smrCode: 'R030-172',
    oemNumbers: ['446 008 240 0', '20803584', '000 540 00 80'],
    crossReferences: ['WABCO 4460082400', 'COJALI 2210100', 'DT 2.30210'],
    categoryId: 'cat-cables',
    subcategoryId: 'subcat-spiral-cable',
    title: {
      en: '7-Pin EBS Coiled Cable 24V 5.0m',
      tr: '7 Lİ EBS SPİRAL KABLO 5m',
      ru: 'Кабель спиральный EBS 7-контактный 5м (ISO 7638)',
      de: '7-Poliges EBS Spiralkabel 24V 5.0m',
    },
    description: {
      en: '24V 7-pin EBS/ABS braking spiral cable with (5x1.50mm² + 2x2.50mm²) core specification and PUR jacket. 5m max working length.',
      tr: 'ISO 7638 fren sistemleri için (5x1,50 mm² + 2x2,50 mm²) kesitli, poliüretan kılıflı 5 metre 7li EBS spiral kablo.',
      ru: 'Спиральный EBS кабель 24V (5x1.5 + 2x2.5 мм²) в износостойкой полиуретановой изоляции. Рабочая длина 5 метров.',
      de: 'EBS/ABS Spiralkabel (5x1.5 + 2x2.5mm²) für elektronische Bremssysteme. 5m Max. Arbeitslänge.',
    },
    images: ['/products/r030-172.jpg'],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    specs: [
      {
        label: {
          en: 'Working Length',
          tr: 'Çalışma Boyu',
          ru: 'Рабочая длина',
          de: 'Arbeitslänge',
        },
        value: {
          en: '5 m',
          tr: '5 m',
          ru: '5 м',
          de: '5 m',
        },
      },
      {
        label: {
          en: 'Wire Cross-Section',
          tr: 'Kablo Kesiti',
          ru: 'Сечение жил',
          de: 'Kabelquerschnitt',
        },
        value: {
          en: '5 x 1.50 mm² + 2 x 2.50 mm²',
          tr: '5 x 1.50 mm² + 2 x 2.50 mm²',
          ru: '5 x 1.50 мм² + 2 x 2.50 мм²',
          de: '5 x 1.50 mm² + 2 x 2.50 mm²',
        },
      },
      {
        label: { en: 'Standard', tr: 'Standard', ru: 'Стандарт', de: 'Norm' },
        value: 'ISO 7638-1 (EBS / ABS)',
      },
    ],
  },

  // --- FUEL TANK CAPS & ANTI-THEFT ---
  {
    id: 'prod-s280-01',
    slug: 's280-01-galvanized-tank-cap-60mm-without-key',
    smrCode: 'S 280-01',
    oemNumbers: [],
    crossReferences: [],
    categoryId: 'cat-tank-caps',
    subcategoryId: 'subcat-fuel-cap',
    title: {
      en: 'Galvanized Tank Cap 60mm (Without Key)',
      tr: 'Galvanizli Depo Kapağı 60mm (Anahtarsız)',
      ru: 'Крышка бака оцинкованная 60мм (без ключа)',
      de: 'Verzinkter Tankdeckel 60mm (Ohne Schlüssel)',
    },
    description: {
      en: 'Galvanized 60mm tank cap without lock, fuel-resistant rubber seal, leakproof for 7 minutes, fits Mercedes-Benz, BMC, DAF, IVECO, Volvo, MAN.',
      tr: 'Kilitsiz 60mm galvanizli depo kapağı, yakıt dayanımlı lastik conta, 7 dk sızdırmazlık garantisi, Mercedes-Benz, BMC, DAF, IVECO, Volvo, MAN için uygun.',
      ru: 'Оцинкованная крышка бака 60мм без замка, топливостойкий резиновый уплотнитель, герметичность 7 минут, подходит для Mercedes-Benz, BMC, DAF, IVECO, Volvo, MAN.',
      de: 'Verzinkter 60mm Tankdeckel ohne Schloss, kraftstoffbeständige Gummidichtung, 7 Minuten Dichtheitsgarantie, passend für Mercedes-Benz, BMC, DAF, IVECO, Volvo, MAN.',
    },
    images: [
      '/samer-catalog-images/TankCap/img-002-012.png',
      '/samer-catalog-images/TankCap/img-002-013.png',
    ],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    specs: [
      {
        label: {
          en: 'Filler Neck Size',
          tr: 'Depo Ağzı',
          ru: 'Диаметр горловины',
          de: 'Einfüllstutzen',
        },
        value: '60mm',
      },
      {
        label: { en: 'Locking', tr: 'Kilit', ru: 'Замок', de: 'Verriegelung' },
        value: {
          en: 'Without Key',
          tr: 'Anahtarsız',
          ru: 'Без ключа',
          de: 'Ohne Schlüssel',
        },
      },
      {
        label: {
          en: 'Leakproof Guarantee',
          tr: 'Sızdırmazlık',
          ru: 'Герметичность',
          de: 'Dichtheit',
        },
        value: '7 min',
      },
      {
        label: {
          en: 'Suitable For',
          tr: 'Uygunluk',
          ru: 'Совместимость',
          de: 'Geeignet für',
        },
        value: 'Mercedes-Benz, BMC, DAF, IVECO, Volvo, MAN',
      },
    ],
  },
  {
    id: 'prod-s280-02',
    slug: 's280-02-galvanized-tank-cap-60mm-with-key',
    smrCode: 'S 280-02',
    oemNumbers: [],
    crossReferences: [],
    categoryId: 'cat-tank-caps',
    subcategoryId: 'subcat-fuel-cap',
    title: {
      en: 'Galvanized Tank Cap 60mm (With Key)',
      tr: 'Galvanizli Depo Kapağı 60mm (Anahtarlı)',
      ru: 'Крышка бака оцинкованная 60мм (с ключом)',
      de: 'Verzinkter Tankdeckel 60mm (Mit Schlüssel)',
    },
    description: {
      en: 'Galvanized 60mm locking tank cap, locking unit made in Germany, protective plastic handled key, fits Mercedes-Benz, BMC, DAF, IVECO, Volvo, MAN.',
      tr: 'Almanya üretimi kilit mekanizmalı 60mm galvanizli kilitli depo kapağı, koruyucu plastik saplı anahtar, Mercedes-Benz, BMC, DAF, IVECO, Volvo, MAN için uygun.',
      ru: 'Оцинкованная крышка бака 60мм с замком, запорный механизм произведён в Германии, защитный ключ с пластиковой ручкой, подходит для Mercedes-Benz, BMC, DAF, IVECO, Volvo, MAN.',
      de: 'Verzinkter 60mm Tankdeckel mit Schloss, Schließmechanismus made in Germany, Schutz-Schlüssel mit Kunststoffgriff, passend für Mercedes-Benz, BMC, DAF, IVECO, Volvo, MAN.',
    },
    images: [
      '/samer-catalog-images/TankCap/img-002-014.png',
      '/samer-catalog-images/TankCap/img-002-015.png',
    ],
    videoUrl: 'https://www.youtube.com/watch?v=jNQXAC9IVRw',
    specs: [
      {
        label: {
          en: 'Filler Neck Size',
          tr: 'Depo Ağzı',
          ru: 'Диаметр горловины',
          de: 'Einfüllstutzen',
        },
        value: '60mm',
      },
      {
        label: { en: 'Locking', tr: 'Kilit', ru: 'Замок', de: 'Verriegelung' },
        value: {
          en: 'With Key',
          tr: 'Anahtarlı',
          ru: 'С ключом',
          de: 'Mit Schlüssel',
        },
      },
      {
        label: {
          en: 'Locking Unit',
          tr: 'Kilit Mekanizması',
          ru: 'Запорный механизм',
          de: 'Schließmechanismus',
        },
        value: {
          en: 'Made in Germany',
          tr: 'Almanya Üretimi',
          ru: 'Производство Германия',
          de: 'Made in Germany',
        },
      },
      {
        label: {
          en: 'Suitable For',
          tr: 'Uygunluk',
          ru: 'Совместимость',
          de: 'Geeignet für',
        },
        value: 'Mercedes-Benz, BMC, DAF, IVECO, Volvo, MAN',
      },
    ],
  },
  {
    id: 'prod-s280-05',
    slug: 's280-05-galvanized-tank-cap-80mm-without-key',
    smrCode: 'S 280-05',
    oemNumbers: [],
    crossReferences: [],
    categoryId: 'cat-tank-caps',
    subcategoryId: 'subcat-fuel-cap',
    title: {
      en: 'Galvanized Tank Cap 80mm (Without Key)',
      tr: 'Galvanizli Depo Kapağı 80mm (Anahtarsız)',
      ru: 'Крышка бака оцинкованная 80мм (без ключа)',
      de: 'Verzinkter Tankdeckel 80mm (Ohne Schlüssel)',
    },
    description: {
      en: 'Galvanized 80mm tank cap without lock, fuel-resistant rubber seal, compatible with S 263/S 264 anti-theft devices.',
      tr: 'Kilitsiz 80mm galvanizli depo kapağı, yakıt dayanımlı lastik conta, S 263/S 264 hırsızlık önleyici cihazlarla uyumlu.',
      ru: 'Оцинкованная крышка бака 80мм без замка, топливостойкий уплотнитель, совместима с антивором S 263/S 264.',
      de: 'Verzinkter 80mm Tankdeckel ohne Schloss, kraftstoffbeständige Dichtung, kompatibel mit Diebstahlschutz S 263/S 264.',
    },
    images: [
      '/samer-catalog-images/TankCap/img-004-103.png',
      '/samer-catalog-images/TankCap/img-004-046.png',
    ],
    videoUrl: 'https://vimeo.com/76979871',
    specs: [
      {
        label: {
          en: 'Filler Neck Size',
          tr: 'Depo Ağzı',
          ru: 'Диаметр горловины',
          de: 'Einfüllstutzen',
        },
        value: '80mm',
      },
      {
        label: { en: 'Locking', tr: 'Kilit', ru: 'Замок', de: 'Verriegelung' },
        value: {
          en: 'Without Key',
          tr: 'Anahtarsız',
          ru: 'Без ключа',
          de: 'Ohne Schlüssel',
        },
      },
      {
        label: {
          en: 'Compatible Anti-Theft',
          tr: 'Uyumlu Hırsızlık Önleyici',
          ru: 'Совместимая защита',
          de: 'Kompatibler Diebstahlschutz',
        },
        value: 'S 263, S 264',
      },
    ],
  },
  {
    id: 'prod-s280-16',
    slug: 's280-16-metal-tank-cap-80mm-with-key',
    smrCode: 'S 280-16',
    oemNumbers: [],
    crossReferences: [],
    categoryId: 'cat-tank-caps',
    subcategoryId: 'subcat-fuel-cap',
    title: {
      en: 'Metal Tank Cap 80mm (With Key)',
      tr: 'Metal Depo Kapağı 80mm (Anahtarlı)',
      ru: 'Крышка бака металлическая 80мм (с ключом)',
      de: 'Metall-Tankdeckel 80mm (Mit Schlüssel)',
    },
    description: {
      en: 'Chrome metal 80mm locking tank cap with dust cover, for Mercedes-Benz (Axor), BMC, IVECO, DAF, Volvo, MAN.',
      tr: 'Toz kapaklı krom metal 80mm kilitli depo kapağı, Mercedes-Benz (Axor), BMC, IVECO, DAF, Volvo, MAN için.',
      ru: 'Хромированная металлическая крышка бака 80мм с замком и пылезащитным колпачком, для Mercedes-Benz (Axor), BMC, IVECO, DAF, Volvo, MAN.',
      de: 'Verchromter Metall-Tankdeckel 80mm mit Schloss und Staubschutzkappe, für Mercedes-Benz (Axor), BMC, IVECO, DAF, Volvo, MAN.',
    },
    images: [
      '/samer-catalog-images/TankCap/img-010-055.png',
      '/samer-catalog-images/TankCap/img-010-056.png',
      '/samer-catalog-images/TankCap/img-002-012.png',
    ],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    specs: [
      {
        label: {
          en: 'Filler Neck Size',
          tr: 'Depo Ağzı',
          ru: 'Диаметр горловины',
          de: 'Einfüllstutzen',
        },
        value: '80mm',
      },
      {
        label: {
          en: 'Accessories',
          tr: 'Aksesuarlar',
          ru: 'Комплектация',
          de: 'Zubehör',
        },
        value: {
          en: 'Protective Key, Dust Cover',
          tr: 'Koruyucu Anahtar, Toz Kapağı',
          ru: 'Защитный ключ, пылезащитный колпачок',
          de: 'Schutzschlüssel, Staubschutzkappe',
        },
      },
      {
        label: {
          en: 'Suitable For',
          tr: 'Uygunluk',
          ru: 'Совместимость',
          de: 'Geeignet für',
        },
        value: 'Mercedes-Benz (Axor), BMC, IVECO, DAF, Volvo, MAN',
      },
    ],
  },
  {
    id: 'prod-s280-09',
    slug: 's280-09-stainless-tank-cap-40mm-with-key',
    smrCode: 'S 280-09',
    oemNumbers: [],
    crossReferences: [],
    categoryId: 'cat-tank-caps',
    subcategoryId: 'subcat-fuel-cap',
    title: {
      en: 'Stainless Tank Cap 40mm (With Key)',
      tr: 'Paslanmaz Depo Kapağı 40mm (Anahtarlı)',
      ru: 'Крышка бака нержавеющая 40мм (с ключом)',
      de: 'Edelstahl-Tankdeckel 40mm (Mit Schlüssel)',
    },
    description: {
      en: 'Stainless steel 40mm locking tank cap, packaging 240pcs/parcel, for Mercedes-Benz, BMC, DAF, IVECO, Volvo, MAN.',
      tr: 'Paslanmaz çelik 40mm kilitli depo kapağı, 240 adet/koli paketleme, Mercedes-Benz, BMC, DAF, IVECO, Volvo, MAN için.',
      ru: 'Крышка бака из нержавеющей стали 40мм с замком, упаковка 240шт/коробка, для Mercedes-Benz, BMC, DAF, IVECO, Volvo, MAN.',
      de: 'Edelstahl-Tankdeckel 40mm mit Schloss, Verpackung 240 Stück/Karton, für Mercedes-Benz, BMC, DAF, IVECO, Volvo, MAN.',
    },
    images: ['/samer-catalog-images/TankCap/img-006-058.png'],
    videoUrl: 'https://www.youtube.com/watch?v=jNQXAC9IVRw',
    specs: [
      {
        label: {
          en: 'Filler Neck Size',
          tr: 'Depo Ağzı',
          ru: 'Диаметр горловины',
          de: 'Einfüllstutzen',
        },
        value: '40mm',
      },
      {
        label: {
          en: 'Packaging',
          tr: 'Paketleme',
          ru: 'Упаковка',
          de: 'Verpackung',
        },
        value: '240 pcs/parcel',
      },
    ],
  },
  {
    id: 'prod-s280-13z',
    slug: 's280-13z-plastic-tank-cap-60mm-key-chain',
    smrCode: 'S 280-13Z',
    oemNumbers: [],
    crossReferences: [],
    categoryId: 'cat-tank-caps',
    subcategoryId: 'subcat-fuel-cap',
    title: {
      en: 'Plastic Tank Cap 60mm (With Key & Chain) — For Scania',
      tr: 'Plastik Depo Kapağı 60mm (Anahtarlı ve Zincirli) — Scania İçin',
      ru: 'Крышка бака пластиковая 60мм (с ключом и цепочкой) — для Scania',
      de: 'Plastik-Tankdeckel 60mm (Mit Schlüssel und Kette) — Für Scania',
    },
    description: {
      en: 'New plastic 60mm tank cap with key and safety chain, dust cover included, made specifically for Scania.',
      tr: 'Yeni ürün — anahtarlı, güvenlik zincirli 60mm plastik depo kapağı, toz kapağı dahil, özel olarak Scania için üretilmiştir.',
      ru: 'Новинка — пластиковая крышка бака 60мм с ключом и страховочной цепочкой, в комплекте пылезащитный колпачок, специально для Scania.',
      de: 'Neuheit — Plastik-Tankdeckel 60mm mit Schlüssel und Sicherheitskette, inkl. Staubschutzkappe, speziell für Scania.',
    },
    images: [
      '/samer-catalog-images/TankCap/img-006-064.png',
      '/samer-catalog-images/TankCap/img-006-065.png',
    ],
    videoUrl: 'https://vimeo.com/76979871',
    specs: [
      {
        label: {
          en: 'Filler Neck Size',
          tr: 'Depo Ağzı',
          ru: 'Диаметр горловины',
          de: 'Einfüllstutzen',
        },
        value: '60mm',
      },
      {
        label: {
          en: 'Accessories',
          tr: 'Aksesuarlar',
          ru: 'Комплектация',
          de: 'Zubehör',
        },
        value: {
          en: 'Key, Chain, Dust Cover',
          tr: 'Anahtar, Zincir, Toz Kapağı',
          ru: 'Ключ, цепочка, пылезащитный колпачок',
          de: 'Schlüssel, Kette, Staubschutzkappe',
        },
      },
      {
        label: {
          en: 'Suitable For',
          tr: 'Uygunluk',
          ru: 'Совместимость',
          de: 'Geeignet für',
        },
        value: 'Scania',
      },
    ],
  },
  {
    id: 'prod-s280-17',
    slug: 's280-17-plastic-sidelocked-tank-cap-80mm',
    smrCode: 'S 280-17',
    oemNumbers: [],
    crossReferences: [],
    categoryId: 'cat-tank-caps',
    subcategoryId: 'subcat-fuel-cap',
    title: {
      en: 'Plastic Sidelocked Tank Cap 80mm (With Key & Chain)',
      tr: 'Plastik Yandan Kilitli Depo Kapağı 80mm (Anahtarlı ve Zincirli)',
      ru: 'Крышка бака пластиковая с боковым замком 80мм (с ключом и цепочкой)',
      de: 'Plastik-Tankdeckel Seitenverriegelung 80mm (Mit Schlüssel und Kette)',
    },
    description: {
      en: 'New — side-locking plastic tank cap 80mm with key and chain, for RENAULT, DAF, Volvo, IVECO.',
      tr: 'Yeni ürün — anahtarlı ve zincirli, yandan kilitli 80mm plastik depo kapağı, RENAULT, DAF, Volvo, IVECO için.',
      ru: 'Новинка — пластиковая крышка бака 80мм с боковым замком, ключом и цепочкой, для RENAULT, DAF, Volvo, IVECO.',
      de: 'Neuheit — seitlich verriegelbarer Plastik-Tankdeckel 80mm mit Schlüssel und Kette, für RENAULT, DAF, Volvo, IVECO.',
    },
    images: ['/samer-catalog-images/TankCap/img-007-070.png'],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    specs: [
      {
        label: {
          en: 'Filler Neck Size',
          tr: 'Depo Ağzı',
          ru: 'Диаметр горловины',
          de: 'Einfüllstutzen',
        },
        value: '80mm',
      },
      {
        label: {
          en: 'Suitable For',
          tr: 'Uygunluk',
          ru: 'Совместимость',
          de: 'Geeignet für',
        },
        value: 'RENAULT, DAF, Volvo, IVECO',
      },
    ],
  },
  {
    id: 'prod-s280-19',
    slug: 's280-19-biodiesel-cap-40mm-without-key',
    smrCode: 'S 280-19',
    oemNumbers: [],
    crossReferences: [],
    categoryId: 'cat-tank-caps',
    subcategoryId: 'subcat-fuel-cap',
    title: {
      en: 'BioDiesel Cap 40mm (Without Key)',
      tr: 'BioDiesel Kapağı 40mm (Anahtarsız)',
      ru: 'Крышка BioDiesel 40мм (без ключа)',
      de: 'BioDiesel-Deckel 40mm (Ohne Schlüssel)',
    },
    description: {
      en: 'New — 40mm biodiesel tank cap without lock, for Mercedes-Benz, Renault Rvi, DAF, MAN, Volvo.',
      tr: 'Yeni ürün — kilitsiz 40mm biodizel depo kapağı, Mercedes-Benz, Renault Rvi, DAF, MAN, Volvo için.',
      ru: 'Новинка — крышка бака для биодизеля 40мм без замка, для Mercedes-Benz, Renault Rvi, DAF, MAN, Volvo.',
      de: 'Neuheit — 40mm Biodiesel-Tankdeckel ohne Schloss, für Mercedes-Benz, Renault Rvi, DAF, MAN, Volvo.',
    },
    images: ['/samer-catalog-images/TankCap/img-013-095.png'],
    videoUrl: 'https://www.youtube.com/watch?v=jNQXAC9IVRw',
    specs: [
      {
        label: {
          en: 'Filler Neck Size',
          tr: 'Depo Ağzı',
          ru: 'Диаметр горловины',
          de: 'Einfüllstutzen',
        },
        value: '40mm',
      },
      {
        label: {
          en: 'Suitable For',
          tr: 'Uygunluk',
          ru: 'Совместимость',
          de: 'Geeignet für',
        },
        value: 'Mercedes-Benz, Renault Rvi, DAF, MAN, Volvo',
      },
    ],
  },
  {
    id: 'prod-s280-10',
    slug: 's280-10-blue-cap-60mm-with-key-scania',
    smrCode: 'S 280-10',
    oemNumbers: [],
    crossReferences: [],
    categoryId: 'cat-tank-caps',
    subcategoryId: 'subcat-fuel-cap',
    title: {
      en: 'Blue Cap 60mm (With Key) — For Scania',
      tr: 'Mavi Kapak 60mm (Anahtarlı) — Scania İçin',
      ru: 'Синяя крышка 60мм (с ключом) — для Scania',
      de: 'Blauer Deckel 60mm (Mit Schlüssel) — Für Scania',
    },
    description: {
      en: 'AdBlue-style blue 60mm locking cap for Scania, protective key included.',
      tr: 'Scania için AdBlue tarzı mavi 60mm kilitli kapak, koruyucu anahtar dahil.',
      ru: 'Синяя крышка 60мм в стиле AdBlue с замком для Scania, в комплекте защитный ключ.',
      de: 'Blauer AdBlue-Stil-Deckel 60mm mit Schloss für Scania, inkl. Schutzschlüssel.',
    },
    images: ['/samer-catalog-images/TankCap/img-011-072.png'],
    videoUrl: 'https://vimeo.com/76979871',
    specs: [
      {
        label: {
          en: 'Filler Neck Size',
          tr: 'Depo Ağzı',
          ru: 'Диаметр горловины',
          de: 'Einfüllstutzen',
        },
        value: '60mm',
      },
      {
        label: {
          en: 'Suitable For',
          tr: 'Uygunluk',
          ru: 'Совместимость',
          de: 'Geeignet für',
        },
        value: 'Scania',
      },
    ],
  },
  {
    id: 'prod-s280-25',
    slug: 's280-25-standard-stainless-radiator-cap-square',
    smrCode: 'S280-25',
    oemNumbers: [],
    crossReferences: [],
    categoryId: 'cat-tank-caps',
    subcategoryId: 'subcat-radiator-cap',
    title: {
      en: 'Standard Stainless Radiator Cap with Gasket — Square',
      tr: 'Standart Paslanmaz Contalı Radyatör Kapağı — Kare',
      ru: 'Крышка радиатора нержавеющая с прокладкой — квадратная',
      de: 'Standard-Edelstahl-Kühlerverschluss mit Dichtung — Eckig',
    },
    description: {
      en: 'New 2026 product — universal stainless radiator cap with gasket, square shape, working pressure 0.7-1.1 bar.',
      tr: '2026 yeni ürünü — evrensel paslanmaz radyatör kapağı, kare şekilli, çalışma basıncı 0,7-1,1 bar.',
      ru: 'Новинка 2026 — универсальная крышка радиатора из нержавеющей стали с прокладкой, квадратная форма, рабочее давление 0,7-1,1 бар.',
      de: 'Neuheit 2026 — universeller Edelstahl-Kühlerverschluss mit Dichtung, eckige Form, Betriebsdruck 0,7-1,1 bar.',
    },
    images: ['/products/NewProducts/img-002-005.png'],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    specs: [
      {
        label: {
          en: 'Working Pressure',
          tr: 'Çalışma Basıncı',
          ru: 'Рабочее давление',
          de: 'Betriebsdruck',
        },
        value: '0.7-1.1 bar',
      },
      {
        label: { en: 'Shape', tr: 'Şekil', ru: 'Форма', de: 'Form' },
        value: { en: 'Square', tr: 'Kare', ru: 'Квадратная', de: 'Eckig' },
      },
      {
        label: {
          en: 'Suitable For',
          tr: 'Uygunluk',
          ru: 'Совместимость',
          de: 'Geeignet für',
        },
        value: 'Universal',
      },
    ],
  },
  {
    id: 'prod-s280-26',
    slug: 's280-26-standard-stainless-radiator-cap-circle',
    smrCode: 'S280-26',
    oemNumbers: [],
    crossReferences: [],
    categoryId: 'cat-tank-caps',
    subcategoryId: 'subcat-radiator-cap',
    title: {
      en: 'Standard Stainless Radiator Cap with Gasket — Circle',
      tr: 'Standart Paslanmaz Contalı Radyatör Kapağı — Yuvarlak',
      ru: 'Крышка радиатора нержавеющая с прокладкой — круглая',
      de: 'Standard-Edelstahl-Kühlerverschluss mit Dichtung — Rund',
    },
    description: {
      en: 'New 2026 product — universal stainless radiator cap with gasket, round shape, working pressure 0.7-1.1 bar.',
      tr: '2026 yeni ürünü — evrensel paslanmaz radyatör kapağı, yuvarlak şekilli, çalışma basıncı 0,7-1,1 bar.',
      ru: 'Новинка 2026 — универсальная крышка радиатора из нержавеющей стали с прокладкой, круглая форма, рабочее давление 0,7-1,1 бар.',
      de: 'Neuheit 2026 — universeller Edelstahl-Kühlerverschluss mit Dichtung, runde Form, Betriebsdruck 0,7-1,1 bar.',
    },
    images: ['/products/NewProducts/img-002-006.png'],
    videoUrl: 'https://www.youtube.com/watch?v=jNQXAC9IVRw',
    specs: [
      {
        label: {
          en: 'Working Pressure',
          tr: 'Çalışma Basıncı',
          ru: 'Рабочее давление',
          de: 'Betriebsdruck',
        },
        value: '0.7-1.1 bar',
      },
      {
        label: { en: 'Shape', tr: 'Şekil', ru: 'Форма', de: 'Form' },
        value: { en: 'Circle', tr: 'Yuvarlak', ru: 'Круглая', de: 'Rund' },
      },
      {
        label: {
          en: 'Suitable For',
          tr: 'Uygunluk',
          ru: 'Совместимость',
          de: 'Geeignet für',
        },
        value: 'Universal',
      },
    ],
  },
  {
    id: 'prod-s280-27',
    slug: 's280-27-standard-stainless-fuel-cap-vented',
    smrCode: 'S280-27',
    oemNumbers: [
      'Massey Ferguson 240',
      'Massey Ferguson 265',
      'Massey Ferguson 285',
    ],
    crossReferences: [],
    categoryId: 'cat-tank-caps',
    subcategoryId: 'subcat-radiator-cap',
    title: {
      en: 'Standard Vented Fuel Cap — Stainless',
      tr: 'Standart Ventilli Depo Kapağı — Paslanmaz',
      ru: 'Вентилируемая крышка бака стандартная — нержавейка',
      de: 'Standard-Belüfteter Tankdeckel — Edelstahl',
    },
    description: {
      en: 'New 2026 product — standard vented stainless fuel cap for Massey Ferguson, Gold Tractor and universal applications.',
      tr: '2026 yeni ürünü — Massey Ferguson, Gold Traktör ve evrensel uygulamalar için standart ventilli paslanmaz depo kapağı.',
      ru: 'Новинка 2026 — стандартная вентилируемая крышка бака из нержавеющей стали для Massey Ferguson, Gold Traktor и универсального применения.',
      de: 'Neuheit 2026 — Standard-belüfteter Edelstahl-Tankdeckel für Massey Ferguson, Gold Traktör und universelle Anwendungen.',
    },
    images: ['/products/NewProducts/img-002-007.png'],
    videoUrl: 'https://vimeo.com/76979871',
    specs: [
      {
        label: {
          en: 'Ventilation',
          tr: 'Ventilasyon',
          ru: 'Вентиляция',
          de: 'Belüftung',
        },
        value: {
          en: 'Vented',
          tr: 'Ventilli',
          ru: 'Вентилируемая',
          de: 'Belüftet',
        },
      },
      {
        label: {
          en: 'Suitable For',
          tr: 'Uygunluk',
          ru: 'Совместимость',
          de: 'Geeignet für',
        },
        value:
          'Massey Ferguson (240, 265, 285), Gold Traktör (265, 285), Universal',
      },
    ],
  },
  {
    id: 'prod-s263',
    slug: 's263-anti-theft-device-universal-80mm',
    smrCode: 'S 263',
    oemNumbers: [],
    crossReferences: [],
    categoryId: 'cat-tank-caps',
    subcategoryId: 'subcat-anti-theft',
    title: {
      en: 'Anti-Theft Device — Universal, 80mm',
      tr: 'Hırsızlık Önleyici Cihaz — Evrensel, 80mm',
      ru: 'Устройство защиты от слива топлива — универсальное, 80мм',
      de: 'Diebstahlschutzvorrichtung — Universal, 80mm',
    },
    description: {
      en: 'Zinc plate coated ST37 steel anti-siphon device, 80mm filler neck, height 155mm, rubber seal and 2 rivets included.',
      tr: 'Çinko kaplamalı ST37 çelik yakıt hırsızlık önleyici, 80mm depo ağzı, yükseklik 155mm, lastik conta ve 2 perçin dahil.',
      ru: 'Устройство защиты от слива топлива из стали ST37 с цинковым покрытием, горловина 80мм, высота 155мм, резиновый уплотнитель и 2 заклёпки в комплекте.',
      de: 'Zinkbeschichtete ST37-Stahl-Diebstahlschutzvorrichtung, 80mm Einfüllstutzen, Höhe 155mm, inkl. Gummidichtung und 2 Nieten.',
    },
    images: ['/samer-catalog-images/TankCap/img-014-098.png'],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    specs: [
      {
        label: {
          en: 'Filler Neck Size',
          tr: 'Depo Ağzı',
          ru: 'Диаметр горловины',
          de: 'Einfüllstutzen',
        },
        value: '80mm',
      },
      {
        label: { en: 'Height', tr: 'Yükseklik', ru: 'Высота', de: 'Höhe' },
        value: '155mm',
      },
      {
        label: {
          en: 'Material',
          tr: 'Malzeme',
          ru: 'Материал',
          de: 'Material',
        },
        value: 'Zinc Plate Coated ST 37 Steel Sheet',
      },
      {
        label: {
          en: 'Accessories',
          tr: 'Aksesuarlar',
          ru: 'Комплектация',
          de: 'Zubehör',
        },
        value: 'Rubber Seal — 2x Rivet',
      },
    ],
  },
  {
    id: 'prod-s269',
    slug: 's269-anti-theft-device-scania-60mm',
    smrCode: 'S 269',
    oemNumbers: [],
    crossReferences: [],
    categoryId: 'cat-tank-caps',
    subcategoryId: 'subcat-anti-theft',
    title: {
      en: 'Anti-Theft Device — For Scania, 60mm',
      tr: 'Hırsızlık Önleyici Cihaz — Scania İçin, 60mm',
      ru: 'Устройство защиты от слива топлива — для Scania, 60мм',
      de: 'Diebstahlschutzvorrichtung — Für Scania, 60mm',
    },
    description: {
      en: 'Aluminium neck anti-siphon device for Scania, 60mm, height 155mm, rubber seal, 2 screws and Allen key included.',
      tr: 'Scania için alüminyum boyunlu yakıt hırsızlık önleyici, 60mm, yükseklik 155mm, lastik conta, 2 vida ve Allen anahtarı dahil.',
      ru: 'Устройство защиты от слива с алюминиевой горловиной для Scania, 60мм, высота 155мм, резиновый уплотнитель, 2 винта и шестигранный ключ в комплекте.',
      de: 'Diebstahlschutzvorrichtung mit Aluminiumhals für Scania, 60mm, Höhe 155mm, inkl. Gummidichtung, 2 Schrauben und Inbusschlüssel.',
    },
    images: ['/samer-catalog-images/TankCap/img-014-102.png'],
    videoUrl: 'https://www.youtube.com/watch?v=jNQXAC9IVRw',
    specs: [
      {
        label: {
          en: 'Filler Neck Size',
          tr: 'Depo Ağzı',
          ru: 'Диаметр горловины',
          de: 'Einfüllstutzen',
        },
        value: '60mm',
      },
      {
        label: {
          en: 'Neck Material',
          tr: 'Boyun Malzemesi',
          ru: 'Материал горловины',
          de: 'Halsmaterial',
        },
        value: 'Aluminum',
      },
      {
        label: {
          en: 'Suitable For',
          tr: 'Uygunluk',
          ru: 'Совместимость',
          de: 'Geeignet für',
        },
        value: 'Scania',
      },
    ],
  },
  {
    id: 'prod-s270',
    slug: 's270-anti-theft-device-universal-aluminium-80mm',
    smrCode: 'S 270',
    oemNumbers: [],
    crossReferences: [],
    categoryId: 'cat-tank-caps',
    subcategoryId: 'subcat-anti-theft',
    title: {
      en: 'Anti-Theft Device — Universal, Aluminium, 80mm',
      tr: 'Hırsızlık Önleyici Cihaz — Evrensel, Alüminyum, 80mm',
      ru: 'Устройство защиты от слива топлива — универсальное, алюминий, 80мм',
      de: 'Diebstahlschutzvorrichtung — Universal, Aluminium, 80mm',
    },
    description: {
      en: 'New — all-aluminium anti-siphon device, 80mm, height 155mm, available in black/nickel/yellow/raw coating, heights 27/35/40/45mm filler neck options.',
      tr: 'Yeni ürün — tamamen alüminyum yakıt hırsızlık önleyici, 80mm, yükseklik 155mm, siyah/nikel/sarı/ham kaplama seçenekleri, 27/35/40/45mm depo ağzı yükseklik seçenekleri.',
      ru: 'Новинка — полностью алюминиевое устройство защиты от слива, 80мм, высота 155мм, доступны покрытия чёрный/никель/жёлтый/без покрытия, варианты горловины 27/35/40/45мм.',
      de: 'Neuheit — komplett aus Aluminium gefertigte Diebstahlschutzvorrichtung, 80mm, Höhe 155mm, erhältlich in Schwarz/Nickel/Gelb/Roh, Einfüllstutzen-Höhen 27/35/40/45mm.',
    },
    images: ['/samer-catalog-images/TankCap/img-015-110.png'],
    videoUrl: 'https://vimeo.com/76979871',
    specs: [
      {
        label: {
          en: 'Filler Neck Size',
          tr: 'Depo Ağzı',
          ru: 'Диаметр горловины',
          de: 'Einfüllstutzen',
        },
        value: '80mm',
      },
      {
        label: { en: 'Height', tr: 'Yükseklik', ru: 'Высота', de: 'Höhe' },
        value: '155mm',
      },
      {
        label: {
          en: 'Material',
          tr: 'Malzeme',
          ru: 'Материал',
          de: 'Material',
        },
        value: 'Aluminium',
      },
      {
        label: {
          en: 'Coating Options',
          tr: 'Kaplama Seçenekleri',
          ru: 'Варианты покрытия',
          de: 'Beschichtungsoptionen',
        },
        value: 'Black, Nickel, Yellow, Raw',
      },
    ],
  },
  {
    id: 'prod-s275',
    slug: 's275-anti-theft-lock-60mm',
    smrCode: 'S 275',
    oemNumbers: [],
    crossReferences: [],
    categoryId: 'cat-tank-caps',
    subcategoryId: 'subcat-anti-theft-lock',
    title: {
      en: 'Anti-Theft Lock — 60mm (Universal)',
      tr: 'Hırsızlık Önleyici Kilit — 60mm (Evrensel)',
      ru: 'Замок защиты бака — 60мм (универсальный)',
      de: 'Diebstahlschutzschloss — 60mm (Universal)',
    },
    description: {
      en: 'Padlock-style protective housing that covers the tank cap area, 60mm, height 55mm, keylock sold separately.',
      tr: 'Depo kapağı bölgesini kaplayan asma kilit tarzı koruyucu muhafaza, 60mm, yükseklik 55mm, kilit ayrı satılır.',
      ru: 'Защитный кожух-навесной замок, закрывающий область крышки бака, 60мм, высота 55мм, замок продаётся отдельно.',
      de: 'Vorhängeschloss-artiges Schutzgehäuse, das den Tankdeckelbereich abdeckt, 60mm, Höhe 55mm, Schloss separat erhältlich.',
    },
    images: ['/samer-catalog-images/TankCap/img-016-115.png'],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    specs: [
      {
        label: {
          en: 'Filler Neck Size',
          tr: 'Depo Ağzı',
          ru: 'Диаметр горловины',
          de: 'Einfüllstutzen',
        },
        value: '60mm',
      },
      {
        label: { en: 'Height', tr: 'Yükseklik', ru: 'Высота', de: 'Höhe' },
        value: '55mm',
      },
      {
        label: { en: 'Note', tr: 'Not', ru: 'Примечание', de: 'Hinweis' },
        value: {
          en: 'Keylock sold separately',
          tr: 'Kilit ayrı satılır',
          ru: 'Замок продаётся отдельно',
          de: 'Schloss separat erhältlich',
        },
      },
    ],
  },
  {
    id: 'prod-s277',
    slug: 's277-anti-theft-lock-80mm',
    smrCode: 'S 277',
    oemNumbers: [],
    crossReferences: [],
    categoryId: 'cat-tank-caps',
    subcategoryId: 'subcat-anti-theft-lock',
    title: {
      en: 'Anti-Theft Lock — 80mm (Universal)',
      tr: 'Hırsızlık Önleyici Kilit — 80mm (Evrensel)',
      ru: 'Замок защиты бака — 80мм (универсальный)',
      de: 'Diebstahlschutzschloss — 80mm (Universal)',
    },
    description: {
      en: 'New — larger padlock-style protective housing, 80mm, height 55mm, keylock sold separately.',
      tr: 'Yeni ürün — daha büyük asma kilit tarzı koruyucu muhafaza, 80mm, yükseklik 55mm, kilit ayrı satılır.',
      ru: 'Новинка — увеличенный защитный кожух-навесной замок, 80мм, высота 55мм, замок продаётся отдельно.',
      de: 'Neuheit — größeres Vorhängeschloss-artiges Schutzgehäuse, 80mm, Höhe 55mm, Schloss separat erhältlich.',
    },
    images: ['/samer-catalog-images/TankCap/img-016-118.png'],
    videoUrl: 'https://www.youtube.com/watch?v=jNQXAC9IVRw',
    specs: [
      {
        label: {
          en: 'Filler Neck Size',
          tr: 'Depo Ağzı',
          ru: 'Диаметр горловины',
          de: 'Einfüllstutzen',
        },
        value: '80mm',
      },
      {
        label: { en: 'Height', tr: 'Yükseklik', ru: 'Высота', de: 'Höhe' },
        value: '55mm',
      },
    ],
  },

  // --- TRUCK & TRAILER REPAIR KITS ---
  {
    id: 'prod-tmp-9978',
    slug: 'tmp-9978-camshaft-repair-kit-bpw-42mm',
    smrCode: 'TMP 9978',
    oemNumbers: [],
    crossReferences: [],
    categoryId: 'cat-repair-kits',
    subcategoryId: 'subcat-camshaft-kit',
    title: {
      en: 'Repair Kit for Camshaft 42mm — BPW',
      tr: 'Kam Mili Tamir Takımı 42mm — BPW',
      ru: 'Ремкомплект распредвала 42мм — BPW',
      de: 'Reparatursatz für Nockenwelle 42mm — BPW',
    },
    description: {
      en: 'Complete camshaft repair kit for BPW axles, 42mm, includes bushings, seals, retaining rings and mounting hardware.',
      tr: 'BPW aksları için komple kam mili tamir takımı, 42mm, burç, keçe, seger ve montaj malzemelerini içerir.',
      ru: 'Полный ремкомплект распредвала для осей BPW, 42мм, включает втулки, сальники, стопорные кольца и крепёж.',
      de: 'Kompletter Nockenwellen-Reparatursatz für BPW-Achsen, 42mm, inkl. Buchsen, Dichtungen, Sicherungsringen und Montagematerial.',
    },
    images: ['/samer-catalog-images/RepairSet/img-002-007.png'],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    specs: [
      {
        label: { en: 'Diameter', tr: 'Çap', ru: 'Диаметр', de: 'Durchmesser' },
        value: '42mm',
      },
      {
        label: {
          en: 'Axle Type',
          tr: 'Aks Tipi',
          ru: 'Тип оси',
          de: 'Achstyp',
        },
        value: 'BPW',
      },
    ],
  },
  {
    id: 'prod-tmp-9569',
    slug: 'tmp-9569-camshaft-repair-kit-bpw-plastic-bearing-42mm',
    smrCode: 'TMP 9569',
    oemNumbers: [],
    crossReferences: [],
    categoryId: 'cat-repair-kits',
    subcategoryId: 'subcat-camshaft-kit',
    title: {
      en: 'Repair Kit for Camshaft 42mm — BPW (With Plastic Bearing)',
      tr: 'Kam Mili Tamir Takımı 42mm — BPW (Plastik Yataklı)',
      ru: 'Ремкомплект распредвала 42мм — BPW (с пластиковым подшипником)',
      de: 'Reparatursatz für Nockenwelle 42mm — BPW (mit Kunststofflager)',
    },
    description: {
      en: 'Camshaft repair kit for BPW axles, 42mm, with plastic bearing bushings, includes seals, retaining rings and mounting hardware.',
      tr: 'BPW aksları için kam mili tamir takımı, 42mm, plastik yataklı, keçe, seger ve montaj malzemelerini içerir.',
      ru: 'Ремкомплект распредвала для осей BPW, 42мм, с пластиковыми подшипниками, включает сальники, стопорные кольца и крепёж.',
      de: 'Nockenwellen-Reparatursatz für BPW-Achsen, 42mm, mit Kunststofflagerbuchsen, inkl. Dichtungen, Sicherungsringen und Montagematerial.',
    },
    images: ['/samer-catalog-images/RepairSet/img-002-008.png'],
    videoUrl: 'https://www.youtube.com/watch?v=jNQXAC9IVRw',
    specs: [
      {
        label: { en: 'Diameter', tr: 'Çap', ru: 'Диаметр', de: 'Durchmesser' },
        value: '42mm',
      },
      {
        label: {
          en: 'Axle Type',
          tr: 'Aks Tipi',
          ru: 'Тип оси',
          de: 'Achstyp',
        },
        value: 'BPW',
      },
      {
        label: {
          en: 'Bearing Type',
          tr: 'Yatak Tipi',
          ru: 'Тип подшипника',
          de: 'Lagertyp',
        },
        value: {
          en: 'Plastic',
          tr: 'Plastik',
          ru: 'Пластиковый',
          de: 'Kunststoff',
        },
      },
    ],
  },
  {
    id: 'prod-tmp-9569a',
    slug: 'tmp-9569a-camshaft-repair-kit-bpw-plastic-bearing-42mm',
    smrCode: 'TMP 9569A',
    oemNumbers: [],
    crossReferences: [],
    categoryId: 'cat-repair-kits',
    subcategoryId: 'subcat-camshaft-kit',
    title: {
      en: 'Repair Kit for Camshaft 42mm — BPW (With Plastic Bearing, Type A)',
      tr: 'Kam Mili Tamir Takımı 42mm — BPW (Plastik Yataklı, A Tipi)',
      ru: 'Ремкомплект распредвала 42мм — BPW (с пластиковым подшипником, тип A)',
      de: 'Reparatursatz für Nockenwelle 42mm — BPW (mit Kunststofflager, Typ A)',
    },
    description: {
      en: 'Alternative camshaft repair kit for BPW axles, 42mm, with plastic bearing bushings.',
      tr: 'BPW aksları için alternatif kam mili tamir takımı, 42mm, plastik yataklı.',
      ru: 'Альтернативный ремкомплект распредвала для осей BPW, 42мм, с пластиковыми подшипниками.',
      de: 'Alternativer Nockenwellen-Reparatursatz für BPW-Achsen, 42mm, mit Kunststofflagerbuchsen.',
    },
    images: ['/samer-catalog-images/RepairSet/img-002-009.png'],
    videoUrl: 'https://www.youtube.com/watch?v=9bZkp7q19f0',
    specs: [
      {
        label: { en: 'Diameter', tr: 'Çap', ru: 'Диаметр', de: 'Durchmesser' },
        value: '42mm',
      },
      {
        label: {
          en: 'Axle Type',
          tr: 'Aks Tipi',
          ru: 'Тип оси',
          de: 'Achstyp',
        },
        value: 'BPW',
      },
      {
        label: {
          en: 'Bearing Type',
          tr: 'Yatak Tipi',
          ru: 'Тип подшипника',
          de: 'Lagertyp',
        },
        value: {
          en: 'Plastic',
          tr: 'Plastik',
          ru: 'Пластиковый',
          de: 'Kunststoff',
        },
      },
    ],
  },
  {
    id: 'prod-tmp-9569b',
    slug: 'tmp-9569b-camshaft-repair-kit-bpw-sinter-bearing-42mm',
    smrCode: 'TMP 9569B',
    oemNumbers: [],
    crossReferences: [],
    categoryId: 'cat-repair-kits',
    subcategoryId: 'subcat-camshaft-kit',
    title: {
      en: 'Repair Kit for Camshaft 42mm — BPW (With Sinter Bearing)',
      tr: 'Kam Mili Tamir Takımı 42mm — BPW (Sinter Yataklı)',
      ru: 'Ремкомплект распредвала 42мм — BPW (со спечённым подшипником)',
      de: 'Reparatursatz für Nockenwelle 42mm — BPW (mit Sinterlager)',
    },
    description: {
      en: 'Camshaft repair kit for BPW axles, 42mm, with sintered bearing bushings for extended durability.',
      tr: 'BPW aksları için kam mili tamir takımı, 42mm, uzun ömür için sinter yataklı.',
      ru: 'Ремкомплект распредвала для осей BPW, 42мм, со спечёнными подшипниками повышенной износостойкости.',
      de: 'Nockenwellen-Reparatursatz für BPW-Achsen, 42mm, mit Sinterlagerbuchsen für erhöhte Lebensdauer.',
    },
    images: ['/samer-catalog-images/RepairSet/img-002-012.png'],
    videoUrl: 'https://vimeo.com/76979871',
    specs: [
      {
        label: { en: 'Diameter', tr: 'Çap', ru: 'Диаметр', de: 'Durchmesser' },
        value: '42mm',
      },
      {
        label: {
          en: 'Axle Type',
          tr: 'Aks Tipi',
          ru: 'Тип оси',
          de: 'Achstyp',
        },
        value: 'BPW',
      },
      {
        label: {
          en: 'Bearing Type',
          tr: 'Yatak Tipi',
          ru: 'Тип подшипника',
          de: 'Lagertyp',
        },
        value: { en: 'Sinter', tr: 'Sinter', ru: 'Спечённый', de: 'Sinter' },
      },
    ],
  },
  {
    id: 'prod-tmp-99104',
    slug: 'tmp-99104-brake-shoe-repair-kit-bpw',
    smrCode: 'TMP 99104',
    oemNumbers: [],
    crossReferences: [],
    categoryId: 'cat-repair-kits',
    subcategoryId: 'subcat-brake-shoe-kit',
    title: {
      en: 'Brake Shoe Repair Kit — BPW',
      tr: 'Balata Tamir Takımı — BPW',
      ru: 'Ремкомплект тормозных колодок — BPW',
      de: 'Bremsbacken-Reparatursatz — BPW',
    },
    description: {
      en: 'Complete brake shoe repair kit for BPW axles, includes springs, bushings, retaining rings and pins.',
      tr: 'BPW aksları için komple balata tamir takımı, yay, burç, seger ve pimleri içerir.',
      ru: 'Полный ремкомплект тормозных колодок для осей BPW: пружины, втулки, стопорные кольца и пальцы.',
      de: 'Kompletter Bremsbacken-Reparatursatz für BPW-Achsen, inkl. Federn, Buchsen, Sicherungsringen und Bolzen.',
    },
    images: ['/samer-catalog-images/RepairSet/img-002-013.png'],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    specs: [
      {
        label: {
          en: 'Axle Type',
          tr: 'Aks Tipi',
          ru: 'Тип оси',
          de: 'Achstyp',
        },
        value: 'BPW',
      },
    ],
  },
  {
    id: 'prod-tmp-99105',
    slug: 'tmp-99105-brake-shoe-repair-kit-bpw',
    smrCode: 'TMP 99105',
    oemNumbers: [],
    crossReferences: [],
    categoryId: 'cat-repair-kits',
    subcategoryId: 'subcat-brake-shoe-kit',
    title: {
      en: 'Brake Shoe Repair Kit — BPW (Alternative)',
      tr: 'Balata Tamir Takımı — BPW (Alternatif)',
      ru: 'Ремкомплект тормозных колодок — BPW (альтернативный)',
      de: 'Bremsbacken-Reparatursatz — BPW (Alternative)',
    },
    description: {
      en: 'Alternative brake shoe repair kit for BPW axles, includes springs, bushings, retaining rings and pins.',
      tr: 'BPW aksları için alternatif balata tamir takımı, yay, burç, seger ve pimleri içerir.',
      ru: 'Альтернативный ремкомплект тормозных колодок для осей BPW: пружины, втулки, стопорные кольца и пальцы.',
      de: 'Alternativer Bremsbacken-Reparatursatz für BPW-Achsen, inkl. Federn, Buchsen, Sicherungsringen und Bolzen.',
    },
    images: ['/samer-catalog-images/RepairSet/img-002-014.png'],
    videoUrl: 'https://www.youtube.com/watch?v=jNQXAC9IVRw',
    specs: [
      {
        label: {
          en: 'Axle Type',
          tr: 'Aks Tipi',
          ru: 'Тип оси',
          de: 'Achstyp',
        },
        value: 'BPW',
      },
    ],
  },
  {
    id: 'prod-tmp-9650',
    slug: 'tmp-9650-hub-cap-bpw-6-9-ton',
    smrCode: 'TMP 9650',
    oemNumbers: [],
    crossReferences: [],
    categoryId: 'cat-repair-kits',
    subcategoryId: 'subcat-hub-cap',
    title: {
      en: 'Hub Cap 6-9 Ton — BPW, Screw-In',
      tr: 'Göbek Kapağı 6-9 Ton — BPW, Vidalı',
      ru: 'Колпак ступицы 6-9 тонн — BPW, резьбовой',
      de: 'Nabenkappe 6-9 Tonnen — BPW, Einschraubbar',
    },
    description: {
      en: 'Screw-in hub cap for 6-9 ton BPW axles, thread 115x2, SW95, torque 500Nm, thickness 4mm.',
      tr: '6-9 ton BPW aksları için vidalı göbek kapağı, diş 115x2, SW95, tork 500Nm, kalınlık 4mm.',
      ru: 'Резьбовой колпак ступицы для осей BPW 6-9 тонн, резьба 115x2, SW95, момент затяжки 500Нм, толщина 4мм.',
      de: 'Einschraubbare Nabenkappe für 6-9 Tonnen BPW-Achsen, Gewinde 115x2, SW95, Drehmoment 500Nm, Stärke 4mm.',
    },
    images: ['/samer-catalog-images/RepairSet/img-004-029.png'],
    videoUrl: 'https://www.youtube.com/watch?v=9bZkp7q19f0',
    specs: [
      {
        label: {
          en: 'Load Capacity',
          tr: 'Taşıma Kapasitesi',
          ru: 'Грузоподъёмность',
          de: 'Tragfähigkeit',
        },
        value: '6-9 Ton',
      },
      {
        label: {
          en: 'Axle Type',
          tr: 'Aks Tipi',
          ru: 'Тип оси',
          de: 'Achstyp',
        },
        value: 'BPW',
      },
      {
        label: { en: 'Thread', tr: 'Diş', ru: 'Резьба', de: 'Gewinde' },
        value: '115x2 / SW95',
      },
      {
        label: {
          en: 'Torque',
          tr: 'Tork',
          ru: 'Момент затяжки',
          de: 'Drehmoment',
        },
        value: '500 Nm',
      },
      {
        label: { en: 'Thickness', tr: 'Kalınlık', ru: 'Толщина', de: 'Stärke' },
        value: '4mm',
      },
      {
        label: { en: 'Mounting', tr: 'Montaj', ru: 'Крепление', de: 'Montage' },
        value: {
          en: 'Screw-In',
          tr: 'Vidalı',
          ru: 'Резьбовое',
          de: 'Einschraubbar',
        },
      },
    ],
  },
  {
    id: 'prod-tmp-9899',
    slug: 'tmp-9899-hub-cap-bpw-16-20-ton',
    smrCode: 'TMP 9899',
    oemNumbers: [],
    crossReferences: [],
    categoryId: 'cat-repair-kits',
    subcategoryId: 'subcat-hub-cap',
    title: {
      en: 'Hub Cap 16-20 Ton — BPW, Screw-On',
      tr: 'Göbek Kapağı 16-20 Ton — BPW, Vidalı (Dıştan)',
      ru: 'Колпак ступицы 16-20 тонн — BPW, накидной',
      de: 'Nabenkappe 16-20 Tonnen — BPW, Aufschraubbar',
    },
    description: {
      en: 'Screw-on hub cap for 16-20 ton BPW axles, thread 230x3, SW120, torque 800Nm, thickness 4mm.',
      tr: '16-20 ton BPW aksları için dıştan vidalı göbek kapağı, diş 230x3, SW120, tork 800Nm, kalınlık 4mm.',
      ru: 'Накидной колпак ступицы для осей BPW 16-20 тонн, резьба 230x3, SW120, момент затяжки 800Нм, толщина 4мм.',
      de: 'Aufschraubbare Nabenkappe für 16-20 Tonnen BPW-Achsen, Gewinde 230x3, SW120, Drehmoment 800Nm, Stärke 4mm.',
    },
    images: ['/samer-catalog-images/RepairSet/img-004-031.png'],
    videoUrl: 'https://vimeo.com/76979871',
    specs: [
      {
        label: {
          en: 'Load Capacity',
          tr: 'Taşıma Kapasitesi',
          ru: 'Грузоподъёмность',
          de: 'Tragfähigkeit',
        },
        value: '16-20 Ton',
      },
      {
        label: {
          en: 'Axle Type',
          tr: 'Aks Tipi',
          ru: 'Тип оси',
          de: 'Achstyp',
        },
        value: 'BPW',
      },
      {
        label: { en: 'Thread', tr: 'Diş', ru: 'Резьба', de: 'Gewinde' },
        value: '230x3 / SW120',
      },
      {
        label: {
          en: 'Torque',
          tr: 'Tork',
          ru: 'Момент затяжки',
          de: 'Drehmoment',
        },
        value: '800 Nm',
      },
    ],
  },
  {
    id: 'prod-tmp-6601',
    slug: 'tmp-6601-hub-cap-gigant-sae',
    smrCode: 'TMP 6601',
    oemNumbers: [],
    crossReferences: [],
    categoryId: 'cat-repair-kits',
    subcategoryId: 'subcat-hub-cap',
    title: {
      en: 'Hub Cap — Gigant-SAE',
      tr: 'Göbek Kapağı — Gigant-SAE',
      ru: 'Колпак ступицы — Gigant-SAE',
      de: 'Nabenkappe — Gigant-SAE',
    },
    description: {
      en: 'Hex-style hub cap for Gigant-SAE axles, thread M165x2, SW148.',
      tr: 'Gigant-SAE aksları için altıgen göbek kapağı, diş M165x2, SW148.',
      ru: 'Шестигранный колпак ступицы для осей Gigant-SAE, резьба M165x2, SW148.',
      de: 'Sechskant-Nabenkappe für Gigant-SAE-Achsen, Gewinde M165x2, SW148.',
    },
    images: ['/samer-catalog-images/RepairSet/img-004-045.png'],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    specs: [
      {
        label: {
          en: 'Axle Type',
          tr: 'Aks Tipi',
          ru: 'Тип оси',
          de: 'Achstyp',
        },
        value: 'GIGANT - SAE',
      },
      {
        label: { en: 'Thread', tr: 'Diş', ru: 'Резьба', de: 'Gewinde' },
        value: 'M165x2 / SW148',
      },
    ],
  },
  {
    id: 'prod-tmp-5499',
    slug: 'tmp-5499-set-of-axle-lock-nuts-saf',
    smrCode: 'TMP 5499',
    oemNumbers: [],
    crossReferences: [],
    categoryId: 'cat-repair-kits',
    subcategoryId: 'subcat-axle-lock-nut',
    title: {
      en: 'Set of Axle Lock Nuts — SAF',
      tr: 'Aks Kilit Somunu Seti — SAF',
      ru: 'Комплект стопорных гаек оси — SAF',
      de: 'Achs-Sicherungsmuttern-Set — SAF',
    },
    description: {
      en: 'Complete axle lock nut set for SAF axles, includes lock nut, retaining ring and washer (TMP 5460, TMP 5470, TMP 5480).',
      tr: 'SAF aksları için komple aks kilit somunu seti, kilit somunu, seger ve pulu içerir (TMP 5460, TMP 5470, TMP 5480).',
      ru: 'Полный комплект стопорных гаек для осей SAF: гайка, стопорное кольцо и шайба (TMP 5460, TMP 5470, TMP 5480).',
      de: 'Komplettes Achs-Sicherungsmuttern-Set für SAF-Achsen, inkl. Sicherungsmutter, Sicherungsring und Scheibe (TMP 5460, TMP 5470, TMP 5480).',
    },
    images: ['/samer-catalog-images/RepairSet/img-008-098.png'],
    videoUrl: 'https://www.youtube.com/watch?v=jNQXAC9IVRw',
    specs: [
      {
        label: {
          en: 'Axle Type',
          tr: 'Aks Tipi',
          ru: 'Тип оси',
          de: 'Achstyp',
        },
        value: 'SAF',
      },
      {
        label: {
          en: 'Includes',
          tr: 'İçerik',
          ru: 'Комплектация',
          de: 'Enthält',
        },
        value: 'TMP 5460, TMP 5470, TMP 5480',
      },
    ],
  },
  {
    id: 'prod-tmp-5722',
    slug: 'tmp-5722-axle-lock-nut-left-saf',
    smrCode: 'TMP 5722',
    oemNumbers: [],
    crossReferences: [],
    categoryId: 'cat-repair-kits',
    subcategoryId: 'subcat-axle-lock-nut',
    title: {
      en: 'Axle Lock Nut (Left) — SAF, M120x2',
      tr: 'Aks Kilit Somunu (Sol) — SAF, M120x2',
      ru: 'Стопорная гайка оси (левая) — SAF, M120x2',
      de: 'Achs-Sicherungsmutter (Links) — SAF, M120x2',
    },
    description: {
      en: 'Left-hand thread axle lock nut for SAF axles, M120x2, SW140.',
      tr: 'SAF aksları için sol dişli aks kilit somunu, M120x2, SW140.',
      ru: 'Стопорная гайка оси с левой резьбой для SAF, M120x2, SW140.',
      de: 'Achs-Sicherungsmutter mit Linksgewinde für SAF-Achsen, M120x2, SW140.',
    },
    images: ['/samer-catalog-images/RepairSet/img-008-100.png'],
    videoUrl: 'https://www.youtube.com/watch?v=9bZkp7q19f0',
    specs: [
      {
        label: {
          en: 'Axle Type',
          tr: 'Aks Tipi',
          ru: 'Тип оси',
          de: 'Achstyp',
        },
        value: 'SAF',
      },
      {
        label: { en: 'Thread', tr: 'Diş', ru: 'Резьба', de: 'Gewinde' },
        value: 'M120x2 / SW140',
      },
      {
        label: { en: 'Side', tr: 'Taraf', ru: 'Сторона', de: 'Seite' },
        value: { en: 'Left', tr: 'Sol', ru: 'Левая', de: 'Links' },
      },
    ],
  },
  {
    id: 'prod-tmp-5548',
    slug: 'tmp-5548-bronze-bush-bpw',
    smrCode: 'TMP 9548',
    oemNumbers: [],
    crossReferences: [],
    categoryId: 'cat-repair-kits',
    subcategoryId: 'subcat-bush-bearing',
    title: {
      en: 'Bronze Bush — BPW, Ø42x46x72mm',
      tr: 'Bronz Burç — BPW, Ø42x46x72mm',
      ru: 'Бронзовая втулка — BPW, Ø42x46x72мм',
      de: 'Bronzebuchse — BPW, Ø42x46x72mm',
    },
    description: {
      en: 'Bronze bush for BPW camshaft repair, Ø42x46x72mm.',
      tr: 'BPW kam mili tamiri için bronz burç, Ø42x46x72mm.',
      ru: 'Бронзовая втулка для ремонта распредвала BPW, Ø42x46x72мм.',
      de: 'Bronzebuchse für BPW-Nockenwellenreparatur, Ø42x46x72mm.',
    },
    images: ['/samer-catalog-images/RepairSet/img-003-020.png'],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    specs: [
      {
        label: {
          en: 'Dimensions',
          tr: 'Ölçüler',
          ru: 'Размеры',
          de: 'Abmessungen',
        },
        value: 'Ø42x46x72mm',
      },
      {
        label: {
          en: 'Axle Type',
          tr: 'Aks Tipi',
          ru: 'Тип оси',
          de: 'Achstyp',
        },
        value: 'BPW',
      },
    ],
  },
  {
    id: 'prod-tmp-1841',
    slug: 'tmp-1841-spherical-bearing-ror',
    smrCode: 'TMP 1841',
    oemNumbers: [],
    crossReferences: [],
    categoryId: 'cat-repair-kits',
    subcategoryId: 'subcat-bush-bearing',
    title: {
      en: 'Spherical Bearing — ROR, Ø41.5x46 (Forged, Bronze Bush Inside)',
      tr: 'Küresel Yatak — ROR, Ø41.5x46 (Dövme, İçi Bronz Burçlu)',
      ru: 'Сферический подшипник — ROR, Ø41.5x46 (кованый, с бронзовой втулкой внутри)',
      de: 'Kugellager — ROR, Ø41.5x46 (Geschmiedet, mit Bronzebuchse innen)',
    },
    description: {
      en: 'Forged metal spherical bearing with bronze bush inside, for ROR axles, Ø41.5x46mm.',
      tr: 'ROR aksları için içi bronz burçlu dövme metal küresel yatak, Ø41.5x46mm.',
      ru: 'Кованый сферический подшипник с бронзовой втулкой внутри для осей ROR, Ø41.5x46мм.',
      de: 'Geschmiedetes Kugellager mit Bronzebuchse innen für ROR-Achsen, Ø41.5x46mm.',
    },
    images: ['/samer-catalog-images/RepairSet/img-009-113.png'],
    videoUrl: 'https://www.youtube.com/watch?v=jNQXAC9IVRw',
    specs: [
      {
        label: {
          en: 'Dimensions',
          tr: 'Ölçüler',
          ru: 'Размеры',
          de: 'Abmessungen',
        },
        value: 'Ø41.5x46',
      },
      {
        label: {
          en: 'Axle Type',
          tr: 'Aks Tipi',
          ru: 'Тип оси',
          de: 'Achstyp',
        },
        value: 'ROR',
      },
      {
        label: {
          en: 'Construction',
          tr: 'Yapı',
          ru: 'Конструкция',
          de: 'Bauart',
        },
        value: {
          en: 'Forged, bronze bush inside',
          tr: 'Dövme, içi bronz burçlu',
          ru: 'Кованый, с бронзовой втулкой',
          de: 'Geschmiedet, mit Bronzebuchse',
        },
      },
    ],
  },
  {
    id: 'prod-s290',
    slug: 's290-truck-door-inside-locking-hinge-scania',
    smrCode: 'S 290',
    oemNumbers: [],
    crossReferences: [],
    categoryId: 'cat-repair-kits',
    subcategoryId: 'subcat-door-lock',
    title: {
      en: 'Truck Door Inside Locking Hinge — For Scania',
      tr: 'Kamyon Kapı İç Kilit Menteşesi — Scania İçin',
      ru: 'Внутренний замок-петля двери грузовика — для Scania',
      de: 'Innenverriegelungsscharnier für LKW-Tür — Für Scania',
    },
    description: {
      en: 'New — inside-mounted locking hinge for Scania truck doors, protects the truck and driver from intruders.',
      tr: 'Yeni — Scania kamyon kapıları için içten monte edilen kilit menteşesi, kamyonu ve sürücüyü izinsiz girişlerden korur.',
      ru: 'Новинка — внутренний замок-петля для дверей грузовиков Scania, защищает от несанкционированного проникновения.',
      de: 'Neu — von innen montiertes Verriegelungsscharnier für Scania-LKW-Türen, schützt vor unbefugtem Zutritt.',
    },
    images: ['/samer-catalog-images/RepairSet/img-016-245.png'],
    videoUrl: 'https://vimeo.com/76979871',
    specs: [
      {
        label: {
          en: 'Suitable For',
          tr: 'Uygunluk',
          ru: 'Совместимость',
          de: 'Geeignet für',
        },
        value: 'SCANIA',
      },
    ],
  },
  {
    id: 'prod-s291',
    slug: 's291-truck-door-inside-locking-hinge-volvo',
    smrCode: 'S 291',
    oemNumbers: [],
    crossReferences: [],
    categoryId: 'cat-repair-kits',
    subcategoryId: 'subcat-door-lock',
    title: {
      en: 'Truck Door Inside Locking Hinge — For Volvo',
      tr: 'Kamyon Kapı İç Kilit Menteşesi — Volvo İçin',
      ru: 'Внутренний замок-петля двери грузовика — для Volvo',
      de: 'Innenverriegelungsscharnier für LKW-Tür — Für Volvo',
    },
    description: {
      en: 'New — mounted from the inside for extra protection on Volvo truck doors.',
      tr: 'Yeni — Volvo kamyon kapılarında ekstra koruma için içten monte edilir.',
      ru: 'Новинка — устанавливается изнутри для дополнительной защиты дверей Volvo.',
      de: 'Neu — von innen montiert für zusätzlichen Schutz bei Volvo-LKW-Türen.',
    },
    images: ['/samer-catalog-images/RepairSet/img-016-246.png'],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    specs: [
      {
        label: {
          en: 'Suitable For',
          tr: 'Uygunluk',
          ru: 'Совместимость',
          de: 'Geeignet für',
        },
        value: 'VOLVO',
      },
    ],
  },
  {
    id: 'prod-s292',
    slug: 's292-truck-door-inside-locking-hinge-renault-premium',
    smrCode: 'S 292',
    oemNumbers: [],
    crossReferences: [],
    categoryId: 'cat-repair-kits',
    subcategoryId: 'subcat-door-lock',
    title: {
      en: 'Truck Door Inside Locking Hinge — For Renault Premium',
      tr: 'Kamyon Kapı İç Kilit Menteşesi — Renault Premium İçin',
      ru: 'Внутренний замок-петля двери грузовика — для Renault Premium',
      de: 'Innenverriegelungsscharnier für LKW-Tür — Für Renault Premium',
    },
    description: {
      en: 'New — effective truck door protection for Renault Premium.',
      tr: 'Yeni — Renault Premium için etkili kamyon kapı koruması.',
      ru: 'Новинка — эффективная защита двери для Renault Premium.',
      de: 'Neu — wirksamer LKW-Türschutz für Renault Premium.',
    },
    images: ['/samer-catalog-images/RepairSet/img-016-250.png'],
    videoUrl: 'https://www.youtube.com/watch?v=jNQXAC9IVRw',
    specs: [
      {
        label: {
          en: 'Suitable For',
          tr: 'Uygunluk',
          ru: 'Совместимость',
          de: 'Geeignet für',
        },
        value: 'RENAULT Premium',
      },
    ],
  },
  {
    id: 'prod-s293',
    slug: 's293-truck-door-inside-locking-hinge-actros',
    smrCode: 'S 293',
    oemNumbers: [],
    crossReferences: [],
    categoryId: 'cat-repair-kits',
    subcategoryId: 'subcat-door-lock',
    title: {
      en: 'Truck Door Inside Locking Hinge — For Actros',
      tr: 'Kamyon Kapı İç Kilit Menteşesi — Actros İçin',
      ru: 'Внутренний замок-петля двери грузовика — для Actros',
      de: 'Innenverriegelungsscharnier für LKW-Tür — Für Actros',
    },
    description: {
      en: 'New — truck door cannot be opened from outside once installed on Actros.',
      tr: 'Yeni — Actros üzerine takıldığında kamyon kapısı dışarıdan açılamaz.',
      ru: 'Новинка — после установки на Actros дверь невозможно открыть снаружи.',
      de: 'Neu — nach der Montage bei Actros kann die LKW-Tür nicht von außen geöffnet werden.',
    },
    images: ['/samer-catalog-images/RepairSet/img-016-257.png'],
    videoUrl: 'https://vimeo.com/76979871',
    specs: [
      {
        label: {
          en: 'Suitable For',
          tr: 'Uygunluk',
          ru: 'Совместимость',
          de: 'Geeignet für',
        },
        value: 'ACTROS',
      },
    ],
  },
];

// export const MOCK_PRODUCTS: Product[] = [
//   {
//     id: 'prod-s010-02',
//     slug: 's010-02-standard-coupling-yellow-m16',
//     smrCode: 'S010-02',
//     oemNumbers: [],
//     crossReferences: [],
//     categoryId: 'cat-couplings',
//     subcategoryId: 'subcat-coupling',
//     title: {
//       en: 'Standard Yellow Air Coupling M16x1.5 (Service Line)',
//       tr: 'Standart Sarı Kaplin M16x1.5 (Servis Hattı)',
//       ru: 'Головка соединительная стандартная (Жёлтая) M16x1.5, рабочая магистраль',
//       de: 'Kupplungskopf Standard Gelb M16x1.5 (Betriebsleitung)',
//     },
//     description: {
//       en: 'Standard service line yellow air coupling with M16x1.5 connection, ISO 1728 / DIN 74342 compliant, aluminium body with Cr3 coating.',
//       tr: 'ISO 1728 / DIN 74342 uyumlu, M16x1,5 bağlantılı, Cr3 kaplamalı alüminyum gövdeli standart sarı servis kaplini.',
//       ru: 'Стандартная жёлтая пневматическая головка рабочей магистрали, резьба M16x1.5, соответствует ISO 1728 / DIN 74342, корпус — алюминий с покрытием Cr3.',
//       de: 'Standard-Kupplungskopf Gelb für die Betriebsleitung mit M16x1.5 Gewinde, konform mit ISO 1728 / DIN 74342, Aluminiumgehäuse mit Cr3-Beschichtung.',
//     },
//     images: ['/products/s010-02.jpg'],
//     specs: [
//       {
//         label: {
//           en: 'Thread Size',
//           tr: 'Diş Ölçüsü',
//           ru: 'Резьба',
//           de: 'Gewinde',
//         },
//         value: 'M16 x 1.5',
//       },
//       {
//         label: {
//           en: 'Color Code',
//           tr: 'Renk Kodu',
//           ru: 'Цветовая маркировка',
//           de: 'Farbcode',
//         },
//         value: {
//           en: 'Yellow (Service Line)',
//           tr: 'Sarı (Servis Hattı)',
//           ru: 'Жёлтая (рабочая магистраль)',
//           de: 'Gelb (Betriebsleitung)',
//         },
//       },
//       {
//         label: {
//           en: 'Body Material',
//           tr: 'Gövde Malzemesi',
//           ru: 'Материал корпуса',
//           de: 'Gehäusematerial',
//         },
//         value: {
//           en: 'Aluminium with Cr3 coating',
//           tr: 'Cr3 kaplamalı alüminyum',
//           ru: 'Алюминий с покрытием Cr3',
//           de: 'Aluminium mit Cr3-Beschichtung',
//         },
//       },
//       {
//         label: { en: 'Standard', tr: 'Standart', ru: 'Стандарт', de: 'Norm' },
//         value: 'ISO 1728 / DIN 74342',
//       },
//       {
//         label: {
//           en: 'Packaging',
//           tr: 'Paketleme',
//           ru: 'Упаковка',
//           de: 'Verpackung',
//         },
//         value: '10 pcs/Box — 2340 pcs/Pallet',
//       },
//     ],
//   },
//   {
//     id: 'prod-r030-100',
//     slug: 'r030-100-spiral-cable-7p-24v-n-type-3m',
//     smrCode: 'R030-100',
//     oemNumbers: [],
//     crossReferences: [],
//     categoryId: 'cat-cables',
//     subcategoryId: 'subcat-spiral-cable',
//     title: {
//       en: 'Spiral Cable with Plugs 7P/24V N-Type, 3.0m',
//       tr: 'Fişli Spiral Kablo 7P/24V N-Tipi, 3.0m',
//       ru: 'Спиральный кабель с вилками 7P/24V, тип N, 3.0м',
//       de: 'Spiralkabel mit Steckern 7P/24V N-Typ, 3,0m',
//     },
//     description: {
//       en: 'ISO 1185 / ISO 4141-3 compliant 7-pole 24V spiral cable with aluminium plugs, N-type, working length 3.0m, max extension 4.0m.',
//       tr: 'ISO 1185 / ISO 4141-3 uyumlu, alüminyum fişli 7 kutuplu 24V spiral kablo, N-tipi, çalışma uzunluğu 3.0m, maksimum uzama 4.0m.',
//       ru: 'Спиральный 7-полюсный кабель 24В по стандарту ISO 1185 / ISO 4141-3 с алюминиевыми вилками, тип N, рабочая длина 3.0м, макс. растяжение 4.0м.',
//       de: 'Spiralkabel 7-polig 24V nach ISO 1185 / ISO 4141-3 mit Aluminiumsteckern, N-Typ, Arbeitslänge 3,0m, maximale Dehnung 4,0m.',
//     },
//     images: ['/products/r030-100.jpg'],
//     specs: [
//       {
//         label: {
//           en: 'Working Length',
//           tr: 'Çalışma Uzunluğu',
//           ru: 'Рабочая длина',
//           de: 'Arbeitslänge',
//         },
//         value: '3.0 m',
//       },
//       {
//         label: {
//           en: 'Maximum Extension',
//           tr: 'Maksimum Uzama',
//           ru: 'Макс. растяжение',
//           de: 'Maximale Dehnung',
//         },
//         value: '4.0 m',
//       },
//       {
//         label: {
//           en: 'Plug Type',
//           tr: 'Fiş Tipi',
//           ru: 'Тип вилки',
//           de: 'Stecker-Typ',
//         },
//         value: '7P / 24V — N Type',
//       },
//       {
//         label: {
//           en: 'Coil Material',
//           tr: 'Sarma Malzemesi',
//           ru: 'Материал спирали',
//           de: 'Spiralmaterial',
//         },
//         value: 'Polyurethane',
//       },
//       {
//         label: {
//           en: 'Plug Material',
//           tr: 'Fiş Malzemesi',
//           ru: 'Материал вилки',
//           de: 'Steckermaterial',
//         },
//         value: 'Aluminium',
//       },
//       {
//         label: {
//           en: 'Wire Thickness',
//           tr: 'Tel Kalınlığı',
//           ru: 'Сечение проводов',
//           de: 'Drahtstärke',
//         },
//         value: '6x1.0mm + 1x1.5mm',
//       },
//       {
//         label: { en: 'Standard', tr: 'Standart', ru: 'Стандарт', de: 'Norm' },
//         value: 'ISO 1185 / ISO 4141-3',
//       },
//     ],
//   },
//   {
//     id: 'prod-s280-16v',
//     slug: 's280-16v-plastic-tank-cap-vented-locking-80mm',
//     smrCode: 'S280-16V',
//     oemNumbers: [
//       '5000787148',
//       '5001856142',
//       '5001864551',
//       '5000439032', // Renault
//       'A0004705205', // Mercedes-Benz ACTROS
//       '81122106027', // MAN
//       '20392751',
//       '3198271',
//       '1189577',
//       '8152630', // Volvo
//       '1599007', // Scania
//       '500302656', // Iveco
//       '2993918',
//       '2534687', // STARLIS/EUROSTAR/EUROTECH
//       '1697734', // DAF
//     ],
//     crossReferences: [],
//     categoryId: 'cat-tank-caps',
//     subcategoryId: 'subcat-fuel-cap',
//     title: {
//       en: 'Plastic Fuel Tank Cap Vented Locking Ø80mm',
//       tr: 'Plastik Depo Kapağı Ventilli Kilitli Ø80mm',
//       ru: 'Пластиковая крышка топливного бака вентилируемая с замком Ø80мм',
//       de: 'Plastik-Tankdeckel belüftet abschließbar Ø80mm',
//     },
//     description: {
//       en: 'New 2026 product — vented locking plastic fuel tank cap, Ø80mm, compatible with Renault, Mercedes ACTROS, MAN, Volvo, Scania, Iveco, STARLIS/EUROSTAR/EUROTECH and DAF.',
//       tr: '2026 yeni ürünü — ventilli kilitli plastik depo kapağı, Ø80mm, Renault, Mercedes ACTROS, MAN, Volvo, Scania, Iveco, STARLIS/EUROSTAR/EUROTECH ve DAF ile uyumlu.',
//       ru: 'Новинка 2026 года — вентилируемая пластиковая крышка топливного бака с замком, Ø80мм, совместима с Renault, Mercedes ACTROS, MAN, Volvo, Scania, Iveco, STARLIS/EUROSTAR/EUROTECH и DAF.',
//       de: 'Neuheit 2026 — belüfteter, abschließbarer Plastik-Tankdeckel, Ø80mm, kompatibel mit Renault, Mercedes ACTROS, MAN, Volvo, Scania, Iveco, STARLIS/EUROSTAR/EUROTECH und DAF.',
//     },
//     images: ['/products/s280-16v.jpg'],
//     specs: [
//       {
//         label: {
//           en: 'Filler Neck Size',
//           tr: 'Depo Ağzı Ölçüsü',
//           ru: 'Диаметр горловины',
//           de: 'Einfüllstutzengröße',
//         },
//         value: 'Ø80mm',
//       },
//       {
//         label: { en: 'Locking', tr: 'Kilit', ru: 'Замок', de: 'Verriegelung' },
//         value: {
//           en: 'Vented, Locking',
//           tr: 'Ventilli, Kilitli',
//           ru: 'Вентилируемая, с замком',
//           de: 'Belüftet, abschließbar',
//         },
//       },
//       {
//         label: {
//           en: 'Suitable For',
//           tr: 'Uygunluk',
//           ru: 'Совместимость',
//           de: 'Geeignet für',
//         },
//         value:
//           'Renault, Mercedes ACTROS, MAN, Volvo, Scania, Iveco, STARLIS/EUROSTAR/EUROTECH, DAF',
//       },
//     ],
//   },
//   {
//     id: 'prod-tmp-9978',
//     slug: 'tmp-9978-camshaft-repair-kit-bpw-42mm',
//     smrCode: 'TMP 9978',
//     oemNumbers: [],
//     crossReferences: [],
//     categoryId: 'cat-repair-kits',
//     subcategoryId: 'subcat-camshaft-kit',
//     title: {
//       en: 'Repair Kit for Camshaft 42mm — BPW',
//       tr: 'Kam Mili Tamir Takımı 42mm — BPW',
//       ru: 'Ремкомплект распредвала 42мм — BPW',
//       de: 'Reparatursatz für Nockenwelle 42mm — BPW',
//     },
//     description: {
//       en: 'Complete camshaft repair kit for BPW axles, 42mm, includes bushings, seals, retaining rings and mounting hardware.',
//       tr: 'BPW aksları için komple kam mili tamir takımı, 42mm, burç, keçe, seger ve montaj malzemelerini içerir.',
//       ru: 'Полный ремкомплект распредвала для осей BPW, 42мм, включает втулки, сальники, стопорные кольца и крепёж.',
//       de: 'Kompletter Nockenwellen-Reparatursatz für BPW-Achsen, 42mm, inkl. Buchsen, Dichtungen, Sicherungsringen und Montagematerial.',
//     },
//     images: ['/products/tmp-9978.jpg'],
//     specs: [
//       {
//         label: { en: 'Diameter', tr: 'Çap', ru: 'Диаметр', de: 'Durchmesser' },
//         value: '42mm',
//       },
//       {
//         label: {
//           en: 'Axle Type',
//           tr: 'Aks Tipi',
//           ru: 'Тип оси',
//           de: 'Achstyp',
//         },
//         value: 'BPW',
//       },
//     ],
//   },
// ];
