/**
 * Flatten a multidimensional object
 */
export const flattenObject = (obj: { [key: string]: any }) => {
  const flattened = {} as { [key: string]: any };

  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      Object.assign(flattened, flattenObject(obj[key]));
    } else {
      flattened[key] = obj[key];
    }
  });

  return flattened;
};

/**
 * Transform an objects keys
 * @example
 * // returns {blue800:"navy",blue200:"cyan" }
 * globalNS.method("blue", {800:"navy",200:"cyan" });
 */
export function addKeyPrefix<T extends string, S extends string>(prefix: T, obj: { [key in S]?: any }) {
  type keyType = `${typeof prefix}${S}`;
  return Object.keys(obj).reduce((acc, key) => {
    acc[`${prefix}${key}` as keyType] = obj[key as keyof typeof obj];
    return acc;
  }, {} as { [key in keyType]?: string });
}
