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
  article: string;
  oemNumbers?: string[];
  crossReferences: string[];
  subcategoryId: string;
  categoryId: string;
  title: LocalizedText;
  description: LocalizedText;
  images: string[];
  youtubeUrl?: string;
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
    article: 'S010-01',
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
    images: ['/products/s010-01.jpg', '/products/r030-101.jpg', '/products/r030-130.jpg'],
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
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
        }
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
        }
      },
    ],
  },
  {
    id: 'prod-s010-02',
    slug: 's010-02-standard-coupling-yellow-m16',
    article: 'S010-02',
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
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
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
        }
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
        }
      },
    ],
  },
  {
    id: 'prod-s060-01',
    slug: 's060-01-short-valve-m12',
    article: 'S060-01',
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
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
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
        }
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
        }
      },
    ],
  },
  {
    id: 'prod-s130-01',
    slug: 's130-01-pneumatic-cylinder-m6',
    article: 'S130-01',
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
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
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
    article: 'S130-02',
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
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
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
    article: 'S140',
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
    images: ['/products/s140.jpg', '/products/r030-101.jpg', '/products/r030-130.jpg'],
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
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
        }
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
    article: 'S182-245 PUR',
    oemNumbers: ['000 429 41 85', '133 348 2', '81512106001'],
    crossReferences: ['COJALI 2211010', 'DT 2.30100'],
    categoryId: 'cat-couplings',
    subcategoryId: 'subcat-hose',
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
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
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
        }
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
    article: 'S185-111 PUR',
    oemNumbers: ['000 584 02 38', 'A0005840238'],
    crossReferences: ['MERCEDES A0005840238', 'DT 4.80302'],
    categoryId: 'cat-couplings',
    subcategoryId: 'subcat-hose',
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
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
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
        }
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
    article: 'S186-115',
    oemNumbers: ['000 583 07 10', '81512206010', '133 348 5'],
    crossReferences: ['DT 2.30120', 'COJALI 2211020'],
    categoryId: 'cat-couplings',
    subcategoryId: 'subcat-hose',
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
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    specs: [
      {
        label: { en: 'Length', tr: 'Uzunluk', ru: 'Длина', de: 'Länge' },
        value: {
          en: '15 m',
          tr: '15 m',
          ru: '15 м',
          de: '15 m',
        }
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
        }
      },
    ],
  },

  // --- ELECTRICAL CABLES & plugs ---
  {
    id: 'prod-r020-01a',
    slug: 'r020-01a-24v-7pin-plastic-plug-n-type',
    article: 'R020-01A',
    oemNumbers: ['111008', '111009', '51305287', '000 545 62 14'],
    crossReferences: ['HELLA 8JB001933011', 'DT 4.80250'],
    categoryId: 'cat-cables',
    subcategoryId: 'subcat-plug',
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
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
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
        }
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
        }
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
        }
      },
    ],
  },
  {
    id: 'prod-r010-02',
    slug: 'r010-02-24v-7pin-green-plug-s-type',
    article: 'R010-02',
    oemNumbers: ['111030', '000 545 78 14', '81254320002'],
    crossReferences: ['HELLA 8JA001930001', 'DT 4.80252'],
    categoryId: 'cat-cables',
    subcategoryId: 'subcat-plug',
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
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
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
        }
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
        }
      },
      {
        label: { en: 'Color', tr: 'Renk', ru: 'Цвет', de: 'Farbe' },
        value: {
          en: 'Green',
          tr: 'Yeşil',
          ru: 'Зеленый',
          de: 'Grün',
        }
      },
    ],
  },
  {
    id: 'prod-r010-04',
    slug: 'r010-04-ebs-7pin-plug-crimp-terminals',
    article: 'R010-04',
    oemNumbers: ['441 035 001 0', '000 545 80 14', '150 493 8'],
    crossReferences: ['WABCO 4410350010', 'COJALI 2210001', 'DT 2.30200'],
    categoryId: 'cat-cables',
    subcategoryId: 'subcat-plug',
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
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
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
        }
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
        }
      },
    ],
  },
  {
    id: 'prod-r030-101',
    slug: 'r030-101-24v-metal-plug-spiral-cable-n-type-4-5m',
    article: 'R030-101',
    oemNumbers: ['000 540 83 07', '81254116020', '139 217 8'],
    crossReferences: ['HELLA 8KA007123021', 'DT 2.30150'],
    categoryId: 'cat-cables',
    subcategoryId: 'subcat-cable',
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
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
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
        }
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
        }
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
        }
      },
    ],
  },
  {
    id: 'prod-r030-130',
    slug: 'r030-130-24v-plastic-green-plug-cable-s-type-4m',
    article: 'R030-130',
    oemNumbers: ['000 540 84 07', '81254116021', '139 217 9'],
    crossReferences: ['HELLA 8KA007123031', 'DT 2.30151'],
    categoryId: 'cat-cables',
    subcategoryId: 'subcat-cable',
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
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
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
        }
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
        }
      },
    ],
  },
  {
    id: 'prod-r030-172',
    slug: 'r030-172-ebs-7-pin-spiral-cable-5m',
    article: 'R030-172',
    oemNumbers: ['446 008 240 0', '20803584', '000 540 00 80'],
    crossReferences: ['WABCO 4460082400', 'COJALI 2210100', 'DT 2.30210'],
    categoryId: 'cat-cables',
    subcategoryId: 'subcat-cable',
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
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
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
        }
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
        }
      },
      {
        label: { en: 'Standard', tr: 'Standard', ru: 'Стандарт', de: 'Norm' },
        value: 'ISO 7638-1 (EBS / ABS)',
      },
    ],
  },

  // --- FUEL TANK CAPS & ANTI-THEFT ---
  {
    id: 'prod-s280-02',
    slug: 's280-02-b60-galvanized-fuel-cap-with-key',
    article: 'S280-02',
    oemNumbers: ['000 470 00 05', '81122100010', '133 348 9'],
    crossReferences: ['FEBI 12150', 'DT 4.62600'],
    categoryId: 'cat-tank-caps',
    subcategoryId: 'subcat-caps',
    title: {
      en: 'B60 Galvanized Fuel Tank Cap Locking with Keys (Universal)',
      tr: 'B60 GALVANİZ DEPO KAPAĞI ANAHTARLI',
      ru: 'Крышка топливного бака B60 оцинкованная с ключом (Универсальная)',
      de: 'B60 Verzinkter Tankdeckel abschließbar mit Schlüsseln',
    },
    description: {
      en: '60mm internal neck universal galvanized steel locking fuel tank cap supplied with 2 keys.',
      tr: '60 mm iç boğaz çaplı, 2 adet anahtarı ile birlikte универсал galvaniz kaplı kilitli depo kapağı.',
      ru: 'Универсальная оцинкованная стальная крышка топливного бака 60мм с замком и 2 ключами.',
      de: 'Universal verzinkter Tankdeckel Ø60mm mit Schließzylinder und 2 Schlüsseln.',
    },
    images: ['/products/s280-02.jpg'],
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    specs: [
      {
        label: {
          en: 'Neck Diameter',
          tr: 'Boğaz Çapı',
          ru: 'Диаметр горловины',
          de: 'Stutzendurchmesser',
        },
        value: 'Ø 60 mm',
      },
      {
        label: {
          en: 'Material',
          tr: 'Malzeme',
          ru: 'Материал',
          de: 'Material',
        },
        value: {
          en: 'Galvanized Steel',
          tr: 'Galvaniz Çelik',
          ru: 'Оцинкованная сталь',
          de: 'Verzinkter Stahl',
        }
      },
      {
        label: {
          en: 'Locking',
          tr: 'Kilit Tipi',
          ru: 'Замок',
          de: 'Verschluss',
        },
        value: {
          en: 'Locking with Keys',
          tr: 'Anahtarlı Kilitli',
          ru: 'С замком и ключами',
          de: 'Abschließbar mit Schlüsseln',
        }
      },
    ],
  },
  {
    id: 'prod-s280-15z',
    slug: 's280-15z-b80a-plastic-fuel-cap-chain-axor',
    article: 'S280-15Z',
    oemNumbers: ['000 470 04 05', 'A0004700405', '81122100030'],
    crossReferences: ['FEBI 17220', 'DT 4.62605'],
    categoryId: 'cat-tank-caps',
    subcategoryId: 'subcat-caps',
    title: {
      en: 'B80A Plastic Locking Fuel Tank Cap with Chain (Axor Type)',
      tr: 'B80A PLASTİK DEPO KAPAĞI ANAHTARLI + ZİNCİRLİ',
      ru: 'Крышка топливного бака B80A пластиковая с ключом и цепочкой (Тип Axor)',
      de: 'B80A Kunststoff-Tankdeckel mit Kette & Schlüssel (Axor-Typ)',
    },
    description: {
      en: '80mm heavy-duty plastic fuel cap with internal lock cylinder and retaining chain. Fits Mercedes Axor, Actros, and Atego trucks.',
      tr: 'Mercedes Axor, Actros ve Atego için 80mm iç kilit mekanizmalı ve emniyet zincirli plastik depo kapağı.',
      ru: 'Пластиковая крышка топливного бака 80мм с замком и предохранительной цепочкой для Mercedes Axor/Actros.',
      de: '80mm Kunststoff-Tankdeckel mit Zylinderschloss und Haltekette für Mercedes Axor/Actros.',
    },
    images: ['/products/s280-15z.jpg'],
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    specs: [
      {
        label: {
          en: 'Neck Diameter',
          tr: 'Boğaz Çapı',
          ru: 'Диаметр горловины',
          de: 'Stutzendurchmesser',
        },
        value: 'Ø 80 mm (B80A)',
      },
      {
        label: {
          en: 'Application',
          tr: 'Uygulama',
          ru: 'Применяемость',
          de: 'Anwendung',
        },
        value: 'Mercedes-Benz Axor / Actros / Atego',
      },
      {
        label: {
          en: 'Features',
          tr: 'Özellik',
          ru: 'Особенности',
          de: 'Eigenschaften',
        },
        value: {
          en: 'With Lock & Chain',
          tr: 'Anahtarlı + Zincirli',
          ru: 'С замком и цепочкой',
          de: 'Mit Schloss & Kette',
        }
      },
    ],
  },
  {
    id: 'prod-s280-17',
    slug: 's280-17-b80a-side-lock-fuel-cap-daf-volvo-rvi',
    article: 'S280-17',
    oemNumbers: ['1428471', '20398322', '7420398322', '000 470 07 05'],
    crossReferences: ['FEBI 27240', 'DT 2.12050'],
    categoryId: 'cat-tank-caps',
    subcategoryId: 'subcat-caps',
    title: {
      en: 'B80A Plastic Side-Lock Fuel Cap (DAF / Volvo / Renault)',
      tr: 'B80A PLASTİK YANDAN KİLİTLİ DEPO KAPAĞI',
      ru: 'Крышка топливного бака B80A с боковым замком (DAF / Volvo / Renault)',
      de: 'B80A Kunststoff Tankdeckel Seitenschloss (DAF / Volvo / RVI)',
    },
    description: {
      en: '80mm plastic fuel filler cap featuring a side-locking mechanism with chain. Compatible with DAF, Volvo, and Renault (RVI) trucks.',
      tr: 'DAF, Volvo ve Renault Trucks uyumlu, 80 mm yandan kilit mekanizmasına ve zincire sahip plastik depo kapağı.',
      ru: 'Пластиковая крышка бензобака 80мм с удобным боковым замком и цепочкой для грузовиков DAF, Volvo и Renault.',
      de: '80mm Tankdeckel mit seitlichem Schließzylinder und Haltekette für DAF, Volvo und Renault Trucks.',
    },
    images: ['/products/s280-17.jpg'],
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    specs: [
      {
        label: {
          en: 'Neck Diameter',
          tr: 'Boğaz Çapı',
          ru: 'Диаметр горловины',
          de: 'Stutzendurchmesser',
        },
        value: 'Ø 80 mm',
      },
      {
        label: {
          en: 'Application',
          tr: 'Uygulama',
          ru: 'Применяемость',
          de: 'Anwendung',
        },
        value: 'DAF / Volvo / Renault Trucks (RVI)',
      },
      {
        label: {
          en: 'Locking Mechanism',
          tr: 'Kilit Mekanizması',
          ru: 'Тип замка',
          de: 'Schließmechanismus',
        },
        value: {
          en: 'Side-Locking Cylinder',
          tr: 'Yandan Kilitli Silindir',
          ru: 'Замковый цилиндр с боковым запиранием',
          de: 'Seitlich schließender Zylinder',
        }
      },
    ],
  },
  {
    id: 'prod-s280-10',
    slug: 's280-10-adblue-cap-60mm-scania-volvo-renault',
    article: 'S280-10',
    oemNumbers: ['1925363', '20926022', '7420926022'],
    crossReferences: ['FEBI 39420', 'DT 1.22250'],
    categoryId: 'cat-tank-caps',
    subcategoryId: 'subcat-adblue',
    title: {
      en: 'AdBlue Tank Cap Ø60mm Locking (Scania / Volvo / Renault)',
      tr: 'ADBLUE SCANIA DEPO KAPAĞI 60mm ANAHTARLI',
      ru: 'Крышка бака AdBlue Ø60мм с замком (Scania / Volvo / Renault)',
      de: 'AdBlue-Tankdeckel Ø60mm abschließbar (Scania / Volvo / RVI)',
    },
    description: {
      en: 'Blue plastic 60mm locking cap designed for AdBlue / DEF tanks on Scania, Volvo, and Renault trucks (includes adapter).',
      tr: 'Scania, Volvo ve Renault kamyonların AdBlue depoları için özel adaptörlü ve kilitli 60mm mavi depo kapağı.',
      ru: 'Синяя пластиковая крышка бака AdBlue 60мм с замком и адаптером для Scania, Volvo и Renault.',
      de: 'Blauer 60mm AdBlue-Deckel mit Schloss und Adapter passend für Scania, Volvo und Renault LKW.',
    },
    images: ['/products/s280-10.jpg'],
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    specs: [
      {
        label: {
          en: 'Neck Diameter',
          tr: 'Boğaz Çapı',
          ru: 'Диаметр горловины',
          de: 'Stutzendurchmesser',
        },
        value: 'Ø 60 mm',
      },
      {
        label: {
          en: 'Application',
          tr: 'Uygulama',
          ru: 'Применяемость',
          de: 'Anwendung',
        },
        value: 'Scania / Volvo / Renault Trucks',
      },
      {
        label: {
          en: 'Fluid Type',
          tr: 'Sıvı Tipi',
          ru: 'Тип жидкости',
          de: 'Flüssigkeit',
        },
        value: 'AdBlue / DEF (AUS 32)',
      },
    ],
  },
  {
    id: 'prod-s280-11',
    slug: 's280-11-adblue-cap-60mm-iveco',
    article: 'S280-11',
    oemNumbers: ['504197301', '500054341'],
    crossReferences: ['IVECO 504197301', 'DT 2.12061'],
    categoryId: 'cat-tank-caps',
    subcategoryId: 'subcat-adblue',
    title: {
      en: 'AdBlue Tank Cap Ø60mm Locking for Iveco',
      tr: 'ADBLUE IVECO DEPO KAPAĞI 60mm ANAHTARLI',
      ru: 'Крышка бака AdBlue Ø60мм с замком для Iveco',
      de: 'AdBlue-Tankdeckel Ø60mm abschließbar für Iveco',
    },
    description: {
      en: 'AdBlue urea tank filler cap Ø60mm with keys specifically engineered for Iveco Stralis and Eurocargo ranges.',
      tr: 'Iveco Stralis ve Eurocargo serisi araçların AdBlue üre depoları için tasarlanmış 60 mm kilitli mavi kapak.',
      ru: 'Крышка горловины бака AdBlue 60мм с замком для грузовиков Iveco Stralis и Eurocargo.',
      de: '60mm AdBlue-Tankdeckel mit Schlüsseln speziell für Iveco Stralis und Eurocargo.',
    },
    images: ['/products/s280-11.jpg', '/products/r030-101.jpg', '/products/r030-130.jpg'],
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    specs: [
      {
        label: {
          en: 'Neck Diameter',
          tr: 'Boğaz Çapı',
          ru: 'Диаметр горловины',
          de: 'Stutzendurchmesser',
        },
        value: 'Ø 60 mm',
      },
      {
        label: {
          en: 'Application',
          tr: 'Uygulama',
          ru: 'Применяемость',
          de: 'Anwendung',
        },
        value: 'Iveco Stralis / Eurocargo / Trakker',
      },
      {
        label: {
          en: 'Fluid Type',
          tr: 'Sıvı Tipi',
          ru: 'Тип жидкости',
          de: 'Flüssigkeit',
        },
        value: 'AdBlue / DEF',
      },
    ],
  },
  {
    id: 'prod-s280-18',
    slug: 's280-18-adblue-cap-40mm-non-locking-universal',
    article: 'S280-18',
    oemNumbers: ['21584844', '1784666', '81154020000', '1747043'],
    crossReferences: ['FEBI 44645', 'DT 5.61010'],
    categoryId: 'cat-tank-caps',
    subcategoryId: 'subcat-adblue',
    title: {
      en: 'AdBlue Tank Cap Ø40mm Non-Locking with Strap (Universal)',
      tr: 'ADBLUE DEPO KAPAĞI 40mm KİLİTSİZ KUYRUKLU',
      ru: 'Крышка бака AdBlue Ø40мм без замка с хвостиком (Универсальная)',
      de: 'AdBlue-Tankdeckel Ø40mm ohne Schloss mit Halteband',
    },
    description: {
      en: 'Universal 40mm non-locking AdBlue cap with rubber retaining strap. Fits DAF, MAN, Mercedes, Scania, Volvo, Iveco.',
      tr: 'DAF, MAN, Mercedes, Scania, Volvo ve Iveco için kauçuk tutucu kuyruklu universal 40mm kilitli olmayan AdBlue kapağı.',
      ru: 'Универсальная крышка AdBlue 40мм без замка с резиновым удерживающим ремешком для DAF, MAN, MB, Scania, Volvo.',
      de: 'Universal 40mm AdBlue-Deckel ohne Schloss mit Fangband für DAF, MAN, MB, Scania, Volvo, Iveco.',
    },
    images: ['/products/s280-18.jpg'],
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    specs: [
      {
        label: {
          en: 'Neck Diameter',
          tr: 'Boğaz Çapı',
          ru: 'Диаметр горловины',
          de: 'Stutzendurchmesser',
        },
        value: 'Ø 40 mm',
      },
      {
        label: {
          en: 'Application',
          tr: 'Uygulama',
          ru: 'Применяемость',
          de: 'Anwendung',
        },
        value: 'Universal (DAF / MAN / MB / Scania / Volvo)',
      },
      {
        label: {
          en: 'Retainer',
          tr: 'Tutucu',
          ru: 'Фиксатор',
          de: 'Halterung',
        },
        value: {
          en: 'With Rubber Strap',
          tr: 'Kuyruklu',
          ru: 'С резиновым ремешком (поводком)',
          de: 'Mit Halteband',
        }
      },
    ],
  },
  {
    id: 'prod-s270',
    slug: 's270-aluminum-fuel-anti-theft-device-80mm',
    article: 'S270',
    oemNumbers: ['20510123', '1439854', 'A0004700305', '81122120010'],
    crossReferences: ['GSI 80012', 'KAPITAN AT-80', 'DT 2.12100'],
    categoryId: 'cat-tank-caps',
    subcategoryId: 'subcat-antitheft',
    title: {
      en: 'Fuel Anti-Theft Device Full Aluminum Ø80mm (Universal)',
      tr: '80mm KOMPLE ALÜMİNYUM DEPO MAZOT KORUMASI',
      ru: 'Защита от слива топлива (Антисифон) цельноалюминиевая Ø80мм',
      de: 'Kraftstoff-Diebstahlsicherung Vollaluminium Ø80mm',
    },
    description: {
      en: 'Heavy-duty 100% cast aluminum anti-siphon baffle device fitting internal Ø80mm fuel tank necks to prevent fuel theft.',
      tr: 'Yakıt hırsızlığını önlemek için 80 mm iç boğaz çaplı depolara uygun %100 döküm alüminyum mazot koruma cihazı.',
      ru: 'Цельноалюминиевое антисифонное защитное устройство горловины бака Ø80мм для предотвращения кражи дизеля.',
      de: 'Massive Vollaluminium Anti-Siphon Diebstahlsicherung für Tankeinfüllstutzen Ø80mm gegen Treibstoffdiebstahl.',
    },
    images: ['/products/s270.jpg', '/products/s270_2.jpg'],
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    specs: [
      {
        label: {
          en: 'Neck Diameter',
          tr: 'Boğaz Çapı',
          ru: 'Диаметр горловины',
          de: 'Stutzendurchmesser',
        },
        value: 'Ø 80 mm',
      },
      {
        label: {
          en: 'Material',
          tr: 'Malzeme',
          ru: 'Материал',
          de: 'Material',
        },
        value: {
          en: '100% Cast Aluminum Alloy',
          tr: '%100 Alüminyum Döküm Alaşım',
          ru: '100% литой алюминиевый сплав',
          de: '100% Aluminium-Gusslegierung',
        }
      },
      {
        label: {
          en: 'Fuel Flow Rate',
          tr: 'Akış Hızı',
          ru: 'Пропускная способность',
          de: 'Durchflussrate',
        },
        value: {
          en: '120 L/min (Fast Filling)',
          tr: '120 L/dk (Hızlı Dolum)',
          ru: '120 л/мин (Быстрая заправка)',
          de: '120 L/min (Schnellbefüllung)',
        }
      },
    ],
  },
  {
    id: 'prod-s277',
    slug: 's277-fuel-anti-theft-cap-80mm',
    article: 'S277',
    oemNumbers: ['20510125', 'A0004700805'],
    crossReferences: ['KAPITAN AT-80C', 'DT 4.62620'],
    categoryId: 'cat-tank-caps',
    subcategoryId: 'subcat-antitheft',
    title: {
      en: 'Fuel Anti-Theft Protection Safety Cap Ø80mm',
      tr: '80mm DEPO MAZOT KORUMA KAPAĞI',
      ru: 'Защитная крышка-антислив для топливного бака Ø80мм',
      de: 'Kraftstoff-Diebstahlschutz-Kappe Ø80mm',
    },
    description: {
      en: 'Anti-theft safety insert cap designed to be permanently mounted on Ø80mm fuel tank inlets.',
      tr: '80 mm depo girişlerine kalıcı olarak monte edilmek üzere tasarlanmış hırsızlık önleyici koruma kapağı.',
      ru: 'Защитная вставка-крышка для монтажа в горловину бака Ø80мм во избежание несанкционированного слива.',
      de: 'Sicherheits-Einsatzkappe gegen Treibstoffdiebstahl zur Festmontage an Ø80mm Tankstutzen.',
    },
    images: ['/products/s277.jpg'],
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    specs: [
      {
        label: {
          en: 'Neck Diameter',
          tr: 'Boğaz Çapı',
          ru: 'Диаметр горловины',
          de: 'Stutzendurchmesser',
        },
        value: 'Ø 80 mm',
      },
      {
        label: {
          en: 'Compatibility',
          tr: 'Uyumluluk',
          ru: 'Совместимость',
          de: 'Kompatibilität',
        },
        value: 'Scania, Volvo, DAF, MAN, Mercedes Ø80 Tanks',
      },
    ],
  },

  // --- TRUCK & TRAILER REPAIR KITS ---
  {
    id: 'prod-tmp-9978',
    slug: 'tmp-9978-bpw-kingpin-repair-kit-42mm',
    article: 'TMP9978',
    oemNumbers: ['09.801.06.09.0', '0980106090', '05.801.06.09.0'],
    crossReferences: ['BPW 0980106090', 'FEBI 11612', 'DT 10.13005'],
    categoryId: 'cat-repair-kits',
    subcategoryId: 'subcat-bpw',
    title: {
      en: 'BPW Axle Brake Caliper & Pivot Repair Kit Ø42mm',
      tr: 'BPW TAMİR TAKIMI Ø42',
      ru: 'Ремкомплект суппорта / шкворня BPW Ø42мм',
      de: 'BPW Achse Reparatursatz Ø42mm',
    },
    description: {
      en: 'Complete axle suspension and pivot shaft repair kit for BPW commercial trailer axles with Ø42mm pin diameter.',
      tr: 'Ø42mm mil çapına sahip BPW treyler dingilleri için komple süspansiyon ve perno tamir takımı.',
      ru: 'Полный ремкомплект поворотно-направляющих пальцев/шкворней для осей прицепов BPW (диаметр Ø42 мм).',
      de: 'Kompletter Reparatursatz für BPW-Anhängerachsen mit Ø42mm Bolzendurchmesser.',
    },
    images: ['/products/tmp9978.jpg'],
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    specs: [
      {
        label: {
          en: 'Pin Diameter',
          tr: 'Perno Çapı',
          ru: 'Диаметр пальца',
          de: 'Bolzendurchmesser',
        },
        value: 'Ø 42 mm',
      },
      {
        label: {
          en: 'Axle System',
          tr: 'Dingil Sistemi',
          ru: 'Ось',
          de: 'Achssystem',
        },
        value: 'BPW Eco / Eco Plus',
      },
    ],
  },
  {
    id: 'prod-tmp-5772',
    slug: 'tmp-5772-trailer-bushing-repair-kit-38x60x55',
    article: 'TMP5772',
    oemNumbers: ['A4003300018', '1501234'],
    crossReferences: ['SAF 4.177.3012.00', 'DT 3.67010'],
    categoryId: 'cat-repair-kits',
    subcategoryId: 'subcat-trailer',
    title: {
      en: 'Trailer Axle Bushing Repair Kit Ø38xØ60x55mm',
      tr: 'TREYLER TAMİR TAKIMI Ø38xØ60x55',
      ru: 'Ремкомплект втулок прицепа Ø38xØ60x55мм',
      de: 'Anhänger-Buchsen-Reparatursatz Ø38xØ60x55mm',
    },
    description: {
      en: 'Precision trailer suspension bushing repair set. Dimensions: Inner Ø38mm, Outer Ø60mm, Height 55mm.',
      tr: 'Hassas treyler süspansiyon burç tamir seti. Boyutlar: İç Ø38mm, Dış Ø60mm, Yükseklik 55mm.',
      ru: 'Ремкомплект сайлентблоков/втулок подвески прицепа. Размеры: Внутренний Ø38мм, Внешний Ø60мм, Высота 55мм.',
      de: 'Präzisions-Buchsensatz für Anhängeraufhängung. Abmessungen: Innen Ø38mm, Außen Ø60mm, Höhe 55mm.',
    },
    images: ['/products/tmp5772.jpg', '/products/r030-101.jpg', '/products/r030-130.jpg'],
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    specs: [
      {
        label: {
          en: 'Dimensions (ID x OD x H)',
          tr: 'Boyutlar (İÇ x DIŞ x Y)',
          ru: 'Размеры (Вн x Внш x В)',
          de: 'Abmessungen',
        },
        value: 'Ø 38 x Ø 60 x 55 mm',
      },
      {
        label: {
          en: 'Application',
          tr: 'Uygulama',
          ru: 'Применяемость',
          de: 'Anwendung',
        },
        value: {
          en: 'Universal Trailer Suspensions / SAF / BPW',
          tr: 'Evrensel Treyler Süspansiyonları / SAF / BPW',
          ru: 'Универсальные подвески полуприцепов / SAF / BPW',
          de: 'Universelle Auflieger-Federungen / SAF / BPW',
        }
      },
    ],
  },
  {
    id: 'prod-tmp-1852',
    slug: 'tmp-1852-ror-axle-pivot-repair-kit-42mm',
    article: 'TMP1852',
    oemNumbers: ['21224172', '21222442'],
    crossReferences: ['ROR 21224172', 'MERITOR M6010', 'DT 10.13020'],
    categoryId: 'cat-repair-kits',
    subcategoryId: 'subcat-ror',
    title: {
      en: 'ROR / Meritor Axle Repair Kit Ø42mm',
      tr: 'ROR TAMİR TAKIMI Ø42',
      ru: 'Ремкомплект оси ROR / Meritor Ø42мм',
      de: 'ROR / Meritor Achse Reparatursatz Ø42mm',
    },
    description: {
      en: 'Heavy-duty suspension pivot and kingpin repair kit for ROR (Rubery Owen Rockwell) trailer axles with Ø42mm shaft.',
      tr: 'Ø42 mm milli ROR (Rubery Owen Rockwell) treyler dingilleri için ağır hizmet süspansiyon perno tamir takımı.',
      ru: 'Ремкомплект шарниров подвески и осей ROR (Rubery Owen Rockwell) для прицепов с диаметром вала Ø42 мм.',
      de: 'Reparatursatz für ROR (Rubery Owen Rockwell) Anhängerachsen mit Ø42mm Wellendurchmesser.',
    },
    images: ['/products/tmp1852.jpg'],
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    specs: [
      {
        label: {
          en: 'Shaft Diameter',
          tr: 'Mil Çapı',
          ru: 'Диаметр вала',
          de: 'Wellendurchmesser',
        },
        value: 'Ø 42 mm',
      },
      {
        label: {
          en: 'Axle Compatibility',
          tr: 'Dingil Uyumu',
          ru: 'Совместимость с осями',
          de: 'Achskompatibilität',
        },
        value: 'ROR / Meritor Flexair / TM Axles',
      },
    ],
  },
];
