import type { Config } from './types';

const LOVE_DATE = '2026-07-26';
const MARRIAGE_DATE = '2032-06-20';

export const DEFAULT_CONFIG: Config = {
boy: 'Sherif',
girl: 'Linens (Jana)',
loveDate: 2026-08-1,
marriageDate: 2032-06-20,
milestones: [
{ date: '2026-07-26', label: 'بداية التعارف', icon: '💕', story: 'لو اخدت حاجه كويسه وحده من العراقيه هو اني لاقيت موضوع افتحه معاكي ...' },
{ date: '2026-08-01', label: 'اعتراف الحب', icon: '💖', story: 'بصراحه كنت غيران يعني من حوار الباريستا ده بس كنت عامل اني تمام عشان حسيت ان لسا بدري عشان اقولك بس جيت تاني يوم قولت لك عادي جدا...' },
{ date: '2026-08-11', label: 'أول كول بينا', icon: '📞', story: 'كنت بكلمك وانا متكدر عشان الحج كان مسافر بس بصراحه يعني كنت مبسوط انا ببقى مبسوط لما بسمع صوتك...' },
{ date: '2026-08-17', label: 'أول هدية', icon: '🎁', story: 'اخدت اسبوعين عشان اخلي العمة تسمح لي اخد كتب من المكتبه بعد ما قولت لها اني بحبك جدا يعني و ان انتي عايزه الكتب دي عشان المدرسه بتاعتك...' },
{ date: '2032-06-20', label: 'يوم الجواز المنتظر', icon: '💍', story: 'يعني اتمنى نكمل و اجي اتجوزك ف عيد ميلادك عشان تبقى دي بدايه جديده ليكي معايا و اخلي الباقي من حياتك احسن على قد ما اقدر يعني...' },
 ],
quotes: [
" لما قولت لك ان عيونك حلوه مكنتش بحول أجملك او اقلد الناس و خلاص بس انتي عيونك فعلا مريحه جدا و لما قولتي لي محدش قالك كدا استغربت جدا يعني بس كنت مبسوط اني اول واحد اكتشف كدا بقا",
"لما قولتي ان تعابك ده مزعلك جدا يومها انا نزلت صليت ف الجامع و طولت شويه عشان كنت بدعيلك و لما قولت لك هنام معرفتش انام عشان حسيت انك مضايقة و الناس بتخليكي حاسه ان فيكي حاجه غلط من ساعتها وانا بدعي ليكي كل يوم تخفي و تبقي تمام"
 ],
music: {
enabled: false,
autoPlay: false,
playMode: 'sequence',
allowModeSwitch: true,
startPolicy: 'first',
volume: 0.7,
rememberState: true,
smartShuffleWindow: 3,
tracks: [],
},
secretMessage: ' لما قولت لك ان هدى ارتبطت كنت بقولك كدا عشان تعرفي ان مفيش مجال اساسا اكلمها عشان تطمني و على فكره هي بعتت لي مرتين ف اول اسبوع ارتبطنا فيه وانا رديت عليها بطريقه وحشه عشان متبعتش تاني'
photos: [
{ url: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=400&fit=crop', caption: 'ذكرى 1' },
{ url: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=400&h=400&fit=crop', caption: 'ذكرى 2' },
{ url: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=400&fit=crop', caption: 'ذكرى 3' },
 ],
googleAnalyticsId: '',
siteUrl: 'https://love.example.com',
siteName: 'Our story in my POV',
siteLocale: 'ar',
siteImage: '/og.png',
siteLogo: '/og.png',
seoDescription: 'our love story in my pov,
shareTemplates: ['classic', 'minimal', 'romantic'],
statsMode: 'hybrid',
stats: [
{ label: 'أيام الحب', value: 1, icon: '💕' },
{ label: 'أحلامنا', value: 1, icon: '💍' },
 ],
wishes: [
{ text: ' اتمنى نتجوز يعني و مخليش ف نفسك اي حاجه', done: false },
{ text: ' عايزين نجيب 4 عيال بقا عشان يبقى عندي منك كذا نسخه صغيره 😾', done: true },
 ],
timers: [
{ label: 'بداية الدانيا دي بقا', icon: '💕', date:2026-07-26 },
includeDefaultAnniversaries: false,
anniversaries: [
{
label: 'ذكرى التعارف',
icon: '💕',
date: '2026-07-26',
easterEggTemplates: {
soon: '💗 باقي {337} يوم على ذكرانا السنوية!',
today: ' مفيش حاجه مميزه اكتبها النهارده ايامي كلها مميزه معاكي 🤷🏻',
celebrate: 'كل سنة وانتي معياا 🕺🏽',
},
},
 ],
anniversaryCountdownThreshold: 10,
anniversarySortOrder: 'asc',
loadingLabel: 'بجهز ليكي أحلى حاجة...',
defaultTheme: 'dark',
sections: {
todaySummary: true,
stats: true,
timeline: true,
timers: true,
anniversary: true,
wishes: true,
photoWall: true,
themeToggle: true,
},
privacy: {
privateMode: true,
noIndex: true,
},
welcomeMessage: 'معرفتش ازاي اقدر افرحك وانتي مسافره خلاص ف قولت اعمل دي 🤷🏻',
enableWelcomeMessage: true,
passwordConfig: {
enabled: false,
password: '', يا زنقني و جمبك فاضي"
hint: ' بتقولي كدا كل شويه انتي',
successMessage: ' ازنقني كمان وانا راضي 🤷🏻',
errorMessage: ' ورقتك هتجيلك بكره كدا 😾',
bruteForceProtection: {
enabled: true,
freeAttempts: 5,
baseLockSeconds: 3,
maxLockSeconds: 120,
failureResetMinutes: 30,
},
},
};
