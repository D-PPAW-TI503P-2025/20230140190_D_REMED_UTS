const { User } = require('../models');
const bcrypt = require('bcrypt');

// =======================
// REGISTER (khusus user)
// =======================
exports.register = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Username dan password wajib diisi' });
    }

    try {
        // cek apakah username sudah dipakai
        const existingUser = await User.findOne({ where: { username } });
        if (existingUser) {
            return res.status(400).json({ message: 'Username sudah digunakan' });
        }

        // hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // buat user baru (role default = user)
        const user = await User.create({
            username,
            password: hashedPassword,
            role: 'user'
        });

        res.status(201).json({
            message: 'Registrasi berhasil',
            user: {
                id: user.id,
                username: user.username,
                role: user.role
            }
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// =======================
// LOGIN (user & admin)
// =======================
exports.login = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Username dan password wajib diisi' });
    }

    try {
        const user = await User.findOne({ where: { username } });

        if (!user) {
            return res.status(400).json({ message: 'User tidak ditemukan' });
        }

        // cek password hash
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.status(400).json({ message: 'Password salah' });
        }

        res.json({
            message: 'Login berhasil',
            user: {
                id: user.id,
                username: user.username,
                role: user.role
            }
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
