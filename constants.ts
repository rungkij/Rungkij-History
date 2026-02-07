import { Era, ProjectDetail } from './types';

export const INTRO_CONTENT = {
  title: "RUNGKIJ",
  subtitle: "กว่า 5 ทศวรรษแห่งรากฐานที่มั่นคง",
  description: "จากธุรกิจรับเหมาก่อสร้างขนาดเล็ก สู่ผู้นำนวัตกรรมที่อยู่อาศัยในเขตกรุงเทพฯ ตะวันออก ด้วยวิสัยทัศน์ที่ส่งต่อผ่าน 3 รุ่นของตระกูล \"กิตติอุดม\" ยึดถือความซื่อตรงและการมองขาดในทำเลศักยภาพ",
  stats: [
    { label: "ประสบการณ์", value: "50+", unit: "ปี" },
    { label: "ยอดขายต่อปี", value: "1,500", unit: "ล้านบาท" },
    { label: "เจเนอเรชัน", value: "3", unit: "รุ่น" },
  ]
};

export const RECENT_PROJECTS: ProjectDetail[] = [
  {
    name: "THE NICE (รังสิต - คลอง 3)",
    style: "French Style",
    units: "257 ยูนิต",
    opening: "ส.ค. 2561",
    location: "รังสิต - คลอง 3",
    highlight: "ใกล้ทางด่วน/วงแหวนฯ"
  },
  {
    name: "The Hampton (พระราม 9 - กรุงเทพกรีฑา)",
    style: "English Style",
    units: "82 ยูนิต",
    opening: "พ.ศ. 2564",
    location: "พระราม 9 - กรุงเทพกรีฑาตัดใหม่",
    highlight: "ใกล้สนามบินสุวรรณภูมิ"
  },
  {
    name: "OSAKA (รามอินทรา - คู้บอน)",
    style: "Japandi Style",
    units: "175 ยูนิต",
    opening: "พ.ศ. 2565",
    location: "รามอินทรา - คู้บอน",
    highlight: "ใกล้รถไฟฟ้าสายสีชมพู"
  },
  {
    name: "GRAND VERONA (รามคำแหง - ร่มเกล้า)",
    style: "Modern Luxury",
    units: "189 ยูนิต",
    opening: "มี.ค. 2567",
    location: "รามคำแหง - ร่มเกล้า",
    highlight: "ติดถนนใหญ่ร่มเกล้า"
  }
];

export const ERAS: Era[] = [
  {
    id: 'era-1',
    title: 'ยุคบุกเบิก',
    period: '',
    description: 'จุดกำเนิดจาก "รุ่งกิจก่อสร้าง" โดยรุ่นคุณปู่ สู่งานรับเหมาขนาดใหญ่และการร่วมทุนพัฒนาโครงการในตำนาน',
    events: [
      {
        year: 'ยุคก่อตั้ง',
        title: 'รุ่งกิจก่อสร้าง',
        description: 'เริ่มต้นธุรกิจรับเหมาก่อสร้าง เน้นอาคารพาณิชย์และตึกแถวให้เซ้ง'
      },
      {
        year: 'จุดเปลี่ยน',
        title: 'ตลาดปัฐวิกรณ์',
        description: 'ได้รับเหมาก่อสร้างตลาดปัฐวิกรณ์ บนถนนสุขาภิบาล 1 พิสูจน์ฝีมือในสเกลขนาดใหญ่'
      },
      {
        year: 'ตำนาน',
        title: 'หมู่บ้านไทยวันดี',
        description: 'โครงการร่วมทุนแรกในซอยสุขุมวิท 101/1 ฝ่าวิกฤตน้ำท่วมด้วยคุณภาพจนปิดการขายสำเร็จ',
        highlight: true
      },
      {
        year: 'ขยายตัว',
        title: 'หมู่บ้านบางขุนเทียน',
        description: 'เริ่มปักหมุดพัฒนาโครงการด้วยตนเอง ก่อนย้ายฐานสู่กรุงเทพฯ ฝั่งตะวันออก'
      }
    ]
  },
  {
    id: 'era-2',
    title: 'รุ่งกิจวิลล่า',
    period: '',
    description: 'การแผ่ขยายอาณาจักรสู่ถนนรามคำแหงและร่มเกล้า ภายใต้การบริหารรุ่นที่ 2',
    events: [
      {
        year: '2536',
        title: 'รุ่งกิจวิลล่า 1',
        description: 'โครงการสร้างชื่อ ถ.รามคำแหง 90 ประกอบด้วยทาวน์โฮมและคอนโดมิเนียม 8 ชั้น',
        highlight: true
      },
      {
        year: '2538',
        title: 'รุ่งกิจวิลล่า 2',
        description: 'ทาวน์โฮม 3 ชั้น ใกล้แยกลำสาลี (ถ.รามคำแหง 122)'
      },
      {
        year: '2539-2540',
        title: 'รุ่งกิจวิลล่า 4 & 5',
        description: 'ขยายสู่ถนนร่มเกล้า ทาวน์โฮม 2 ชั้น ใกล้แอร์พอร์ตลิ้งค์'
      },
      {
        year: '2542-2545',
        title: 'รุ่งกิจวิลล่า 7, 8, 9',
        description: 'ยึดทำเลทองถนนร่มเกล้าอย่างต่อเนื่อง'
      },
      {
        year: '2546-2549',
        title: 'ยุคเฟื่องฟู',
        description: 'เปิดตัวรุ่งกิจวิลล่า 10, 11, 14 และ รุ่งกิจแกรนด์วิสต้า ครอบคลุมทั้งนิมิตรใหม่ หทัยราษฎร์ และร่มเกล้า'
      }
    ]
  },
  {
    id: 'era-3',
    title: 'RK Property',
    period: '',
    description: 'Re-Branding สู่ความทันสมัยโดยทายาทรุ่นที่ 3 บุกตลาดโฮมออฟฟิศและพื้นที่รอบสุวรรณภูมิ',
    events: [
      {
        year: '2550',
        title: 'RK OFFICE PARK',
        description: 'ทำเลวงแหวน-ร่มเกล้า ตอบโจทย์ธุรกิจรอบสนามบินสุวรรณภูมิ',
        highlight: true
      },
      {
        year: '2551',
        title: 'ขยายฐานธุรกิจ',
        description: 'เปิดตัว RK OFFICE PARK (สุวินทวงศ์) และ RK HOME PARK (พัฒนาชนบท 3)'
      },
      {
        year: '2554-2556',
        title: 'RK PARK & THE REGENT STREET',
        description: 'รุกตลาดรามอินทรา, คู้บอน, วัชรพล และเปิดตัวโฮมออฟฟิศสไตล์ลอนดอน (The Regent Street)'
      },
      {
        year: '2559',
        title: 'THE NICE รามอินทรา',
        description: 'โครงการคุณภาพบนถนนพระยาสุเรนทร์'
      }
    ]
  },
  {
    id: 'era-4',
    title: 'Rungkij : Live The Next Level',
    period: '',
    description: 'ยกระดับสู่ Modern Luxury และธีมสถาปัตยกรรมระดับโลก',
    events: [
      {
        year: '2561',
        title: 'THE NICE & THE VERONA',
        description: 'เปิดตัวพร้อมกัน 2 โครงการใหญ่ สไตล์ฝรั่งเศสที่รังสิต และสไตล์อิตาลีที่กรุงเทพกรีฑา',
        highlight: true
      },
      {
        year: '2564',
        title: 'Hampton',
        description: 'บ้านเดี่ยวพรีเมียมสไตล์อังกฤษ พระราม 9 - กรุงเทพกรีฑา รองรับสังคมผู้สูงอายุ'
      },
      {
        year: '2565',
        title: 'OSAKA',
        description: 'ทาวน์โฮมสไตล์ Japandi (รามอินทรา - คู้บอน) ผสมผสานมินิมอลแบบญี่ปุ่น'
      },
      {
        year: '2567',
        title: 'GRAND VERONA',
        description: 'ล่าสุด! บ้านซีรีส์ใหม่สไตล์ Modern Luxury ติดถนนใหญ่ร่มเกล้า บนพื้นที่ 28 ไร่',
        highlight: true
      }
    ]
  }
];