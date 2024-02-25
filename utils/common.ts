import moment from "moment-jalaali";

export function generateFormData(data: { [key: string]: string }) {
  const formData = new FormData();
  Object.entries(data).forEach(([key, value]) => formData.append(key, value));

  return formData;
}

// - - - - - Date & Time - - - - - //
export function persianDate() {
  moment.loadPersian();
  return moment().locale("fa").format("dddd jDD jMMMM");
}

export function time() {
  return moment().locale("fa").format("HH:mm:ss");
}

// - - - - - Common - - - - - //

export function filter({
  data,
  item,
}: {
  data: string[];
  item: string;
}) {
  return data.filter((it) => it.includes(item.toLowerCase()));
}
