import React from 'react'

export default async function Page({ params }) {
  const { id } = await params;
  const { id1 } = await params;

  return (
    <div>Meat page {id} review {id1}</div>
  );
}