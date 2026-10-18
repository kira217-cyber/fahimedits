// সব ভিডিও এখানে একবার register করা (Vite তে dynamic path কাজ করে না)।
// ক্লায়েন্টের ডকে দেওয়া লিংক থেকে নামানো — ৭২০p, সর্বোচ্চ ২ মিনিট।
// প্রতিটা ক্যাটাগরির ১ নম্বরটা cover।
import recap1 from "../../assets/recap1.mp4";
import recap2 from "../../assets/recap2.mp4";
import recap3 from "../../assets/recap3.mp4";
import recap4 from "../../assets/recap4.mp4";
import recap5 from "../../assets/recap5.mp4";
import wedding1 from "../../assets/wedding1.mp4";
import wedding2 from "../../assets/wedding2.mp4";
import wedding3 from "../../assets/wedding3.mp4";
import wedding4 from "../../assets/wedding4.mp4";
import wedding5 from "../../assets/wedding5.mp4";
import podcast1 from "../../assets/podcast1.mp4";
import podcast2 from "../../assets/podcast2.mp4";
import podcast3 from "../../assets/podcast3.mp4";
import podcast4 from "../../assets/podcast4.mp4";
import podcast5 from "../../assets/podcast5.mp4";
import shorts1 from "../../assets/shorts1.mp4";
import shorts2 from "../../assets/shorts2.mp4";
import shorts3 from "../../assets/shorts3.mp4";
import shorts4 from "../../assets/shorts4.mp4";
import shorts5 from "../../assets/shorts5.mp4";
import longform1 from "../../assets/longform1.mp4";
import longform2 from "../../assets/longform2.mp4";
import longform3 from "../../assets/longform3.mp4";
import longform4 from "../../assets/longform4.mp4";
import longform5 from "../../assets/longform5.mp4";
import vlog1 from "../../assets/vlog1.mp4";
import vlog2 from "../../assets/vlog2.mp4";
import vlog3 from "../../assets/vlog3.mp4";
import vlog4 from "../../assets/vlog4.mp4";
import vlog5 from "../../assets/vlog5.mp4";
import realestate1 from "../../assets/realestate1.mp4";
import realestate2 from "../../assets/realestate2.mp4";
import realestate3 from "../../assets/realestate3.mp4";
import realestate4 from "../../assets/realestate4.mp4";
import realestate5 from "../../assets/realestate5.mp4";
import metaads1 from "../../assets/metaads1.mp4";
import metaads2 from "../../assets/metaads2.mp4";
import metaads3 from "../../assets/metaads3.mp4";
import metaads4 from "../../assets/metaads4.mp4";
import metaads5 from "../../assets/metaads5.mp4";

const sources = {
  "recap1.mp4": recap1,
  "recap2.mp4": recap2,
  "recap3.mp4": recap3,
  "recap4.mp4": recap4,
  "recap5.mp4": recap5,
  "wedding1.mp4": wedding1,
  "wedding2.mp4": wedding2,
  "wedding3.mp4": wedding3,
  "wedding4.mp4": wedding4,
  "wedding5.mp4": wedding5,
  "podcast1.mp4": podcast1,
  "podcast2.mp4": podcast2,
  "podcast3.mp4": podcast3,
  "podcast4.mp4": podcast4,
  "podcast5.mp4": podcast5,
  "shorts1.mp4": shorts1,
  "shorts2.mp4": shorts2,
  "shorts3.mp4": shorts3,
  "shorts4.mp4": shorts4,
  "shorts5.mp4": shorts5,
  "longform1.mp4": longform1,
  "longform2.mp4": longform2,
  "longform3.mp4": longform3,
  "longform4.mp4": longform4,
  "longform5.mp4": longform5,
  "vlog1.mp4": vlog1,
  "vlog2.mp4": vlog2,
  "vlog3.mp4": vlog3,
  "vlog4.mp4": vlog4,
  "vlog5.mp4": vlog5,
  "realestate1.mp4": realestate1,
  "realestate2.mp4": realestate2,
  "realestate3.mp4": realestate3,
  "realestate4.mp4": realestate4,
  "realestate5.mp4": realestate5,
  "metaads1.mp4": metaads1,
  "metaads2.mp4": metaads2,
  "metaads3.mp4": metaads3,
  "metaads4.mp4": metaads4,
  "metaads5.mp4": metaads5,
};

/** config এর file নাম থেকে আসল bundled URL */
export const resolveVideo = (file) => sources[file] ?? recap1;

export default sources;
