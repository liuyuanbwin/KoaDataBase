const RetCode = {
    SessionExpired: -1, //session����
    Fail: 0,//ʧ��
    Success: 1, //�ɹ�
    ArgsError: 2,//��������
    UserExisted:10,//�û��Ѵ���
    UsernameOrPasswordError:11,//�û������������
    UserNotExist:12,//�û�������
};

module.exports = RetCode;