#include <bits/stdc++.h>
#define xh(i,a,b) for(register int (i)=(a);(i)<(b);++(i))
#define ll long long
using namespace std;

template <typename T>
T rd(T& x) {
	x = 0;
	bool f = 1;
	char c = getchar();
	while(c > '9' || c < '0') {
		f = c - '-';
		c = getchar();
	}
	while(c >= '0' && c <= '9') {
		x = x * 10 + c - '0';
		c = getchar();
	}
	x = f ? x : -x;
	return x;
}


const ll INF = 0x3f3f3f3f, N = 550;
string nam[N];
bool e[N][N];
int n, sp[N][N], ma, ans[N], fa[N], cnt;
ll nc[N][N], ai;
vector<ll>eo[N], bp, soc[N];
ll mem[N], bs, ss;
double mbc, bc[N], cc[N], mcc;
bool by[N], sn[N];


inline void bfs(int ori) {
	bp.clear();
	bp.push_back(ori);
	nc[ori][ori] = 1;
	for(int t = 0; t < bp.size(); ++t) {
		xh(i, 0, eo[bp[t]].size())
		if(nc[ori][eo[bp[t]][i]] == 0) {
			nc[ori][eo[bp[t]][i]] = nc[ori][bp[t]];
			sp[ori][eo[bp[t]][i]] = sp[ori][bp[t]] + 1;
			bp.push_back(eo[bp[t]][i]);
		} else if(sp[ori][eo[bp[t]][i]] == sp[ori][bp[t]] + 1) {
			nc[ori][eo[bp[t]][i]] += nc[ori][bp[t]];
		}
	}
	return;
}



int main() {
	n = 500;
	memset(sp, 0x3f, sizeof(sp));
	xh(i, 0, n)sp[i][i] = 0;

	//freopen("Top500.txt", "r", stdin);
	printf("把500个人的名字贴进来：");
	xh(i, 0, n)
	cin >> nam[i];

	freopen("final.txt", "w", stdout);
	freopen("fha_pro1.txt", "r", stdin);
	xh(i, 0, n) {
		rd(fa[i]);
		rd(fa[i]);
		--fa[i];
	}

	freopen("cppData1.txt", "r", stdin);
	xh(i, 0, n)
	xh(j, 0, n) {
		rd(e[i][j]);
		if(i == j)e[i][j] = 0;
		if(e[i][j]) {
			eo[i].push_back(j);
			++cnt;
		}
	}

	xh(i, 0, n) bfs(i);

	xh(k, 0, n)
	xh(i, 0, n)
	xh(j, 0, n)
	if(sp[i][j] == sp[i][k] + sp[k][j] && i != k && j != k && nc[i][j] != 0)
		bc[k] += (double)nc[i][k] / nc[i][j] * nc[k][j];

	xh(i, 0, n) {
		++mem[fa[i]];
		soc[fa[i]].push_back(i);
	}

	//xh(i, 0, n)
	//cout << i + 1 << ' ' << nam[i] << ' '<<bc[i]<< '\n';

	xh(i, 0, n)
	if(mem[i] > 3)++bs;
	else if(mem[i] == 2 || mem[i] == 3)++ss;

	xh(i, 0, n)
	if(mem[fa[i]] <= 3)by[i] = 1;

	xh(i, 0, bs) {
		mbc = -114514;
		xh(j, 0, n)
		if(bc[j] > mbc) {
			mbc = bc[j];
			ai = j;
		}
		bc[ai] *= -1;
		sn[ai] = 1;
	}

	printf("枢纽：\n");
	xh(i, 0, n) {
		if(sn[i])
			cout << i + 1 << ' ' << nam[i] << " " << bc[i] * -1 << '\n';
	}

	printf("边缘人物：\n");
	xh(i, 0, n) {
		if(sn[i] == 0 && by[i] == 1)
			cout << i + 1 << "  " << nam[i] << '\n';
	}

	printf("中心人物：\n");
	xh(i, 0, n)
	if(soc[i].size() > 3) {
		mcc = -1;
		printf("社群%d：", i + 1);
		xh(j, 0, soc[i].size()) {
			xh(k, 0, soc[i].size())
			if(sp[soc[i][j]][soc[i][k]] != INF)
				cc[soc[i][j]] += sp[soc[i][j]][soc[i][k]];
			if(cc[soc[i][j]] == 0)
				cc[soc[i][j]] = -1;
			cc[soc[i][j]] = (soc[i].size() - 1) / cc[soc[i][j]];
			if(cc[soc[i][j]] > mcc) {
				mcc = cc[soc[i][j]];
				ai = soc[i][j];
			}
		}
		cout << ai + 1 << "  " << nam[ai] << " " << cc[ai] << '\n';
	}

	printf("全局中心人物：\n");
	memset(cc, 0, sizeof(cc));
	ai = mcc = -1;
	xh(i, 0, n) {
		xh(j, 0, n)
		if(sp[i][j] != INF)
			cc[i] += sp[i][j];
		if(cc[i] == 0)
			cc[i] = -1;
		cc[i] = (n - 1) / cc[i];
		if(cc[i] >= mcc) {
			mcc = cc[i];
			ai = i;
		}
	}
	cout << ai + 1 << "  " << nam[ai] << " " << cc[ai] << '\n';

	//xh(i, 0, n)
	//cout << i + 1 << ' ' << nam[i] << ' '<<cc[i]<< '\n';
	return 0;
}

