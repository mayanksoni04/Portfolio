import React from "react";

export default function contact() {
  return (
    <>
      <div className="parentofcontact">
        <h1>Contact Me</h1>
        <p>
          Reach out to me for any inquiries, opportunities, or just to connect!
        </p>
      </div>

      <div className="contact">
        <div className="conparent">
          <a
            href="mailto:mayankdz1112@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="conchild">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="orange"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-mail"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>
            <div className="mail">
              <h6>Email</h6>
            </div>
          </a>
        </div>

        <div className="conparent">
          <div className="conchild">
            <a
              href="https://www.linkedin.com/in/mayank-soni-03896324b"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="orange"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
          <a
            href="https://www.linkedin.com/in/mayank-soni-03896324b"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="mail">
              <h6>Linkdin</h6>
            </div>
          </a>
        </div>
        <div className="conparent">
          <div className="conchild">
            <a
              href="https://github.com/mayanksoni04"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="orange"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-github"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
          </div>
          <a
            href="https://github.com/mayanksoni04"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="mail">
              <h6>Github</h6>
            </div>
          </a>
        </div>
        <div className="conparent">
          <a
            href="https://www.instagram.com/mayank04__?igsh=MWYzYXRlYTY1MGFvOQ=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="conchild">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="orange"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </div>
          </a>
          <a
            href="https://www.instagram.com/mayank04__?igsh=MWYzYXRlYTY1MGFvOQ=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="mail">
              <h6>Instagram</h6>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
