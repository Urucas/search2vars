export default function transform(searchStr) {
  let vars = {};
  let parts = searchStr.replace(/[?&]+([^=&]+)=([^&]*)/gi, (m, key, value) => {
    vars[key] = value;
	});
  return vars;
}
