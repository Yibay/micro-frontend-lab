import { useState, useEffect, useCallback, useRef } from 'react';
import { useModel } from '@umijs/max';

export default function UserModel() {
  const { initialState } = useModel('@@initialState');
  const user = initialState?.user || {};
  const [userInfo, setUserInfo] = useState<any>(user);

  const fetchUserInfo = useCallback(async (): Promise<void> => {
    // 后续在这里获取详细的用户信
    setUserInfo(user);
  }, [user]);

  const fetchUserInfoRef = useRef(fetchUserInfo);
  fetchUserInfoRef.current = fetchUserInfo;

  useEffect(() => {
    fetchUserInfoRef.current();
  }, [user?.user_id]);

  return {
    userInfo,
    fetchUserInfo,
  };
}
