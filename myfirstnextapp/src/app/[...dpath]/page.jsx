import React from 'react'

export default async function Page({ params }) {
  const { dpath } = await params;

  return (
    <div>dpath known URL element is {dpath}</div>
  );
}