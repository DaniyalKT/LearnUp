let suggestedCoursesData = [
  {
    id: 1,
    title: "حسابداری",
    countCourses: "74 دوره آموزشی",
    img: "images/SuggestedCourse/career.png",
    bgColor: "241, 7, 80,0.1",
  },
  {
    id: 2,
    title: "کسب و کار",
    countCourses: "58 دوره آموزشی",
    img: "images/SuggestedCourse/briefcase.png",
    bgColor: "247, 179, 32,0.1",
  },
  {
    id: 3,
    title: "مهندسی نرم افزار",
    countCourses: "23 دوره آموزشی",
    img: "images/SuggestedCourse/content.png",
    bgColor: "0, 173, 182,0.1",
  },
  {
    id: 4,
    title: "بورس و بازار سهام",
    countCourses: "82 دوره آموزشی",
    img: "images/SuggestedCourse/speaker.png",
    bgColor: "185, 95, 253,0.1",
  },
  {
    id: 5,
    title: "طراحی و گرافیک",
    countCourses: "43 دوره آموزشی",
    img: "images/SuggestedCourse/designer.png",
    bgColor: "13, 214, 234,0.1",
  },
  {
    id: 6,
    title: "برنامه نویسی وب",
    countCourses: "65 دوره آموزشی",
    img: "images/SuggestedCourse/python.png",
    bgColor: "154, 222, 69,0.1",
  },
  {
    id: 7,
    title: "سبک زندگی",
    countCourses: "38 دوره آموزشی",
    img: "images/SuggestedCourse/health.png",
    bgColor: "234, 105, 13,0.1",
  },
  {
    id: 8,
    title: "ورزش و سلامت",
    countCourses: "43 دوره آموزشی",
    img: "images/SuggestedCourse/yoga.png",
    bgColor: "37, 165, 95,0.1",
  },
  {
    id: 9,
    title: "هنر و عکاسی",
    countCourses: "25 دوره آموزشی",
    img: "images/SuggestedCourse/photo.png",
    bgColor: "236, 80, 152,0.1",
  },
];

let popularCoursesData = [
  {
    id: 1,
    title: "آموزش تبدیل PSD به HTML (یک)",
    score: 4.8,
    price: 253,
    offPrice: 872,
    teacherName: "پریسا نصرتی",
    teacherImg: "images/teachers/user-2.jpg",
    numOfCourse: 14,
    courseImg: "images/PopularCourses/co-3.jpg",
  },

  {
    id: 2,
    title: "آموزش کار با وکتور در فتوشاپ ",
    score: 4.7,
    price: 138,
    offPrice: 199,
    teacherName: "مهرداد نوروزی",
    teacherImg: "images/teachers/user-1.jpg",
    numOfCourse: 54,
    courseImg: "images/PopularCourses/co-2.jpg",
  },

  {
    id: 3,
    title: "آموزش ساخت ربات تلگرام با PHP ",
    score: 4.3,
    price: 620,
    offPrice: 700,
    teacherName: "نازنین عبدی",
    teacherImg: "images/teachers/user-4.jpg",
    numOfCourse: 54,
    courseImg: "images/PopularCourses/co-5.jpg",
  },

  {
    id: 4,
    title: "آموزش برنامه نویسی‌اندروید ",
    score: 4.2,
    price: 365,
    offPrice: 420,
    teacherName: "علی خسروجردی",
    teacherImg: "images/teachers/user-3.jpg",
    numOfCourse: 25,
    courseImg: "images/PopularCourses/co-4.jpg",
  },

  {
    id: 5,
    title: "آموزش ساخت فروشگاه دیجی استایل با لاراول ",
    score: 4.7,
    price: 630,
    offPrice: 851,
    teacherName: "الهام کریمی",
    teacherImg: "images/teachers/user-3.jpg",
    numOfCourse: 26,
    courseImg: "images/PopularCourses/co-6.jpg",
  },

  {
    id: 6,
    title: "آموزش ASP.Net - ساخت سایت شخصی",
    score: 4.5,
    price: 750,
    offPrice: 0,
    teacherName: "آدام ولیسون",
    teacherImg: "images/teachers/user-5.jpg",
    numOfCourse: 26,
    courseImg: "images/PopularCourses/co-5.jpg",
  },
];

let teachersCoursesData = [
  {
    id: 1,
    img: "images/teachers/user-1.jpg",
    name: "مهرداد نوروزی",
    skill: "طراح وب ",
    studentCount: 32,
    courseCount: 3,
  },
  {
    id: 2,
    img: "images/teachers/user-5.jpg",
    name: "وحید فرخ زاده",
    skill: "مدیر عامل ",
    studentCount: 32,
    courseCount: 3,
  },
  {
    id: 3,
    img: "images/teachers/user-4.jpg",
    name: "شادی فلاح",
    skill: "برنامه نویس ",
    studentCount: 32,
    courseCount: 3,
  },
  {
    id: 4,
    img: "images/teachers/user-3.jpg",
    name: "آدام ویستون",
    skill: "مدیر فروش ",
    studentCount: 32,
    courseCount: 3,
  },
  {
    id: 5,
    img: "images/teachers/user-2.jpg",
    name: "نیلوفر صمدی",
    skill: "مدیر پروژه",
    studentCount: 32,
    courseCount: 3,
  },
];

let lastWeblogDatas = [
  {
    id: 1,
    title: "چطور امتحان حضوری موفقی داشته باشیم؟",
    img: "images/Articles/b-3.jpg",
    authorsName: "مهدی حسینی",
    authorsimg: "images/Teachers/user-3.jpg",
  },
  {
    id: 2,
    title: "لزوم یادگیری زبان در دنیای امروزی!",
    img: "images/Articles/b-2.jpg",
    authorsName: "پریسا نصرتی",
    authorsimg: "images/Teachers/user-2.jpg",
  },
  {
    id: 3,
    title: "چطور زبان انگلیسی را سریع یاد بگیریم",
    img: "images/Articles/b-1.jpg",
    authorsName: "مسعود صالحی",
    authorsimg: "images/Teachers/user-1.jpg",
  },
];

let representativesDatas = [
  {
    id: 1,
    img: "images/Representatives/brand-1.png",
  },
  {
    id: 2,
    img: "images/Representatives/brand-2.png",
  },
  {
    id: 3,
    img: "images/Representatives/brand-3.png",
  },
  {
    id: 4,
    img: "images/Representatives/brand-4.png",
  },
  {
    id: 5,
    img: "images/Representatives/brand-5.png",
  },
  {
    id: 6,
    img: "images/Representatives/brand-6.png",
  },
  {
    id: 7,
    img: "images/Representatives/brand-7.png",
  },
];

let coursesData = [
  {
    id: 1,
    title: 'آموزش ساخت ربات تلگرام با PHP',
    img: 'images/PopularCourses/co-3.jpg',
    price: 985 ,
    authorsName: 'مهدی حسینی',
    authorsimg: 'images/teachers/user-3.jpg'
  },
  {
    id: 2,
    title: 'آموزش ASP.Net - ساخت سایت شخصی',
    img: 'images/PopularCourses/co-2.jpg',
    price: 580 ,
    authorsName: 'پریسا نصرتی',
    authorsimg: 'images/teachers/user-2.jpg'
  },
  {
    id: 3,
    title:'آموزش ساخت فروشگاه دیجی استایل با لاراول',
    img: 'images/PopularCourses/co-1.jpg',
    price: 785 ,
    authorsName: 'مهرداد عظیمی',
    authorsimg: 'images/teachers/user-1.jpg'
  },
  {
    id: 4,
    title: 'آموزش کار با وکتور در فتوشاپ',
    img: 'images/PopularCourses/co-6.jpg',
    price: 359 ,
    authorsName: 'نازنین عبدی',
    authorsimg: 'images/teachers/user-6.jpg'
  },
  {
    id: 5,
    title: 'آموزش تبدیل PSD به HTML (یک)',
    img: 'images/PopularCourses/co-5.jpg',
    price: 258 ,
    authorsName: 'سعید شیخ زاده',
    authorsimg: 'images/teachers/user-5.jpg'
  },
  {
    id: 6,
    title: 'آموزش برنامه نویسی‌اندروید',
    img: 'images/PopularCourses/co-4.jpg',
    price: 650 ,
    authorsName: 'الهام کریمی',
    authorsimg: 'images/teachers/user-4.jpg'
  }
]

let studentCommandData = [
  {
    id: 1,
    img: 'images/teachers/user-4.jpg',
    name: 'نازنین عبدی',
    Skill: 'طراح وب',
    command: 'چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.'
  },
  {
    id: 2,
    img: 'images/teachers/user-1.jpg',
    name: 'مهرداد نوروزی',
    Skill: 'برنامه نویس وب',
    command: 'ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. '
  },
  {
    id: 3,
    img: 'images/teachers/user-3.jpg',
    name: 'علی خسروجردی',
    Skill: 'طراح وب',
    command: 'کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد'
  },  
  {
    id: 4,
    img: 'images/teachers/user-2.jpg',
    name: 'پریسا نصرتی',
    Skill: 'مدیر پروژه',
    command: 'در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد'
  },  
]

export {
  suggestedCoursesData,
  popularCoursesData,
  teachersCoursesData,
  lastWeblogDatas,
  representativesDatas,
  coursesData,
  studentCommandData
};
