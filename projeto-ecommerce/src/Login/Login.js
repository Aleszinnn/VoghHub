import styled from "styled-components";

export const LoginContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f8f8f8;
  padding: 20px;
`;

export const LoginCard = styled.div`
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.05);
  width: 100%;
  max-width: 400px;
  text-align: center;
`;

export const LogoContainer = styled.div`
  margin-bottom: 30px;
  p { color: #888; font-size: 0.9rem; margin-top: 10px; }
`;

export const InputGroup = styled.div`
  display: flex;
  align-items: center;
  background: #f5f5f5;
  padding: 12px 15px;
  border-radius: 8px;
  margin-bottom: 15px;
  border: 1px solid transparent;
  transition: 0.3s;
  &:focus-within { border-color: #ff3e3e; background: white; }
`;

export const StyledInput = styled.input`
  border: none;
  background: transparent;
  margin-left: 10px;
  width: 100%;
  outline: none;
  font-size: 1rem;
`;

export const LoginButton = styled.button`
  width: 100%;
  padding: 15px;
  background: #000;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
  transition: 0.3s;
  &:hover { background: #ff3e3e; }
`;

export const Divider = styled.div`
  margin: 25px 0;
  position: relative;
  border-bottom: 1px solid #eee;
  span {
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    padding: 0 15px;
    color: #999;
    font-size: 0.8rem;
  }
`;

export const SocialButtons = styled.div`
  display: flex;
  gap: 10px;
`;

export const SocialButton = styled.button`
  flex: 1;
  padding: 10px;
  border: 1px solid #eee;
  background: white;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 0.8rem;
  cursor: pointer;
  transition: 0.2s;
  &:hover { background: #f9f9f9; }
`;