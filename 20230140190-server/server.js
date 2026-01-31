require('dotenv').config();
const app = require('./app');
const { sequelize, User } = require('./models');
const bcrypt = require('bcrypt');

const PORT = process.env.PORT || 3000;

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected');

    await sequelize.sync();
    console.log('Database synced');

    // ===== buat akun admin default jika belum ada =====
    const adminUsername = 'admin';
    const adminPassword = 'admin123';

    const existingAdmin = await User.findOne({
      where: { username: adminUsername }
    });

    if (!existingAdmin) {
      const hashedPassword = await bcrypt.hash(adminPassword, 10);

      await User.create({
        username: adminUsername,
        password: hashedPassword,
        role: 'admin'
      });

      console.log('Admin default dibuat:');
      console.log('username: admin');
      console.log('password: admin123');
    } else {
      console.log('Admin sudah ada');
    }

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
})();
