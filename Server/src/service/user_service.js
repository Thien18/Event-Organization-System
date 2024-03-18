const db = require('../models/index')
const Account = db.Account;
const User = db.User;


User.belongsTo(Account, { foreignKey: 'email' });

const getAllUser = async () =>{
    try {
        const allUser = await User.findAll({
            include: [
                {
                  model: Account,
                  as: 'Account',
                  attributes: ['status']
                },
              ],
        });
        return allUser;
    }catch (error) {
        console.error('Lỗi:', error);
      } 
}

const lockedUser = async (email) =>{
    try {
        
        const lckAccount = await Account.findOne({
          where :{email} 
        });
        if (lckAccount) {
        // Nếu tìm thấy tài khoản, thì khoá nó
          
          await lckAccount.update({
            status: false
          });
          return true;
        } else {
          console.log('Không tìm thấy tài khoản serviec');
          return false;
        }
    }catch (error) {
        console.error('Lỗi service:', error);
      } 
};

const unlockUser = async (email) =>{
  try {
      
      const lckAccount = await Account.findOne({
        where :{email} 
      });
      if (lckAccount) {
      // Nếu tìm thấy tài khoản, thì khoá nó
        
        await lckAccount.update({
          status: true
        });
        return true;
      } else {
        console.log('Không tìm thấy tài khoản serviec');
        return false;
      }
  }catch (error) {
      console.error('Lỗi service:', error);
    } 
};

const upToAdmin = async (email) =>{
  try {
      
      const account = await Account.findOne({
        where :{email} 
      });
      if (account) {
      // Nếu tìm thấy tài khoản, thì khoá nó
        
        await account.update({
          role_id: '1'
        });
        return true;
      } else {
        console.log('Không tìm thấy tài khoản serviec');
        return false;
      }
  }catch (error) {
      console.error('Lỗi service:', error);
    } 
};
const neftToUser = async (email) =>{
  try {
      
      const account = await Account.findOne({
        where :{email} 
      });
      if (account) {
      // Nếu tìm thấy tài khoản, thì khoá nó
        
        await account.update({
          role_id: '2'
        });
        return true;
      } else {
        console.log('Không tìm thấy tài khoản serviec');
        return false;
      }
  }catch (error) {
      console.error('Lỗi service:', error);
    } 
};
module.exports = {
  getAllUser,
  lockedUser, 
  unlockUser,
  upToAdmin,
  neftToUser
};