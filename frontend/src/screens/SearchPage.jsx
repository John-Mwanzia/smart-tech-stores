import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function SearchPage() {
    const navigate = useNavigate();
    const {search} = useLocation();
    const sp = new URLSearchParams(search);
    const query = sp.get('query' || 'all');
    const category = sp.get('category' || 'all');
  return (
    <div>
      
    </div>
  )
}
