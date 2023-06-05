export const numberWithSpaces = (n: number) => {
  const formatter = new Intl.NumberFormat('sv-SE');
  return formatter.format(n);
};

export function checkClickOutsideElement(client: { x: number; y: number }, element: HTMLElement) {
  const dimensions = element.getBoundingClientRect();

  return (
    client.x < dimensions.left ||
    client.x > dimensions.right ||
    client.y < dimensions.top ||
    client.y > dimensions.bottom
  );
}
