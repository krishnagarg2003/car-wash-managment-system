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
// );
// router.get("/Register", async (req, res) => {
 
   
//     res.render('Register', { title: 'Register Page' });

  
// });
// router.get("/Dashboard", async (req, res) => {
 
   
//     res.render('Dashboard', { title: 'Dashboard Page' });

  
// });
export default router;