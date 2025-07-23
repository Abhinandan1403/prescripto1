import jwt from 'jsonwebtoken'

// user authentication middleware
const authUser = async (req, res, next) => {
    try {
        const { token } = req.headers;

        if (!token) {
            return res.json({ success: false, message: 'Not Authorized. Login again.' });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.id;  // Use req.userId instead of req.body.userId

        next();
    } catch (error) {
        console.log('Auth Error:', error);
        res.json({ success: false, message: error.message });
    }
};

export default authUser;