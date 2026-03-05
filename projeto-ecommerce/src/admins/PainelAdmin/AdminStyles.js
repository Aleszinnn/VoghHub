import styled from "styled-components";

export const AdminContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: 'Inter', sans-serif;
`;

export const TableCard = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  overflow: hidden;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;

  th {
    background: #f8f9fa;
    padding: 15px;
    font-size: 0.85rem;
    text-transform: uppercase;
    color: #888;
    letter-spacing: 1px;
  }

  td {
    padding: 15px;
    border-bottom: 1px solid #f1f1f1;
    color: #333;
    font-size: 0.95rem;
  }

  tr:hover {
    background: #fffcfc;
  }
`;

export const StatusBadge = styled.span`
  background: #e6fffa;
  color: #2c7a7b;
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
`;

export const ActionButton = styled.button`
  background: ${props => props.color || "#f1f1f1"};
  color: ${props => props.color ? "white" : "#333"};
  border: none;
  padding: 8px;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s;

  &:hover {
    opacity: 0.8;
    transform: translateY(-2px);
  }
`;