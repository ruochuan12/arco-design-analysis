import 'dayjs/locale/ar';

// 阿拉伯语（埃及）
// Translate by Google
const Calendar = {
  formatYear: 'YYYY',
  formatMonth: 'MMMM YYYY',
  today: 'اليوم',
  view: {
    month: 'شهر',
    year: 'عام',
    week: 'أسبوع',
    day: 'يوم',
  },
  month: {
    long: {
      January: 'ديسمبر',
      February: 'نوفمبر',
      March: 'أكتوبر',
      April: 'سبتمبر',
      May: ' أغسطس',
      June: 'يوليه',
      July: 'يونيو',
      August: 'مايو',
      September: 'أبريل',
      October: 'مارس',
      November: 'فبراير',
      December: 'يناير',
    },
    short: {
      January: 'ديسمبر',
      February: 'نوفمبر',
      March: 'أكتوبر',
      April: 'سبتمبر',
      May: ' أغسطس',
      June: 'يوليه',
      July: 'يونيو',
      August: 'مايو',
      September: 'أبريل',
      October: 'مارس',
      November: 'فبراير',
      December: 'يناير',
    },
  },
  week: {
    long: {
      self: 'أسبوع',
      monday: 'الجمعة',
      tuesday: 'الخميس',
      wednesday: 'الأربعاء',
      thursday: 'الثلاثاء',
      friday: 'الإثنين',
      saturday: 'السبت',
      sunday: 'الأحد',
    },
    short: {
      self: 'أسبوع',
      monday: 'الجمعة',
      tuesday: 'الخميس',
      wednesday: 'الأربعاء',
      thursday: 'الثلاثاء',
      friday: 'الإثنين',
      saturday: 'السبت',
      sunday: 'الأحد',
    },
  },
};

export default {
  locale: 'ar-EG',
  dayjsLocale: 'ar',
  Calendar,
  DatePicker: {
    Calendar,
    placeholder: {
      date: 'الرجاء تحديد تاريخ',
      week: 'الرجاء تحديد أسبوع',
      month: 'الرجاء تحديد شهر',
      year: 'الرجاء تحديد عام',
      quarter: 'الرجاء تحديد ربع',
    },
    placeholders: {
      date: ['تاريخ البدء', 'تاريخ الانتهاء'],
      week: ['أسبوع البدء', 'نهاية الأسبوع'],
      month: ['شهر البدء', 'نهاية الشهر'],
      year: ['سنة البدء', 'نهاية عام'],
      quarter: ['بداية ربع السنة', 'نهاية الربع'],
    },
    selectTime: 'فترة الاختيار',
    selectDate: 'حدد تاريخ',
    today: 'اليوم',
    now: 'الآن',
    ok: 'موافق',
  },
  Drawer: {
    okText: 'موافق',
    cancelText: 'إلغاء',
  },
  Empty: {
    noData: 'لايوجد بيانات',
  },
  Modal: {
    okText: 'موافق',
    cancelText: 'إلغاء',
  },
  Pagination: {
    goto: 'اذهب إلى',
    page: 'الصفحة',
    countPerPage: 'عنصر / صفحة',
    total: '{0} الإجمالي',
    prev: 'لصفحة السابقة',
    next: 'الصفحة التالية',
    currentPage: 'صفحة {0}',
    prevSomePages: 'تقدم إلى الأمام {0} من الصفحات',
    nextSomePages: 'للخلف {0} من الصفحات',
    pageSize: 'رقم الصفحة',
  },
  Popconfirm: {
    okText: 'موافق',
    cancelText: 'إلغاء',
  },
  Table: {
    okText: 'موافق',
    resetText: 'إعادة تعيين',
    sortAscend: 'انقر للفرز تصاعديًا',
    sortDescend: 'انقر للفرز تنازليًا',
    cancelSort: 'انقر لإلغاء الفرز',
  },
  TimePicker: {
    ok: 'موافق',
    placeholder: 'الرجاء تحديد الوقت',
    placeholders: ['وقت البدء', 'وقت النهاية'],
    now: 'الآن',
  },
  Progress: {
    success: 'نجاح',
    error: 'خطأ',
  },
  Upload: {
    start: 'بداية',
    cancel: 'يلغي',
    delete: 'حذف',
    reupload: 'انقر للمحاول مجددا',
    upload: 'انقر للتحميل',
    preview: 'معاينة',
    drag: 'انقر أو اسحب الملف إلى هذه المنطقة للتحميل',
    dragHover: 'حرر الملف وابدأ في التحميل',
    error: 'التحميل فشل',
  },
  Typography: {
    copy: 'ينسخ',
    copied: 'نسخ',
    edit: 'تعديل',
    fold: 'يطوى',
    unfold: 'وسعت',
  },
  Transfer: {
    resetText: 'إعادة تعيين',
  },
  ImagePreview: {
    fullScreen: 'كامل الشاشة',
    rotateRight: 'استدارة لليمين',
    rotateLeft: 'استدر يسارا',
    zoomIn: 'تكبير',
    zoomOut: 'تصغير',
    originalSize: 'الحجم الأصلي',
  },
};
