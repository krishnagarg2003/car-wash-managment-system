import express from 'express';
const router = express.Router();
// router.get("/", async (req, res) => {  
//     res.render('home', { title: 'Login Page' });
// }
router.get("/", async (req, res) => {
    res.render('home', { title: 'Home Page' });
});

// Services page route
router.get('/services', (req, res) => {
    res.render('services', { title: 'Our Services' });
});
router.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

router.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact' });
});

router.get('/login', (req, res) => {
    res.render('login', { title: 'Login' });
});

router.get('/register', (req, res) => {
    res.render('register', { title: 'register' });
});

router.get('/book', (req, res) => {
    res.render('book', { title: 'Book' });
});
router.get('/car-wash-details', (req, res) => {
    res.render('car-wash-details', { title: 'car-wash-details' });
});

router.get('/detailing', (req, res) => {
    res.render('detailing', { title: 'detailing' });
});

router.get('/polishing', (req, res) => {
    res.render('polishing', { title: 'polishing' });
});

router.get('/exterior-wash', (req, res) => {
    res.render('exterior-wash', { title: 'exterior-wash' });
});

router.get('/interiorcleaning', (req, res) => {
    res.render('interiorcleaning', { title: 'interiorcleaning' });
});

router.get('/wax_polosh', (req, res) => {
    res.render('wax_polosh', { title: 'wax_polosh' });
});

router.get('/engineCleaning', (req, res) => {
    res.render('engineCleaning', { title: 'engineCleaning' });
});

router.get('/ceramiccoating', (req, res) => {
    res.render('ceramiccoating', { title: 'ceramiccoating' });
});

router.get('/bookings', (req, res) => {
    res.render('bookings', { title: 'booking' });
});

router.get('/profile', (req, res) => {
    res.render('profile', { title: 'profile' });
});

export default router;