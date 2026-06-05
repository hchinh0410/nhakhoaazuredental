import React from 'react';
import { useEffect, useMemo, useState } from "react";
import {
  AlignCenterHorizontal,
  Award,
  BadgeCheck,
  BadgePlus,
  Baby,
  CalendarCheck,
  CalendarClock,
  CalendarDays,
  CalendarHeart,
  CalendarPlus,
  Check,
  ChevronDown,
  ClipboardList,
  Clock,
  Eye,
  HeartPulse,
  LockKeyhole,
  LogIn,
  LogOut,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  MessageSquare,
  MessagesSquare,
  Phone,
  PhoneCall,
  ReceiptText,
  ScanFace,
  ScanLine,
  Send,
  ShieldCheck,
  Sparkle,
  Sparkles,
  Star,
  Stethoscope,
  User,
  UserPlus,
  X
} from "lucide-react";

const hotline = "0978231546";
const formattedHotline = "0978 231 546";

const doctors = [
  {
    name: "BS.CKI Nguyễn Minh Anh",
    role: "Giám đốc chuyên môn",
    specialty: "Răng sứ thẩm mỹ, phục hình và implant",
    experience: "15 năm",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=82",
    badges: ["Smile Design", "Implant", "Phục hình"]
  },
  {
    name: "ThS.BS Trần Quốc Huy",
    role: "Bác sĩ chỉnh nha",
    specialty: "Niềng răng trong suốt, chỉnh nha người lớn",
    experience: "12 năm",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=900&q=82",
    badges: ["Invisalign", "Khớp cắn", "Scan 3D"]
  },
  {
    name: "BS Phạm Thu Hà",
    role: "Bác sĩ nha khoa gia đình",
    specialty: "Điều trị tổng quát, trẻ em và phòng ngừa",
    experience: "10 năm",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=900&q=82",
    badges: ["Gia đình", "Trẻ em", "Phòng ngừa"]
  },
  {
    name: "BS Lê Hoàng Nam",
    role: "Bác sĩ phẫu thuật implant",
    specialty: "Implant đơn lẻ, toàn hàm và tái tạo xương",
    experience: "14 năm",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=82",
    badges: ["CBCT", "Implant", "Phẫu thuật"]
  }
];

const services = [
  {
    icon: Sparkle,
    title: "Răng sứ thẩm mỹ",
    text: "Thiết kế dáng răng hài hòa khuôn mặt, màu sắc tự nhiên, ưu tiên bảo tồn mô răng thật.",
    tags: ["Smile Design", "Sứ cao cấp"]
  },
  {
    icon: AlignCenterHorizontal,
    title: "Niềng răng trong suốt",
    text: "Lộ trình chỉnh nha kín đáo cho dân văn phòng, mô phỏng tiến độ và nhắc lịch định kỳ.",
    tags: ["Invisalign", "Scan 3D"]
  },
  {
    icon: BadgePlus,
    title: "Implant phục hồi răng",
    text: "Phục hồi răng mất với chẩn đoán hình ảnh, kế hoạch phẫu thuật và theo dõi sau điều trị.",
    tags: ["CBCT", "Bảo hành"]
  },
  {
    icon: ShieldCheck,
    title: "Nha khoa tổng quát",
    text: "Cạo vôi, trám răng, điều trị tủy và chăm sóc định kỳ cho cả gia đình.",
    tags: ["Gia đình", "6 tháng"]
  },
  {
    icon: BadgeCheck,
    title: "Tẩy trắng răng",
    text: "Làm sáng nụ cười với quy trình kiểm soát ê buốt và đánh giá men răng trước khi thực hiện.",
    tags: ["An toàn", "Nhanh"]
  },
  {
    icon: Baby,
    title: "Nha khoa trẻ em",
    text: "Khám nhẹ nhàng, hướng dẫn vệ sinh và phòng ngừa sâu răng cho trẻ trong không gian thân thiện.",
    tags: ["Thân thiện", "Phòng ngừa"]
  }
];

const reviews = [
  {
    name: "Linh H.",
    meta: "Quản lý nhân sự, TP.HCM",
    initials: "LH",
    quote: "Bác sĩ giải thích từng lựa chọn và chi phí trước khi làm. Mình đặt lịch ngoài giờ hành chính rất tiện."
  },
  {
    name: "Minh N.",
    meta: "Khách hàng gia đình",
    initials: "MN",
    quote: "Cả nhà đi khám chung, trẻ nhỏ được hướng dẫn nhẹ nhàng. Không có cảm giác bị vội hay bị ép dịch vụ."
  },
  {
    name: "Quỳnh A.",
    meta: "Chuyên viên tài chính",
    initials: "QA",
    quote: "Mình làm sứ thẩm mỹ, màu răng tự nhiên và lịch tái khám được nhắc rất kỹ. Không gian rất riêng tư."
  }
];

const steps = [
  { icon: CalendarClock, title: "Đặt lịch", text: "Chọn khung giờ phù hợp, nhận xác nhận và chuẩn bị trước khi đến." },
  { icon: ScanFace, title: "Khám & chụp phim", text: "Đánh giá tổng quát, scan/chụp khi cần và lưu hồ sơ số." },
  { icon: ClipboardList, title: "Tư vấn phác đồ", text: "So sánh phương án, thời gian, vật liệu, chi phí và bảo hành." },
  { icon: Sparkles, title: "Điều trị & theo dõi", text: "Thực hiện theo lịch, nhắc tái khám và chăm sóc sau điều trị." }
];

const prices = [
  {
    title: "Khám tổng quát",
    price: "300k",
    unit: "/ lượt",
    items: ["Khám với bác sĩ", "Tư vấn chăm sóc răng miệng", "Đề xuất lịch điều trị"]
  },
  {
    title: "Thẩm mỹ nụ cười",
    price: "2.5tr",
    unit: "/ răng từ",
    popular: true,
    items: ["Tư vấn smile design", "Vật liệu sứ theo nhu cầu", "Bảo hành theo dòng vật liệu"]
  },
  {
    title: "Implant",
    price: "18tr",
    unit: "/ trụ từ",
    items: ["Chẩn đoán hình ảnh", "Phác đồ theo vị trí mất răng", "Theo dõi sau phẫu thuật"]
  }
];

const faqs = [
  {
    question: "Khám lần đầu mất bao lâu?",
    answer: "Thông thường 30-45 phút. Nếu cần chụp phim, scan 3D hoặc tư vấn thẩm mỹ chi tiết, phòng khám sẽ sắp xếp thêm thời gian trong cùng buổi."
  },
  {
    question: "Tôi có được báo giá trước khi điều trị không?",
    answer: "Có. Bác sĩ sẽ giải thích tình trạng, phương án, ưu nhược điểm, thời gian và chi phí dự kiến trước khi khách hàng quyết định."
  },
  {
    question: "Có lịch ngoài giờ hành chính không?",
    answer: "Có khung lịch buổi tối và cuối tuần tùy tình trạng đặt hẹn. Khách hàng nên gửi form trước để được giữ lịch phù hợp."
  },
  {
    question: "Đăng nhập có bắt buộc để đặt lịch không?",
    answer: "Không bắt buộc. Tuy nhiên tài khoản giúp lưu thông tin liên hệ, lịch hẹn và nhu cầu tư vấn cho lần đặt lịch tiếp theo."
  }
];

function App() {
  const [navOpen, setNavOpen] = useState(false);
  const [authMode, setAuthMode] = useState(null);
  const [user, setUser] = useState(null);
  const [activeFaq, setActiveFaq] = useState(0);
  const [formStatus, setFormStatus] = useState("");

  useEffect(() => {
    const savedUser = window.localStorage.getItem("azureDentalUser");
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", navOpen || Boolean(authMode));
  }, [navOpen, authMode]);

  const navItems = useMemo(
    () => [
      ["#doctors", "Bác sĩ"],
      ["#services", "Dịch vụ"],
      ["#cases", "Kết quả"],
      ["#pricing", "Bảng giá"],
      ["#faq", "FAQ"]
    ],
    []
  );

  const closeMenu = () => setNavOpen(false);

  const handleAuthSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = form.get("name") || form.get("email")?.split("@")[0] || "Khách hàng";
    const nextUser = {
      name,
      email: form.get("email"),
      phone: form.get("phone") || ""
    };
    setUser(nextUser);
    window.localStorage.setItem("azureDentalUser", JSON.stringify(nextUser));
    setAuthMode(null);
  };

  const handleLogout = () => {
    setUser(null);
    window.localStorage.removeItem("azureDentalUser");
  };

  const handleBooking = (event) => {
    event.preventDefault();
    setFormStatus("Đã nhận yêu cầu. Azure Dental sẽ gọi lại trong ngày.");
    event.currentTarget.reset();
    window.setTimeout(() => setFormStatus(""), 4200);
  };

  return (
    <>
      <header className="site-header">
        <nav className="nav" aria-label="Điều hướng chính">
          <a className="brand" href="#top" onClick={closeMenu} aria-label="Azure Dental Studio">
            <span className="brand-mark">
              <Sparkles aria-hidden="true" />
            </span>
            <span>
              Azure Dental
              <small>Premium Clinic</small>
            </span>
          </a>

          <div className={`nav-links ${navOpen ? "open" : ""}`}>
            {navItems.map(([href, label]) => (
              <a key={href} href={href} onClick={closeMenu}>
                {label}
              </a>
            ))}
          </div>

          <div className="nav-actions">
            {user ? (
              <div className="account-chip">
                <User aria-hidden="true" />
                <span>{user.name}</span>
                <button type="button" onClick={handleLogout} aria-label="Đăng xuất">
                  <LogOut aria-hidden="true" />
                </button>
              </div>
            ) : (
              <>
                <button className="btn btn-ghost" type="button" onClick={() => setAuthMode("login")}>
                  <LogIn aria-hidden="true" /> Đăng nhập
                </button>
                <button className="btn btn-outline compact-hide" type="button" onClick={() => setAuthMode("register")}>
                  <UserPlus aria-hidden="true" /> Đăng ký
                </button>
              </>
            )}
            <a className="btn btn-primary nav-cta" href="#booking">
              <CalendarCheck aria-hidden="true" /> Đặt lịch
            </a>
            <button
              className="icon-btn"
              type="button"
              aria-label="Mở menu"
              aria-expanded={navOpen}
              onClick={() => setNavOpen((value) => !value)}
            >
              {navOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            </button>
          </div>
        </nav>
      </header>

      <main id="top">
        <section className="hero" id="hero" aria-labelledby="hero-title">
          <div className="hero-inner">
            <div className="hero-copy">
              <div className="eyebrow">
                <ShieldCheck aria-hidden="true" /> Nha khoa thẩm mỹ chuẩn cao cấp tại Việt Nam
              </div>
              <h1 id="hero-title">Nụ cười đẹp hơn trong một lịch hẹn đúng chuẩn.</h1>
              <p>
                Khám chuyên sâu, tư vấn rõ chi phí, điều trị bằng công nghệ số cho người bận rộn, gia đình
                và khách hàng ưu tiên trải nghiệm riêng tư.
              </p>
              <div className="hero-cta">
                <a className="btn btn-primary" href="#booking">
                  <CalendarPlus aria-hidden="true" /> Đặt lịch khám ngay
                </a>
                <a className="btn btn-secondary" href={`tel:${hotline}`}>
                  <PhoneCall aria-hidden="true" /> {formattedHotline}
                </a>
              </div>
            </div>

            <div className="hero-panel">
              <div className="hero-card">
                <div className="hero-card-head">
                  <span>Ưu tiên hôm nay</span>
                  <strong>30 phút</strong>
                </div>
                <p>Tư vấn phác đồ ban đầu và dự trù chi phí theo nhu cầu.</p>
                <div className="metric-row">
                  <div>
                    <strong>15+</strong>
                    <span>năm kinh nghiệm</span>
                  </div>
                  <div>
                    <strong>4.9/5</strong>
                    <span>đánh giá</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <QuickBook user={user} onSubmit={handleBooking} />

        <section id="doctors">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="section-kicker">Đội ngũ bác sĩ</span>
                <h2>Nhiều chuyên khoa trong cùng một kế hoạch điều trị.</h2>
              </div>
              <p>
                Khách hàng được phân luồng đúng bác sĩ theo nhu cầu: thẩm mỹ, chỉnh nha, implant, tổng quát
                hoặc chăm sóc gia đình.
              </p>
            </div>
            <div className="doctor-grid">
              {doctors.map((doctor) => (
                <article className="doctor-card" key={doctor.name}>
                  <img src={doctor.image} alt={`${doctor.name} tại Azure Dental Studio`} />
                  <div className="doctor-card-body">
                    <div>
                      <strong>{doctor.name}</strong>
                      <span>{doctor.role}</span>
                    </div>
                    <p>{doctor.specialty}</p>
                    <div className="doctor-meta">
                      <Award aria-hidden="true" />
                      <span>{doctor.experience} kinh nghiệm</span>
                    </div>
                    <div className="tag-row">
                      {doctor.badges.map((badge) => (
                        <span className="tag" key={badge}>
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-soft" id="services">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="section-kicker">Dịch vụ nổi bật</span>
                <h2>Giải pháp cho nụ cười đẹp và sức khỏe răng miệng lâu dài.</h2>
              </div>
              <p>Thiết kế cho khách hàng cần hiệu quả rõ, lịch hẹn gọn và tiêu chuẩn chăm sóc cao.</p>
            </div>
            <div className="service-grid">
              {services.map(({ icon: Icon, title, text, tags }) => (
                <article className="service-card" key={title}>
                  <div className="service-icon">
                    <Icon aria-hidden="true" />
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <div className="tag-row">
                    {tags.map((tag) => (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="cases">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="section-kicker">Before / After</span>
                <h2>Hình dung kết quả trước khi ra quyết định.</h2>
              </div>
              <p>Ảnh minh họa giao diện có thể thay bằng ca thực tế, kèm đồng ý sử dụng hình ảnh của khách hàng.</p>
            </div>
            <div className="before-after">
              <CaseCard
                title="Smile Makeover"
                text="Màu răng sáng hơn, dáng răng cân đối hơn."
                image="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1000&q=82"
              />
              <CaseCard
                title="Chỉnh nha thẩm mỹ"
                text="Cải thiện khớp cắn, nụ cười đều và tự tin."
                image="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=82"
              />
            </div>
          </div>
        </section>

        <section className="section-soft">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="section-kicker">Review khách hàng</span>
                <h2>Khách hàng chọn Azure vì trải nghiệm rõ ràng từ phút đầu.</h2>
              </div>
              <p>Review tập trung vào sự tin cậy, nhẹ nhàng và khả năng sắp xếp lịch cho người bận rộn.</p>
            </div>
            <div className="reviews">
              {reviews.map((review) => (
                <article className="review-card" key={review.name}>
                  <div className="stars">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} aria-hidden="true" fill="currentColor" />
                    ))}
                  </div>
                  <p>"{review.quote}"</p>
                  <div className="reviewer">
                    <div className="avatar">{review.initials}</div>
                    <div>
                      <strong>{review.name}</strong>
                      <span>{review.meta}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="section-head">
              <div>
                <span className="section-kicker">Quy trình khám</span>
                <h2>Gọn, minh bạch, dễ ra quyết định.</h2>
              </div>
              <p>Mỗi bước giúp khách hàng hiểu tình trạng răng miệng và lựa chọn đúng mức đầu tư.</p>
            </div>
            <div className="steps">
              {steps.map(({ icon: Icon, title, text }, index) => (
                <article className="step" key={title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <Icon aria-hidden="true" />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-soft" id="pricing">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="section-kicker">Bảng giá cơ bản</span>
                <h2>Dự trù trước khi tư vấn.</h2>
              </div>
              <p>Giá cuối cùng phụ thuộc tình trạng răng miệng, vật liệu và phác đồ cá nhân hóa.</p>
            </div>
            <div className="pricing">
              {prices.map((plan) => (
                <article className={`price-card ${plan.popular ? "featured" : ""}`} key={plan.title}>
                  {plan.popular && <span className="popular">Phổ biến</span>}
                  <h3>{plan.title}</h3>
                  <div className="price">
                    <strong>{plan.price}</strong>
                    <span>{plan.unit}</span>
                  </div>
                  <ul className="check-list">
                    {plan.items.map((item) => (
                      <li key={item}>
                        <Check aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a className={`btn ${plan.popular ? "btn-primary" : "btn-outline"}`} href="#booking">
                    Nhận tư vấn
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="faq">
          <div className="container faq-layout">
            <aside className="faq-aside">
              <span className="section-kicker">FAQ</span>
              <h2>Câu hỏi thường gặp trước khi đặt lịch.</h2>
              <p>Những điểm khách hàng 25-45 tuổi thường cần biết trước khi chọn nha khoa cao cấp.</p>
              <a className="btn btn-outline" href="#booking">
                <MessagesSquare aria-hidden="true" /> Hỏi bác sĩ
              </a>
            </aside>
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <article className={`faq-item ${activeFaq === index ? "open" : ""}`} key={faq.question}>
                  <button type="button" onClick={() => setActiveFaq(activeFaq === index ? -1 : index)}>
                    {faq.question}
                    <ChevronDown aria-hidden="true" />
                  </button>
                  <div className="faq-panel">
                    <p>{faq.answer}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="booking" id="booking">
          <div className="container booking-grid">
            <div className="booking-copy">
              <div className="eyebrow">
                <CalendarHeart aria-hidden="true" /> Ưu tiên xác nhận trong ngày
              </div>
              <h2>Đặt lịch tư vấn nụ cười của bạn.</h2>
              <p>
                Điền thông tin, đội ngũ chăm sóc khách hàng sẽ gọi lại để xác nhận khung giờ, bác sĩ phù hợp
                và nhu cầu điều trị.
              </p>
              <div className="contact-lines">
                <a className="contact-line" href={`tel:${hotline}`}>
                  <Phone aria-hidden="true" /> Hotline: {formattedHotline}
                </a>
                <div className="contact-line">
                  <MapPin aria-hidden="true" /> 28 Nguyễn Huệ, Quận 1, TP.HCM
                </div>
                <div className="contact-line">
                  <Clock aria-hidden="true" /> 8:00 - 20:00, Thứ 2 - Chủ nhật
                </div>
              </div>
            </div>
            <BookingForm user={user} onSubmit={handleBooking} status={formStatus} />
          </div>
        </section>
      </main>

      <Footer navItems={navItems} />

      {authMode && (
        <AuthModal
          mode={authMode}
          setMode={setAuthMode}
          onClose={() => setAuthMode(null)}
          onSubmit={handleAuthSubmit}
        />
      )}
    </>
  );
}

function QuickBook({ user, onSubmit }) {
  return (
    <form className="quick-book" onSubmit={onSubmit} aria-label="Đặt lịch nhanh">
      <label className="field">
        <User aria-hidden="true" />
        <input type="text" name="quick-name" placeholder="Họ và tên" defaultValue={user?.name || ""} required />
      </label>
      <label className="field">
        <Phone aria-hidden="true" />
        <input type="tel" name="quick-phone" placeholder="Số điện thoại" defaultValue={user?.phone || ""} required />
      </label>
      <label className="field">
        <Stethoscope aria-hidden="true" />
        <select name="quick-service" required>
          <option value="">Nhu cầu khám</option>
          <option>Bọc sứ thẩm mỹ</option>
          <option>Niềng răng Invisalign</option>
          <option>Implant</option>
          <option>Khám gia đình</option>
        </select>
      </label>
      <button className="btn btn-primary" type="submit">
        <Send aria-hidden="true" /> Gửi lịch
      </button>
    </form>
  );
}

function CaseCard({ title, text, image }) {
  return (
    <article className="case-card" style={{ "--case-img": `url(${image})` }}>
      <div className="case-split">
        <div className="case-side before">
          <span>Before</span>
        </div>
        <div className="case-side after">
          <span>After</span>
        </div>
      </div>
      <div className="case-copy">
        <div>
          <strong>{title}</strong>
          <p>{text}</p>
        </div>
        <a className="btn btn-outline" href="#booking">
          Tư vấn
        </a>
      </div>
    </article>
  );
}

function BookingForm({ user, onSubmit, status }) {
  return (
    <form className="booking-form" onSubmit={onSubmit}>
      <label className="field">
        <User aria-hidden="true" />
        <input type="text" name="name" placeholder="Họ và tên" autoComplete="name" defaultValue={user?.name || ""} required />
      </label>
      <label className="field">
        <Phone aria-hidden="true" />
        <input type="tel" name="phone" placeholder="Số điện thoại" autoComplete="tel" defaultValue={user?.phone || ""} required />
      </label>
      <label className="field">
        <Mail aria-hidden="true" />
        <input type="email" name="email" placeholder="Email" autoComplete="email" defaultValue={user?.email || ""} />
      </label>
      <label className="field">
        <CalendarDays aria-hidden="true" />
        <input type="date" name="date" />
      </label>
      <label className="field wide">
        <Stethoscope aria-hidden="true" />
        <select name="service" required>
          <option value="">Chọn dịch vụ quan tâm</option>
          <option>Khám tổng quát</option>
          <option>Răng sứ thẩm mỹ</option>
          <option>Niềng răng trong suốt</option>
          <option>Implant</option>
          <option>Tẩy trắng răng</option>
          <option>Nha khoa trẻ em</option>
        </select>
      </label>
      <label className="field wide">
        <MessageSquare aria-hidden="true" />
        <textarea name="message" placeholder="Tình trạng hoặc mong muốn của bạn" />
      </label>
      <p className="form-note">{status || "Thông tin được dùng để xác nhận lịch hẹn và tư vấn phác đồ."}</p>
      <button className="btn btn-primary" type="submit">
        <Send aria-hidden="true" /> Gửi yêu cầu
      </button>
    </form>
  );
}

function AuthModal({ mode, setMode, onClose, onSubmit }) {
  const isRegister = mode === "register";

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <section className="auth-modal" role="dialog" aria-modal="true" aria-labelledby="auth-title" onMouseDown={(event) => event.stopPropagation()}>
        <button className="modal-close" type="button" onClick={onClose} aria-label="Đóng">
          <X aria-hidden="true" />
        </button>
        <div className="auth-head">
          <div className="brand-mark">
            {isRegister ? <UserPlus aria-hidden="true" /> : <LockKeyhole aria-hidden="true" />}
          </div>
          <div>
            <h2 id="auth-title">{isRegister ? "Tạo tài khoản khách hàng" : "Đăng nhập tài khoản"}</h2>
            <p>{isRegister ? "Lưu thông tin để đặt lịch nhanh hơn." : "Tiếp tục quản lý lịch hẹn và tư vấn."}</p>
          </div>
        </div>
        <div className="auth-tabs">
          <button className={mode === "login" ? "active" : ""} type="button" onClick={() => setMode("login")}>
            Đăng nhập
          </button>
          <button className={mode === "register" ? "active" : ""} type="button" onClick={() => setMode("register")}>
            Đăng ký
          </button>
        </div>
        <form className="auth-form" onSubmit={onSubmit}>
          {isRegister && (
            <label className="field">
              <User aria-hidden="true" />
              <input name="name" type="text" placeholder="Họ và tên" autoComplete="name" required />
            </label>
          )}
          <label className="field">
            <Mail aria-hidden="true" />
            <input name="email" type="email" placeholder="Email" autoComplete="email" required />
          </label>
          {isRegister && (
            <label className="field">
              <Phone aria-hidden="true" />
              <input name="phone" type="tel" placeholder="Số điện thoại" autoComplete="tel" required />
            </label>
          )}
          <label className="field">
            <LockKeyhole aria-hidden="true" />
            <input name="password" type="password" placeholder="Mật khẩu" autoComplete={isRegister ? "new-password" : "current-password"} required />
          </label>
          <button className="btn btn-primary wide" type="submit">
            {isRegister ? <UserPlus aria-hidden="true" /> : <LogIn aria-hidden="true" />}
            {isRegister ? "Tạo tài khoản" : "Đăng nhập"}
          </button>
          <p className="auth-note">
            Demo frontend: thông tin được lưu trong trình duyệt, chưa kết nối backend xác thực.
          </p>
        </form>
      </section>
    </div>
  );
}

function Footer({ navItems }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <a className="brand" href="#top">
              <span className="brand-mark">
                <Sparkles aria-hidden="true" />
              </span>
              <span>
                Azure Dental
                <small>Premium Clinic</small>
              </span>
            </a>
            <p>Nha khoa cao cấp dành cho khách hàng cần trải nghiệm sạch sẽ, tin cậy, riêng tư và minh bạch chi phí.</p>
          </div>
          <div>
            <h3>Dịch vụ</h3>
            <a href="#services">Răng sứ thẩm mỹ</a>
            <a href="#services">Niềng răng</a>
            <a href="#services">Implant</a>
            <a href="#services">Khám gia đình</a>
          </div>
          <div>
            <h3>Liên kết</h3>
            {navItems.map(([href, label]) => (
              <a key={href} href={href}>
                {label}
              </a>
            ))}
          </div>
          <div>
            <h3>Liên hệ</h3>
            <a href={`tel:${hotline}`}>{formattedHotline}</a>
            <a href="mailto:neih041024@gmail.com">neih041024@gmail.com</a>
            <a href="https://maps.google.com/?q=28%20Nguyen%20Hue%20District%201%20Ho%20Chi%20Minh" target="_blank" rel="noreferrer">
              28 Nguyễn Huệ, Quận 1, TP.HCM
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Azure Dental Studio. All rights reserved.</span>
          <span>Giấy phép hoạt động phòng khám: cập nhật theo hồ sơ pháp lý thực tế.</span>
        </div>
      </div>
    </footer>
  );
}

export default App;
