({
  onWillParseMarkdown: async function (markdown) {
    markdown = markdown.replace(
      /:::warning(.*?)\n([\s\S]*?):::/gm,
      (danger_alert, title, content) => {
        return `<div style="border-left: 4px solid #ff8c00; background-color: #fff5e6; padding: 10px 16px 1px 16px; border-radius: 6px; margin: 8px 0;">
          <p style="font-weight: bold; color: #ff8c00; display: flex; align-items: center;">
              <svg style="fill: #ff8c00; margin-right: 8px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true">
                  <path d="M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path>
              </svg>WARNING! ${title}
          </p>
          <p>\n\n${content}</p>
      </div>`;
      }
    );

    markdown = markdown.replace(
      /:::note(.*?)\n([\s\S]*?):::/gm,
      (success_alert, title, content) => {
        return `<div style="border-left: 4px solid #0366d6; background-color: #f1f8ff; padding: 10px 16px 1px 16px; border-radius: 6px; margin: 16px 0;">
          <p style="font-weight: bold; color: #0366d6; display: flex; align-items: center;">
              <svg style="fill: #0366d6; margin-right: 8px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true">
                  <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path>
              </svg>NOTE: ${title}
          </p>
          <p>\n\n${content}</p>
      </div>`;
      }
    );

    markdown = markdown.replace(
      /:::important(.*?)\n([\s\S]*?):::/gm,
      (info_alert, title, content) => {
        return `<div style="border-left: 4px solid #8957E5; background-color: #e7dbff; padding: 10px 16px 1px 16px; border-radius: 6px; margin: 16px 0;">
          <p style="font-weight: bold; color: #8957E5; display: flex; align-items: center;">
              <svg style="fill: #8957E5; margin-right: 8px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true">
                  <path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v9.5A1.75 1.75 0 0 1 14.25 13H8.06l-2.573 2.573A1.458 1.458 0 0 1 3 14.543V13H1.75A1.75 1.75 0 0 1 0 11.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.5c0 .138.112.25.25.25h2a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h6.5a.25.25 0 0 0 .25-.25v-9.5a.25.25 0 0 0-.25-.25Zm7 2.25v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path>
              </svg>IMPORTANT! ${title}
          </p>
          <p>\n\n${content}</p>
      </div>`;
      }
    );

    markdown = markdown.replace(
      /:::tip(.*?)\n([\s\S]*?):::/gm,
      (tip_alert, title, content) => {
        return `<div style="border-left: 4px solid #28a745; background-color: #e6ffed; padding: 10px 16px 1px 16px; border-radius: 6px; margin: 16px 0;">
          <p style="font-weight: bold; color: #28a745; display: flex; align-items: center;">
              <svg style="fill: #28a745; margin-right: 8px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true">
                  <path d="M8 1.5c-2.363 0-4 1.69-4 3.75 0 .984.424 1.625.984 2.304l.214.253c.223.264.47.556.673.848.284.411.537.896.621 1.49a.75.75 0 0 1-1.484.211c-.04-.282-.163-.547-.37-.847a8.456 8.456 0 0 0-.542-.68c-.084-.1-.173-.205-.268-.32C3.201 7.75 2.5 6.766 2.5 5.25 2.5 2.31 4.863 0 8 0s5.5 2.31 5.5 5.25c0 1.516-.701 2.5-1.328 3.259-.095.115-.184.22-.268.319-.207.245-.383.453-.541.681-.208.3-.33.565-.37.847a.751.751 0 0 1-1.485-.212c.084-.593.337-1.078.621-1.489.203-.292.45-.584.673-.848.075-.088.147-.173.213-.253.561-.679.985-1.32.985-2.304 0-2.06-1.637-3.75-4-3.75ZM5.75 12h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5ZM6 15.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Z"></path>
              </svg>TIP:${title}
              </p>
              <p>\n\n${content}</p>
          </div>`;
      }
    );
    markdown = markdown.replace(
      /:::caution(.*?)\n([\s\S]*?):::/gm,
      (tip_alert, title, content) => {
        return `<div style="border-left: 4px solid #d93f0b; background-color: #fff5f5; padding: 10px 16px 1px 16px; border-radius: 6px; margin: 16px 0;">
          <p style="font-weight: bold; color: #d93f0b; display: flex; align-items: center;">
            <svg style="fill: #d93f0b; margin-right: 8px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true">
              <path d="M4.47.22A.749.749 0 0 1 5 0h6c.199 0 .389.079.53.22l4.25 4.25c.141.14.22.331.22.53v6a.749.749 0 0 1-.22.53l-4.25 4.25A.749.749 0 0 1 11 16H5a.749.749 0 0 1-.53-.22L.22 11.53A.749.749 0 0 1 0 11V5c0-.199.079-.389.22-.53ZM5.31 1.5L1.5 5.31v5.38l3.81 3.81h5.38l3.81-3.81V5.31L10.69 1.5ZM8 4a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 8 4Zm0 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path>
            </svg>CAUTION:${title}
              </p>
              <p>\n\n${content}</p>
          </div>`;
      }
    );
    markdown = markdown.replace(
      /:::question(.*?)\n([\s\S]*?):::/gm,
      (tip_alert, title, content) => {
        return `<div style="border-left: 4px solid #d93f6b; background-color: #fff0f5; padding: 10px 16px 1px 16px; border-radius: 6px; margin: 16px 0;">
          <p style="font-weight: bold; color: #d93f6b; display: flex; align-items: center;">
            <svg style="margin-right: 8px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true">
              <circle cx="8" cy="8" r="7.5" fill="#fff0f5" stroke="#d93f6b" stroke-width="1" />
              <path d="M8 4c.55 0 1.033.102 1.45.305.428.21.759.52.993.928.235.408.352.872.352 1.392 0 .418-.143.816-.429 1.194-.286.318-.618.584-.875.794-.222.178-.413.33-.573.454-.171.134-.275.247-.314.348-.04.101-.06.277-.06.53H7.17c0-.401.048-.719.145-.954.097-.235.267-.448.51-.638.215-.169.4-.318.554-.447.152-.128.296-.27.43-.426.14-.163.251-.331.334-.506.083-.175.125-.363.125-.563 0-.353-.12-.626-.36-.818-.24-.191-.557-.287-.95-.287-.307 0-.553.064-.739.191-.186.127-.28.29-.28.49h-1.5c0-.454.139-.846.417-1.176.277-.33.665-.58 1.164-.751.286-.095.613-.143.981-.143Z" fill="#d93f6b"/>
              <circle cx="8" cy="11.5" r="1" fill="#d93f6b"/>
            </svg>
            QUESTION:${title}
          </p>
          <p>\n\n${content}</p>
        </div>`;
      }
    );

    markdown = markdown.replace(
      /:::column\s*([\s\S]*?)\s*\|([\s\S]*?)\s*:::/gm,
      (pipe_alert, first, second) => {
        let sections = [first, ...second.split("|").map((s) => s.trim())];

        // 各カラムの幅を100%をセクション数で等分したサイズに設定
        const sectionWidth = `${-0.5 + 100 / sections.length}%`;

        const styles = [
          { borderColor: "#007bff", bgColor: "#e9f5ff", textColor: "#007bff" },
          { borderColor: "#28a745", bgColor: "#e6ffed", textColor: "#28a745" },
          { borderColor: "#ffc107", bgColor: "#fff8e1", textColor: "#ffc107" },
          { borderColor: "#dc3545", bgColor: "#ffe6e6", textColor: "#dc3545" },
        ];

        const sectionContent = sections
          .map((section, i) => {
            const style = styles[i % styles.length];
            return `<div style="width: ${sectionWidth}; box-sizing: border-box;">
                      <p white-space: pre-wrap;">\n\n${section.trim()}</p>
                    </div>`;
          })
          .join("\n");

        return `<div style="display: flex; flex-wrap: wrap; justify-content: space-between; width: 100%; gap: 2px;">
             ${sectionContent}
                </div>`;
      }
    );

    return markdown;
  },

  onDidParseMarkdown: async function (html) {
    return html;
  },

  onWillTransformMarkdown: async function (markdown) {
    return markdown;
  },

  onDidTransformMarkdown: async function (markdown) {
    return markdown;
  },

  processWikiLink: function ({ text, link }) {
    return {
      text,
      link: link ? link : text.endsWith(".md") ? text : `${text}.md`,
    };
  },
});
