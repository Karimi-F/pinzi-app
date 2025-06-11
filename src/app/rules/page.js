"use client";

import Navbar from "@/components/NavBar";
import Footer from "../footer/page";
import { useState } from "react";

const rules = [
  "Tones",
  "Pinyin",
  "Hanzi & Stroke Order",
  "Sentence Structure",
  "Particles",
  "Measure Words",
  "Verb Tense Markers",
  "Negation",
  "Pronouns",
  "Question Words",
  "Numbers & Dates",
];

const ruleContent = {
  Tones: (
    <div>
      <h3>
        Mandarin has five tones. Each one gives a word a different meaning, even
        if the letters stay the same.
      </h3>
      <h1>THE TONE TABLE</h1>
      <h4>Tone Rules</h4>
      <ol className="list-decimal pl-6 space-y-4">
        <li>
          <div>
            <span>Tones are not optional.</span>
            <p>Changing the tone changes the word completely.</p>
          </div>
        </li>
        <li>
          <div>
            <span>Learn tones with words, not just syllables.</span>
            <p>
              Don’t memorize “mǎ” by itself. Learn mǎi dōngxi (buy stuff). Tones
              stick better with context.
            </p>
          </div>
        </li>
        <li>
          <div>
            <span>Neutral tone = soft, light, unstressed.</span>
            <p>Often used in particles like 吗 (ma), 呢 (ne), 吧 (ba).</p>
          </div>
        </li>
      </ol>
      <h3>Tone Change Rules (Tone Sandhi)</h3>
      <ol className="list-decimal pl-6 space-y-4">
        <li>
          <div>
            <p>Two 3rd tones in a row?</p>
            <p>First becomes 2nd tone.</p>
            <span>Examples:</span>
            <ul className="list-disc">
              <li>→ nǐ hǎo = ní hǎo</li>
            </ul>
          </div>
        </li>
        <li>
          <div>
            <p> “一” (yī) changes tone:</p>
            <p>First becomes 2nd tone.</p>
            <span>Examples:</span>
            <ul className="list-disc">
              <li>Before 4th tone → becomes 2nd tone → 一样 = yí yàng</li>
              <li>Before other tones → becomes 4th tone → 一百 = yì bǎi</li>
            </ul>
          </div>
        </li>
        <li>
          <div>
            <p> “不” (bù) changes tone:</p>
            <span>Examples:</span>
            <ul className="list-disc">
              <li>Before 4th tone → becomes 2nd tone → 不对 = bú duì</li>
            </ul>
          </div>
        </li>
      </ol>
    </div>
  ),
  Pinyin: (
    <div>
      <h4>What is Pinyin? </h4>
      <p>
        Pinyin is the Romanized spelling system used to represent Mandarin
        pronunciation using the Latin alphabet. It's made up of initials
        (consonants), finals (vowel sounds), and tones.
      </p>
      <h4> Pinyin Rules</h4>
      <ol className="list-decimal pl-6 space-y-4">
        <li>
          <div>
            <p>Pinyin syllables = Initial + Final + Tone</p>
            <span className="italic">Examples:</span>
            <ul className="list-disc">
              <li>mā = m (initial) + a (final) + 1st tone</li>
              <li>xiè = x + ie + 4th tone</li>
            </ul>
          </div>
        </li>
        <li>
          <div>
            <p>Spelling Rule: Tone marks always go on the main vowel</p>
            <p>Order of importance: a &gt; o &gt; e &gt; i &gt; u &gt; ü</p>
            <span className="italic">Examples:</span>
            <ul className="list-disc">
              <li>hao → hǎo (mark goes on "a")</li>
              <li>xue → xuě (mark goes on "e")</li>
            </ul>
          </div>
        </li>
        <li>
          <div>
            <p>Special spelling changes (Pinyin quirks):</p>
            <p>Some letters are just disguises 👀 and they include:</p>
            <span className="italic">
              ü → u after j, q, x, y (so "ju" is really "jü")
            </span>
            <ul className="list-disc">
              <p>y/w used to represent standalone vowels:</p>
              <li>yi = i</li>
              <li>wu = u</li>
              <li>yu = ü</li>
            </ul>
          </div>
        </li>
        <li>
          <div>
            <p>Pinyin ≠ English pronunciation</p>
            <p>Some letters sound very different:</p>
            <span className="italic">Examples:</span>
            <ul className="list-disc">
              <li>c = "ts" (like cats) → cài = tsài</li>
              <li>x = "sh" but with spread lips → xīn = sheen</li>
              <li>q = like "ch" but tighter → qì = chee</li>
              <li>zh = like "j" → zhōng = jong</li>
            </ul>
          </div>
        </li>
      </ol>
    </div>
  ),
  "Sentence Structure": (
    <div>
      <h4>CORE SENTENCE STRUCTURE (SVO)</h4>
      <ol className="list-decimal pl-6 space-y-4">
        <li>
          <div>
            <h2>Subject + Time + Place + Manner + Verb + Object</h2>
            <p> It’s how Mandarin flows most naturally.</p>
            <span>Example:</span>
            <p>我 昨天 在家 认真地 做 作业。</p>
            <p>wǒ zuótiān zài jiā rènzhēn de zuò zuòyè.</p>
            <p>= I did my homework seriously at home yesterday.</p>
            <ul className="list-disc">
              <div>
                <p>🔁 In order:</p>
              </div>
              <li>
                <div>
                  Time: <span>昨天</span>
                </div>
              </li>
              <li>
                <div>
                  Place: <span>在家</span>
                </div>
              </li>
              <li>
                <div>
                  Manner: <span>认真地</span>
                </div>
              </li>
              <li>
                <div>
                  Verb: <span>做</span>
                </div>
              </li>
              <li>
                <div>
                  Object: <span>作业</span>
                </div>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <div>
            <h2>Simple SVO Subject + Verb + Object </h2>
            <span>Examples: </span>
            <ul className="list-disc">
              <li>
                <div>
                  <span>我喜欢你。</span>= I like you.
                </div>
              </li>
              <li>
                <div>
                  <span>她吃米饭。</span>= She eats rice.{" "}
                </div>
              </li>
              <li>
                <div>
                  <span>我学中文。</span>= I study Chinese.{" "}
                </div>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <div>
            <h2>Negation: “不” or “没” comes before the verb</h2>
            <p>不 = “not” (general / future / habitual)</p>
            <p>没 = “didn’t” (past actions) </p>
            <span>Examples: </span>
            <ul>
              <li>
                <div>
                  <span>我不吃肉。</span>= I don't eat meat.
                </div>
              </li>
              <li>
                <div>
                  <span>我没去学校。</span>= I didn’t go to school.
                </div>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <div>
            <h2>
              Question = Statement + 吗 Turn any statement into a question by
              adding 吗 (ma) at the end.
            </h2>
            <span>Example: </span>
            <span>你喜欢她。→ 你喜欢她吗？</span>
            <p>= Do you like her?</p>
            <h2>OR use question words like:</h2>
            <span>
              什么 (what), 谁 (who), 哪 (which), 几 (how many), 怎么 (how){" "}
            </span>
            <span>Example:</span>
            <span>你为什么学习汉语？</span>
            <p>= Why do you study Chinese?</p>
          </div>
        </li>

        <li>
          <div>
            <h2>“有” for “to have” and “there is”</h2>
            <span>我有两个姐姐。</span>
            <p>= I have two older sisters.</p>
            <span>这里有人吗？</span>
            <p>= Is there someone here? </p>
            <h2>Use 没有 to negate:</h2>
            <span>我没有钱。</span>
            <p>= I don’t have money.</p>
          </div>
        </li>

        <li>
          <div>
            <h2>
              Topic-Comment Structure Mandarin loves to put the topic first,
              then describe it.
            </h2>
            <span>Example: </span>
            <span>这个电影，我不喜欢。</span>
            <p>= This movie, I don’t like.</p>
            <span>中文，很多人觉得难。</span>
            <p>= Chinese, many people think it’s hard.</p>
          </div>
        </li>

        <li>
          <div>
            <h2>
              Serial Verb Construction Back-to-back verbs, no "and" needed.
            </h2>
            <span>Example: </span>
            <span>我去超市买菜。</span>
            <p>= I go to the supermarket (to) buy groceries.</p>
            <span>他回家做饭。</span>
            <p>= He goes home (to) cook.</p>
          </div>
        </li>

        <li>
          <div>
            <h2><span className="font-semibold">的 / 得 / 地</span> Modifiers</h2>
            
            <ul className="list-square">
              <li><div><p>
              <span> 的 (de)</span>= connects noun adjectives
            </p></div></li>
              <li><div><p>
              <span>得 (de)</span>= connects verbs to degree complements
            </p></div></li>
              <li><div><p>
              <span>地 (de)</span>= connects adverbs to verbs
            </p></div></li>
              </ul>
            
            
            
            <span>Examples:</span>
            <ul className="list-disc">
              <li><div className="flex"><span>漂亮的女孩</span>
            <p>= pretty girl</p></div></li>
              <li><div className="flex"><span>他跑得很快</span>
            <p>= he runs fast</p></div></li>
              <li><div className="flex"><span>他认真地学习</span>
            <p>
              = he studies seriously (They all sound the same but are written
              differently depending on what you're modifying)
            </p></div></li>
            </ul>
            
            
            
            
            
          </div>
        </li>
      </ol>
    </div>
  ),
};

export default function Rules() {
  const [selected, setSelected] = useState("Tones");
  return (
    <div className="text-black bg-slate-50 min-h-screen">
      <Navbar />
      <div className="flex h-screen">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-100 border-r p-4">
          <ul className="space-y-2">
            {rules.map((rule, index) => (
              <li
                key={index}
                className="cursor-pointer p-2 rounded hover:bg-gray-200"
                onClick={() => setSelected(rule)}
              >
                {rule}
              </li>
            ))}
          </ul>
        </aside>

        {/* Main content area */}
        <main className="flex-1 p-6 overflow-y-scroll">
          <h1 className="text-2xl font-bold mb-4">{selected}</h1>
          <div>{ruleContent[selected]}</div>
          {/* Selected rule content */}
        </main>
      </div>
      <Footer />
    </div>
  );
}
